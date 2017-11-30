class cast{

	constructor(){
		this.numbers = [0, 0, 0, 0, 0];
	}

	throw(count){
		let string = '';
		for(let i = 0; i < count; i++){
    		this.numbers[i] = this.getRandomInt(1, 6);
    		string += this.numbers[i] + ' ';
		}
    	// console.log(string);
    	return this.numbers;
	}

	getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}

export default new cast();