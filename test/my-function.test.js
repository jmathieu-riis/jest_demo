import appendLy from '../src/my-function';
import cleanInputString from '../src/util';


jest.mock(cleanInputString);


test('should call cleanInputString', () => {
    appendLy('silly');
    expect(cleanInputString).toHaveBeenCalledWith('silly');
});

test('should change silly to sillyly', () => {
    expect(appendLy('silly')).toEqual('sillyly');
});