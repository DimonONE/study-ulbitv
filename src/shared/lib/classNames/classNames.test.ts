import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('test-class')).toBe('test-class');
    });
    test('with mods param', () => {
        expect(classNames('test-class', {class1: true, class2: false })).toBe('test-class class1');
    });
    test('with additional class', () => {
        expect(classNames('test-class', {}, ['class1', 'class2'])).toBe('test-class class1 class2');
    });
});