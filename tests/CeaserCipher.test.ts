/* eslint-disable no-new */
import CeaserCipher from '../src/CeaserCipher';

test('encrypts string using ceaser algorithm', () => {
  const plainText = 'abcd';
  const cipherText = 'efgh';
  const ceaserCipher = new CeaserCipher(4);
  expect(ceaserCipher.encrypt(plainText)).toBe(cipherText);
});

test('encrypts string using ceaser algorithm', () => {
  const plainText = 'xyz';
  const cipherText = 'abc';
  const ceaserCipher = new CeaserCipher(3);
  expect(ceaserCipher.encrypt(plainText)).toBe(cipherText);
});

test('encrypts string using ceaser algorithm', () => {
  const plainText = 'kill the mad king';
  const cipherText = 'nloo wkh pdg nlqj';
  const ceaserCipher = new CeaserCipher(3);
  expect(ceaserCipher.encrypt(plainText)).toBe(cipherText);
});

test('ceaser algorithm constructor should throw exception if shift > 25', () => {
  expect(() => {
    new CeaserCipher(26);
  }).toThrowError();
});

test('decrypts string using ceaser algorithm for boundary condition', () => {
  const cipherText = 'abc';
  const plainText = 'xyz';
  const ceaserCipher = new CeaserCipher(3);
  expect(ceaserCipher.decrypt(cipherText)).toBe(plainText);
});

test('decrypts string using ceaser algorithm for long string', () => {
  const plainText = 'kill the mad king';
  const cipherText = 'nloo wkh pdg nlqj';
  const ceaserCipher = new CeaserCipher(3);
  expect(ceaserCipher.decrypt(cipherText)).toBe(plainText);
});
