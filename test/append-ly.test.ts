/// <reference path="../src/types/nested.d.ts"/>
jest.mock('@src/util');
import { appendLy } from '@src/append-ly';
import { yes } from '@mytypes/yes';
import { mocked } from 'ts-jest/utils';
import { cleanInputString } from '@src/util';
// import MY_NESTED_CONSTANT from 'nested';


describe('test my-function.js', () => {
    const cleanInputStringMock = mocked(cleanInputString, true);

    beforeEach(() => {
        cleanInputStringMock.mockImplementation(inputString => inputString);
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

    // test('should append `ly` to MY_NESTED_CONSTANT', () => {
    //     expect(appendLy(MY_NESTED_CONSTANT)).toEqual(MY_NESTED_CONSTANT + 'ly');
    // });
});