const { cube } = require('../index');

test('return the cube of the given argument', () => {
	expect(cube(3)).toBe(27);
	expect(cube(4)).toBe(64);
});