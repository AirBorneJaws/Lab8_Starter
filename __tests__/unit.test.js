// unit.test.js

const { test } = require('@jest/globals');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('test date 1', () => {
    expect(functions.isDate('999/999/999')).toBe(false);
});
test('test date 2', () => {
    expect(functions.isDate('999/999/999')).toBe(false);
});
test('test date 3', () => {
    expect(functions.isDate('11/11/2021')).toBe(true);
});
test('test date 4', () => {
    expect(functions.isDate('11/11/2022')).toBe(true);
});
test('test password strength 1', () => {
    expect(functions.isStrongPassword('abc')).toBe(false);
});
test('test password strength 2', () => {
    expect(functions.isStrongPassword('123')).toBe(false);
});
test('test password strength 3', () => {
    expect(functions.isStrongPassword('Dragon1999')).toBe(true);
});
test('test password strength 4', () => {
    expect(functions.isStrongPassword('DragonKing1')).toBe(true);
});
test('test phone number 1', () => {
    expect(functions.isPhoneNumber('818-219-3404')).toBe(true);
});
test('test phone number 2', () => {
    expect(functions.isPhoneNumber('818-641-1234')).toBe(true);
});
test('test phone number 3', () => {
    expect(functions.isPhoneNumber('a2(')).toBe(false);
});
test('test phone number 4', () => {
    expect(functions.isPhoneNumber('98Jn!')).toBe(false);
});
test('test email address 1', () => {
    expect(functions.isEmail('notme@gmail.com')).toBe(true);
});
test('test email address 2', () => {
    expect(functions.isEmail('notmeagain@gmail.com')).toBe(true);
});
test('test email address 3', () => {
    expect(functions.isEmail('notmeidontactuallyexist')).toBe(false);
});
test('test email address 4', () => {
    expect(functions.isEmail('no')).toBe(false);
});
test('Color checker 1', () => {
    expect(functions.isHexColor('FFFFF')).toBe(false);
});
test('Color checker 2', () => {
    expect(functions.isHexColor('FFF')).toBe(true);
});
test('Color checker 3', () => {
    expect(functions.isHexColor('528E75')).toBe(true);
});
test('Color checker 4', () => {
    expect(functions.isHexColor('GGGGGG')).toBe(false);
});