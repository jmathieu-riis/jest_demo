/// <reference path="@types/nested.d.ts"/>
jest.mock('../src/util');
import cleanInputString from '../src/util';
import appendLy from '../src/my-function';
import MY_NESTED_CONSTANT from 'nested';
// import * as yes from '../src/types/yes';
import * as yes from '@src/types/yes';

describe('test my-function.js', () => {
    beforeEach(() => {
        // @ts-ignore
        cleanInputString.mockImplementation(inputString => inputString);
    });

    test('should call cleanInputString', () => {
        appendLy('silly');
        expect(cleanInputString).toHaveBeenCalledWith('silly');
    });
    
    test('should change silly to sillyly', () => {
        expect(appendLy('silly')).toEqual('sillyly');
    });

    test('should change yes to yesly', () => {
        expect(appendLy(yes)).toEqual('yesly');
    });

    test('should append `ly` to MY_NESTED_CONSTANT', () => {
        expect(appendLy(MY_NESTED_CONSTANT)).toEqual(MY_NESTED_CONSTANT + 'ly');
    });
});