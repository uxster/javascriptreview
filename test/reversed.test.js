const { reversed } = require('../index');

test('return the reversed string', () => {
	expect(reversed('Hello')).toBe('olleH');
	expect(reversed('Hello this is dog!')).toBe('!god si siht olleH');
});