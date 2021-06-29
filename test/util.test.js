import cleanInputString from '../src/util';

describe('test util.js', () => {
    test('should trim input string', () => {
        const trimSpy = jest.spyOn(String.prototype, 'trim');
        cleanInputString(' testInputString ');
        expect(trimSpy).toHaveBeenCalled();
    });
});