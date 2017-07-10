const { pow } = require('../index');

test('x to the power of n', () => {
	expect(pow(8, 2)).toBe(64);
	expect(pow(4, 9)).toBe(262144);
	expect(pow(4, 6)).toBe(4096);
});