// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Checking that (123)456-7890 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
});

test('Checking that (098)765-4321 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(098)765-4321')).toBe(true);
});

test('Checking that (123)46-7890 is not a valid phone number', () => {
    expect(functions.isPhoneNumber('(123)46-7890')).toBe(false);
});

test('Checking that (123)456-890 is not a valid phone number', () => {
    expect(functions.isPhoneNumber('(123)456-890')).toBe(false);
});

test('Checking that johnsmith@gmail.com is a valid email', () => {
    expect(functions.isEmail('johnsmith@gmail.com')).toBe(true);
});

test('Checking that cse110fall21@ucsd.edu is a valid email', () => {
    expect(functions.isEmail('cse110fall21@ucsd.edu')).toBe(true);
});

test('Checking that cse.ucsd.edu is not a valid email', () => {
    expect(functions.isEmail('cseucsd.edu')).toBe(false);
});

test('Checking that mom is not a valid email', () => {
    expect(functions.isEmail('mom')).toBe(false);
});

test('Checking that A7f_dshj3 is a valid Strong Password', () => {
    expect(functions.isStrongPassword('A7f_dshj3')).toBe(true);
});

test('Checking that asd99_83mkl is a valid Strong Password', () => {
    expect(functions.isStrongPassword('asd99_83mkl')).toBe(true);
});

test('Checking that 3BOB is a valid Strong Password', () => {
    expect(functions.isStrongPassword('3BOB')).toBe(false);
});

test('Checking that LOL is a valid Strong Password', () => {
    expect(functions.isStrongPassword('LOL')).toBe(false);
});

test('Checking that 11/10/2021 is a valid Date', () => {
    expect(functions.isDate('11/10/2021')).toBe(true);
});

test('Checking that 3/14/2022 is a valid Date', () => {
    expect(functions.isDate('3/14/2022')).toBe(true);
});

test('Checking that 10/132/2021 is a valid Date', () => {
    expect(functions.isDate('10/132/2021')).toBe(false);
});

test('Checking that 12/14/21 is a valid Date', () => {
    expect(functions.isDate('12/14/21')).toBe(false);
});

test('Checking that 1A5B3F is a valid Hex Code', () => {
    expect(functions.isHexColor('1A5B3F')).toBe(true);
});

test('Checking that F4D is a valid Hex Code', () => {
    expect(functions.isHexColor('F4D')).toBe(true);
});

test('Checking that ABD3 is a valid Hex Code', () => {
    expect(functions.isHexColor('ABD3')).toBe(false);
});

test('Checking that AB is a valid Hex Code', () => {
    expect(functions.isHexColor('AB')).toBe(false);
});