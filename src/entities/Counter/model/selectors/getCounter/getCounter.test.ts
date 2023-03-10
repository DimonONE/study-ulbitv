import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    const state: DeepPartial<StateSchema> = {
        counter: { value: 10 }
    };

    test('return counter value', () => { 
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});