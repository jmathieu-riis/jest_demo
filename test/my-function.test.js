jest.mock('../src/util');
import cleanInputString from '../src/util';
import appendLy from '../src/my-function';

describe('test my-function.js', () => {
    beforeEach(() => {
        cleanInputString.mockImplementation(inputString => inputString);
    });

    test('should call cleanInputString', () => {
        appendLy('silly');
        expect(cleanInputString).toHaveBeenCalledWith('silly');
    });
    
    test('should change silly to sillyly', () => {
        expect(appendLy('silly')).toEqual('sillyly');
    });
});