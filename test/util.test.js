import cleanInputString from '../src/util';

describe('test util.js', () => {
    test('should trim input string', () => {
        let cleanString = cleanInputString(' testInputString ');
        expect(cleanString).toEqual('testInputString');
    });
});