const cache = {
	1: 0,
	2: 0,
	3: 0,
	4: 0
}

const randomString = () => {
	const min = 0;
	const max = 4;
	const dataType = randomRange(min, max);
	cache[dataType]++;
	switch(dataType) {
		case 1:
			return randomString2();
			break;
		case 2:
			return randomRange(0, Math.pow(10, 10));
			break;
		case 3:
			return randomNumber()
			break;
		case 4:
			return randomAlphanumberic();
			break;
	}
	return dataType;
}

const randomRange = (min, max) => {
	return Math.floor(Math.random() *  (max - min) + 1) + min;
}

const randomAlphanumberic = (len = 100) => {
	let l = randomRange(1, len);
	let a = '';
	while(l-->0) {
		const t = randomRange(1,4);
		if(t%2===0) {
			a += String.fromCharCode('a'.charCodeAt(0) + randomRange(0, 25));
		} else {
			a += String.fromCharCode('0'.charCodeAt(0) + randomRange(0, 9)); 
		}
	}
	return a;
}

const randomString2 = (len = 100) => {
	let l = randomRange(1, len);
	let a = '';
	while(l-->0) {
		a += String.fromCharCode('a'.charCodeAt(0) + randomRange(0, 25));
	}
	return a;
}

const randomNumber = (len = 9) => {
	let l = randomRange(1, len);
	return Math.pow(10, l)*Math.random();
}

const fs = require('fs');
fs.appendFile('helloworld.txt', randomString() + ',', function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});

// fs.readFile('helloworld.txt', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   const anayltic = {
// 	1: 0,
// 	2: 0,
// 	3: 0,
// 	4: 0
//   }
//   data.split(',').filter(a => a).forEach(string => {
//   	// if(Number.)
//   });
// });
