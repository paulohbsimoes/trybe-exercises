// Source: https://github.com/CodeYourFuture/js-exercises-tdd/tree/master/III.tdd-katas/password-verifier

const verify = password => {
  if (password === '') throw new Error('password should not be null');
  if (password.length < 8) throw new Error('password should be larger than 8 chars');
  if (!/[A-Z]/.test(password)) throw new Error('password should have one uppercase letter at least');
  if (!/[a-z]/.test(password)) throw new Error('password should have one lowercase letter at least');
  if (!/[0-9]/.test(password)) throw new Error('password should have one number at least');
  return true;
}

const assert = require('assert');

assert.throws(() => { verify('') }, /^Error: password should not be null$/);

assert.throws(() => { verify('123') }, /^Error: password should be larger than 8 chars$/);

assert.throws(() => { verify('abcdef123456') }, /^Error: password should have one uppercase letter at least$/);

assert.throws(() => { verify('ABCDEF123456') }, /^Error: password should have one lowercase letter at least$/);

assert.throws(() => { verify('abcdefGHIJKL') }, /^Error: password should have one number at least$/);

assert.strictEqual(verify('abcdefGHIJKL1234'), true);
