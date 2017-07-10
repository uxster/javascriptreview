const { lastChar } = require('../index');

test('return the lastChar of 3 parameters', () => {
	expect(lastChar('cattywampus')).toBe('s');
	expect(lastChar('Thats amazing!')).toBe('!');
});