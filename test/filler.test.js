const { filler } = require('../index');

var array1 = ["exciting", "exotic"];
var array2 = ["markets", "britain"];
var array3 = ["a", "b", "c"];
var array4 = [3, true, 42];

test('fill an object with keys and items from 2 arrays', () => {
	expect(filler(array1, array2)).toEqual({ exciting: 'markets', exotic: 'britain' });
	expect(filler(array3, array4)).toEqual({ a: 3, b: true, c: 42 });
});