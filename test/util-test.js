import cleanInputString from '../src/util';

describe('test util.js', () => {
    test('should trim input string', () => {
        trim = jest.fn(inputString => inputString)
        cleanInputString('testInputString');
        expect(trim).toHaveBeenCalled();
    });
});