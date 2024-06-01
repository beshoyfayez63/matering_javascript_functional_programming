const roundFix = (function() {
	let accum = 0;
	return (n: number) => {
		let nRounded = accum > 0 ? Math.ceil(n) : Math.floor(n);
		accum += n - nRounded;
		console.log('accum', accum.toFixed(5), 'result', nRounded);
		return nRounded;
	}
})()

console.log(roundFix(3.14159)); // 0.00000 result 3
console.log(roundFix(2.71828)); // 0.14159 result 3
console.log(roundFix(2.71828)); // accum -0.14013 result 2
console.log(roundFix(3.14159)); // accum 0.57815 result 4
console.log(roundFix(2.71828)); // accum -0.28026 result 2
console.log(roundFix(2.71828)); // accum 0.43802 result 3
console.log(roundFix(2.71828)); // accum 0.15630 result 3

const countries = ["Argentina", "Uruguay", "Brazil", "Paraguay"];

const maxStrings = (a: string[]) => a.sort()[a.length - 1]
console.log(maxStrings(countries));
console.log(countries);

const getRandomLetter = () => {
	const min = "A".charCodeAt(0);
	const max = "Z".charCodeAt(0);
	return String.fromCharCode(
		Math.floor(Math.random() * (1 + max - min)) + min
	)
}

const getRandomFileName = (fileExtension = '') => {
	const NAME_LENGTH = 12;
	const namePart = new Array(NAME_LENGTH);
	for(let i = 0; i < NAME_LENGTH; i++) namePart[i] = getRandomLetter();
	return namePart.join('') + fileExtension;
}

console.log(getRandomFileName('.pdf'));
import './global_state'
import './inner_state';
import './argument_mutation'
import './memomization'
import './avoid_state'
import './is_pure'
