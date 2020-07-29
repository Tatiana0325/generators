import canIterate from '../js/app';

test('new Map()', () => {
    expect(canIterate(new Map())).toBe(true);
});

test('new Set()', () => {
    expect(canIterate(new Set())).toBe(true);
});

test('new String()', () => {
    expect(canIterate(new String())).toBe(true);
});

test('Netology', () => {
    expect(canIterate('Netology')).toBe(true);
});

test('12', () => {
    expect(canIterate(12)).toBe(false);
});

test('null', () => {
    expect(canIterate(null)).toBe(false);
});

test('undefined', () => {
    expect(canIterate(undefined)).toBe(false);
});