const { rellif } = require('../index');

var obj1 = { exciting: "markets", exotic: "britain" };
var obj2 = { a: "x", b: "y", c: "z" };

test('fill an object which shows the keys and the values with an array', () => {
	expect(rellif(obj1)).toEqual({ keys: ["exciting", "exotic"], values: ["markets", "britain"] });
	expect(rellif(obj2)).toEqual({ keys: ["a", "b", "c"], values: ["x", "y", "z"] });
});