class Map {

    map = null;
    options = null;
    pinOptions = null;
    pinOptionsActive = null;
    mapReady = false;
    markers = [];
    infoWindow = null;
    bounds = null;
    holdMarker = false;
    MarkerWithLabel = null;

    mapOptions = {
        script: 'https://maps.googleapis.com/maps/api/js?key=',
        zoom: 15,
        center: null,
        longitude: 50.011066,
        latitude: 36.318472,
        disableDefaultUI: true,
        scrollwheel: false,
        zoomControl: true,
        pinIcon: '../images/pin.png',
        pinIconActive: '../images/pin.png',
        gestureHandling: 'cooperative',
        styles: [{"stylers":[{"hue":"#dd0d0d"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]}],
        markers: [
            {   id: 1,
                title: 'marker 1 qwidoqwidhuqiw hqwdoqw quiwdhiqw qwdhqw qi dp',
                address: '935 N 2nd St, Philadelphia, PA 19123',
                desc: '000',
                tel: '000-000-000',
                email: '000@mail.ru',
                image: 'https://pbs.twimg.com/profile_images/660946436801101824/niM7azZS.jpg',
                lat: 50.011066,
                lng: 36.318472
            }]
    };
    
    constructor($map, apiKey) {
         this.init($map, apiKey);
    }

    init($map, apiKey){
        if(this.mapOptions) {
            $.getScript(this.mapOptions.script + apiKey)
                .done(() => {
                    this.initOptions($map);

                    if (this.mapReady) {
                        this.initHandlers();
                        this.initMarkers();
                    }
                })
        }
    }
    
    initOptions($map){
        this.mapReady = ($map[0] !== undefined && !!this.mapOptions);

        if(this.mapReady){
            if(this.mapOptions.longitude && this.mapOptions.latitude){
                if($map.attr('data-longitude'))
                    this.mapOptions.longitude = +$map.attr('data-longitude');
                if($map.attr('data-latitude'))
                    this.mapOptions.latitude = +$map.attr('data-latitude');
                this.options = this.mapOptions;
            }

            this.mapReady = true;
            this.map = new google.maps.Map($map[0], this.mapOptions);
            
            this.map.setCenter({ lat: this.mapOptions.longitude, lng: this.mapOptions.latitude });
            this.map.setZoom(this.options.zoom);

            this.MarkerWithLabel = require('markerwithlabel')(google.maps);

            this.pinOptions = {
                url: this.options.pinIcon,
                scaledSize: new google.maps.Size(60, 60)
            };

            this.pinActiveOptions = {
                url: this.options.pinIcon,
                scaledSize: new google.maps.Size(60, 60)
            };

            this.infoWindow = new google.maps.InfoWindow();
        }
    }

    initHandlers(){
        let timer;
        google.maps.event.addDomListener(window, "resize", () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                if(this.options.markers && this.options.markers.filter((e) => { return e.fit; }).length > 0)
                    this.map.fitBounds(this.bounds);
                else {
                    this.map.setCenter({lat: this.mapOptions.longitude, lng: this.mapOptions.latitude});
                    this.map.setZoom(this.options.zoom);
                }
                clearTimeout(timer);
            }, 300);
        });

        this.map.addListener('click', () => {
            if(this.options.markers) {
                this.resetMarkers();
                this.holdMarker = false;
            }
        });
    }

    selectMarker(marker, options){
        marker.setIcon(this.pinActiveOptions);
        this.infoWindow.setContent(this.getContentInfoWindow());
        // this.infoWindow.open(this.map, marker);
    }

    selectMarkersById(id){
        this.options.markers.forEach((element, index) => {
            if (id === element.id) {
                this.map.panTo(new google.maps.LatLng(element.lat, element.lng));
                google.maps.event.trigger(this.markers[index], 'click');
            }
        });
    }

    resetMarkers(){
        this.markers.forEach((element, index) => {
            element.setIcon(this.pinOptions);
        });
    }

    getContentInfoWindow(){
        return `<address class="marker-address">
                    <h3>Адрес магазина</h3>
                    <p><a href="#">Харьков, Харьковськая область, 61000<br>ул. Академика Павлова, 271</a></p>
                    <p><a href="tel:+380500717955"><i class="fa left fa-phone" aria-hidden="true"></i>+38 (050) 071-79-55</a></p>
                    <p><a href="tel:+380500717955"><i class="fa left fa-phone" aria-hidden="true"></i>+38 (050) 071-79-55</a></p>
                    <p><a href="mailto:magnathifi@gmail.com"><i class="fa left fa-envelope-o" aria-hidden="true"></i>magnathifi@gmail.com</a></p>
                </address>
                <div class="open-time marker-time">
                    <h3>Время работы</h3>
                    <p><i class="fa left fa-clock-o" aria-hidden="true"></i>10:00 - 19:00 (пн - пт)</p>
                    <p><i class="fa left fa-clock-o" aria-hidden="true"></i>10:00 - 17:00 (сб)</p>
                    <p><i class="fa"></i>Воскресенье - выходной</p>
                </div>`;
    }

    initMarkers(){
        this.bounds = new google.maps.LatLngBounds();

        if(!!this.options.markers) {
            this.options.markers.forEach((element, index) => {

                    let position = new google.maps.LatLng(this.options.longitude, this.options.latitude);

                    let marker = new this.MarkerWithLabel({
                        map: this.map,
                        position: position,
                        icon: this.pinOptions
                    });

                    this.markers.push(marker);
                    this.selectMarker(marker, element);

                    if(element.fit)
                        this.bounds.extend(position);

                    marker.addListener('click', () => {
                        this.selectMarker(marker, element);
                        // this.infoWindow.open(this.map, marker);
                    });
                }
            );

            if(this.bounds.b.b !== 180){
                this.map.fitBounds(this.bounds);
            }
        }
    }
}

export default Map;