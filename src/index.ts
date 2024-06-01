
const btn = document.getElementById('btn');

// function once<T extends any[]>(fn: (...args: T) => any) {
// 	let done = false;

// 	return (...args: T) => {
// 		if(!done) {
// 			done = true;
// 			fn(...args);
// 		}
// 	}
// }

// const data = 5;

// // function btnClicked(event: Event, _data: number) {
// // 	console.log((<HTMLButtonElement>event.target), _data);
// // }

// function squeak(a: string) {
// 	console.log('Squeak', a);
// }

// const squeakOnce = once(squeak);

// squeakOnce('A1');
// squeakOnce('A2');

// // btn?.addEventListener('click', once((event: Event) => btnClicked(event, data)));

// const counter = (function(initialValue = 0) {
//   let counter = initialValue;
//   return function() {
//     counter ++;
//     return counter;
//   }
// })(77);

// console.log(counter());
// console.log(counter());


// function somethingElse(...args: any[]) {
//   console.log(...args)
// }



// function listArgs(...args: any[]) {
//   console.log(...args);
//   somethingElse(...args)
// }
// listArgs(22);

const obj = {
  name: 'Beshoy',
  func(data: any) {
    console.log('data', this);
  }
}

btn?.addEventListener('click',  (event) => {
  obj.func(event);
});


(function () {console.log('is work??')}.bind(obj))

export {}

// please write a string