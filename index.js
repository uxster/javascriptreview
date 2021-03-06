const logger = (x) => process.env.NODE_ENV === 'test' ? null : console.log(x);

// write a function that takes in three parameters and returns the sum of those three parameters
function sum(a, b, c) {
	var result = a + b + c;
	logger(result);
	return result;
};

sum(1, 2, 3);			//6
sum(8998, 1, 1);		//9000

logger("/////////////////////////");

// given a string, create a function that returns the last character in that string.
function lastChar(string) {
	var result = string[string.length - 1];
	logger(result);
	return result;
};

lastChar('cattywampus');		//s
lastChar('Thats amazing!');		//!

logger("/////////////////////////");

// write a function that takes in one parameter and returns the cube of that parameter
function cube(number) {
	var result = number * number * number;
	logger(result);
	return result;
};

cube(3);		//27
cube(4);		//64

logger("/////////////////////////");

// define a function that takes in a string and reverses it. you are not allowed to
// call the "reverse" function (or any other string functions)

/*Reversing a string is one of the most frequently asked JavaScript question in the technical round of 
interview. Interviewers may ask you to write different ways to reverse a string, or they may ask you to 
reverse a string without using in-built methods, or they may even ask you to reverse a string using 
recursion.
*/

function reversed(string) {
	var emptyString = "";

	for (var i = string.length - 1; i >= 0; i--) {
		emptyString += string[i];
	}

	logger(emptyString);
	return emptyString;
}

reversed('Hello');					//olleH
reversed('Hello this is dog!');		//!god si siht olleH

logger("/////////////////////////");

// write a function that takes in two arrays of the same length as parameters. From those two arrays,
// create, then return an object which contains the elements of the first array as keys, and the
// elements of the second array as values.
var array1 = ["exciting", "exotic"];
var array2 = ["markets", "britain"];
var array3 = ["a", "b", "c"];
var array4 = [3, true, 42];

function filler(arr1, arr2) {
	var emptyObject = {};

	for (var i = 0; i < arr1.length; i++) {
		emptyObject[arr1[i]] = arr2[i];
	}

	logger(emptyObject);
	return emptyObject;
}

filler(array1, array2);		//{ exciting: 'markets', exotic: 'britain' }
filler(array3, array4);		//{ a: 3, b: true, c: 42 }

logger("/////////////////////////");

// Given an object with keys and values, create two arrays: one which contains the object's keys,
// and one which contains the object's values. Wrap this into a function which takes in one object
// that contains keys and values, and returns a different object that contains two keys. The first key
// should be named "keys" and will have the first array as a value. The second key should be named
// "values" and will have the second array as a value.
var obj1 = { exciting: "markets", exotic: "britain" };
var obj2 = { a: "x", b: "y", c: "z" };

function rellif(obj) {
	var keysArray = [];
	var valuesArray = [];
	var result = {}; 

	for (var key in obj) {
		keysArray.push(key);
		valuesArray.push(obj[key]);
	}

	result.keys = keysArray;
	result.values = valuesArray;

	logger(result);
	return result;
}

rellif(obj1);		//{ keys: ["exciting", "exotic"], values: ["markets", "britain"] }
rellif(obj2);		//{ keys: ["a", "b", "c"], values: ["x", "y", "z"] }

logger("/////////////////////////");

// OPTIONAL CHALLENGE 1
// write a function that takes in two parameters, x and n, and computes x to the n'th power
// you may not use Math.* functions
function pow(x, n) {
	var result = x;

	while (--n) result *= x;

	logger(result);
	return result;
}

pow(8, 2);		//64
pow(4, 9);		//262144
pow(4, 6);		//4096

logger("/////////////////////////");

// OPTIONAL CHALLENGE 2
// Jon has terrible social anxiety, and wishes to sit as far away from everyone as possible.
// Given an array of booleans, where the array represents a row of seated people, and each
// boolean represents whether the seat is occupied or not, find the ideal seat for Jon.

var people = [true, false, true, true, true, true, true, false, false, false, false, false, true];
//expected value: i = 9

//export all the function to be able to test them with jest
module.exports = {
	sum,
	lastChar,
	cube,
	reversed,
	filler,
	rellif,
	pow,
}
