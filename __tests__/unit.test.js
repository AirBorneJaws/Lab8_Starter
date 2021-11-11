// unit.test.js

const { test } = require('@jest/globals');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('test date', () => {
    expect(functions.isDate('999/999/999')).toBe(false);
});
test('test password strength', () => {
    expect(functions.isStrongPassword('abc')).toBe(false);
});
test('test phone number', () => {
    expect(functions.isPhoneNumber('818-219-3404')).toBe(true);
});
test('test email address', () => {
    expect(functions.isEmail('notme@gmail.com')).toBe(true)
});