import CAST from '../classes/cast';
import RESULTS from '../classes/results';

export default {

	numbers: [0, 0, 0, 0, 0],
	
	init() {
		this.play();
	},

	play() {
		setInterval(() => {
			
		}, 10);

		$('#throw').on('click', (e) => {
			e.preventDefault();

			this.numbers = CAST.throw(5);

			// RESULTS.getSum(this.numbers);
			RESULTS.getSum([1, 5, 1, 5, 1]);
		});
    },
};

