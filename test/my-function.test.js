import appendLy from '../src/my-function';

test('should change silly to sillyly', () => {
    expect(appendLy('silly')).toEqual('sillyly');
});