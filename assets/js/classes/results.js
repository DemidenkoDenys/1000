class results{

	constructor(){
		this.nums = [0, 0, 0, 0, 0, 0];
		this.numbers = [];
		this.numbersIndexes = this.getNumbersArray(this.numbers.length);
	}

	getSum(numbers){
		this.numbers = numbers;
		this.setNumberSums(numbers);
		this.showNumbers();
		this.showSums();
		this.checkResult();
	}

	checkResult(){
		let max = this.getMaxOfArray(this.nums), sum = 0;

		switch(max){
			case 5: sum = 1000; break;
			case 1: sum = this.checkStreet(max); break;
			case 3:
			case 4: sum = this.checkThreeFour(max); break;
			default: sum = this.checkFiveTen(true, true);
		}

		console.log(sum);
	}

	checkStreet(max){
		if(max === 1 && this.nums.reduce(
			(a, b) => { return b === 1 ? a + b : a + 0 }, 0) === 5){
			if(!this.nums[0]) return 250;
			else if(!this.nums[5]) return 125;
			else return this.checkFiveTen(true, true);
		}   else return this.checkFiveTen(true, true);
	}

	checkThreeFour(max){
		let threeFourSum = 0, fives = false, tens = false;
		
		for(let i = 0; i < 6; i++){
			if(this.nums[i] === max){
				threeFourSum = i === 0 ? (max === 4 ? 200 : 100) : (i + 1) * (max === 4 ? 20 : 10);
				if(i === 0) tens = true;
				if(i === 4) fives = true;
			}
		}

		threeFourSum += this.checkFiveTen(!fives, !tens);
		return threeFourSum;
	}

	checkFiveTen(five, ten){
		return ((five) ? this.nums[4] * 5 : 0) + ((ten) ? this.nums[0] * 10 : 0);
	}

	getNumbersArray(count){
		return [0, 1, 2, 3, 4].filter((value) => {
			return value <= count - 1;
		})
	}

	setNumberSums(numbers){
		this.clearNumbers();
		for(let i = 0; i < 5; i++)
			this.nums[numbers[i] - 1]++;
	}

	showSums(){
		let string = '';
		for(let l = 0; l < 6; l++)
			string += this.nums[l];
		console.log(string);
	}

	showNumbers(){
		let string = '';
		for(let l = 0; l < 5; l++)
			string += this.numbers[l] + " ";
		console.log(string);	
	}
	
	getMaxOfArray(numArray) {
 		return Math.max.apply(null, numArray);
	}

	clearNumbers(){
		this.nums = [0, 0, 0, 0, 0, 0];
	}

}

export default new results();