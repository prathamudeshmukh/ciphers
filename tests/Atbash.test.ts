import Atbash from '../src/Atbash';

test('encrypts string using atbash algorithm', () => {
  const encryptString = 'AbCz';
  const encryptedString = 'zyxa';
  expect(Atbash.encrypt(encryptString)).toBe(encryptedString);
});

test('encrypts string with spaces using atbash algorithm', () => {
  const encryptString = 'i got this encryption';
  const encryptedString = 'r tlg gsrh vmxibkgrlm';
  expect(Atbash.encrypt(encryptString)).toBe(encryptedString);
});

test('decrypts string with spaces using atbash algorithm', () => {
  const decryptString = 'r tlg gsrh vmxibkgrlm';
  const decryptedString = 'i got this encryption';
  expect(Atbash.decrypt(decryptString)).toBe(decryptedString);
});
