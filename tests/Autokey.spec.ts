import Autokey from '../src/Autokey';

test('encrypts plain string using autokey', () => {
  const autokey = new Autokey('fortification');
  const encryptedString = autokey.encrypt('defend the east wall of the castle');
  const expected = 'iswxvibjexiggzeqpbimoigakmhe';
  expect(encryptedString).toBe(expected)
})
