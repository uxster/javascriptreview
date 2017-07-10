const { sum } = require('../index');

test('return the sum of 3 parameters', () => {
	expect(sum(1, 2, 3)).toBe(6);
	expect(sum(8998, 1, 1)).toBe(9000);
});