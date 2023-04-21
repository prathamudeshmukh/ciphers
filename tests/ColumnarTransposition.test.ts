import ColumnarTransposition from '../src/ColumnarTransposition';

test('encrypts string using Columnar transposition algorithm', () => {
  const plainText = 'attack at dawn';
  const cipherText = 'tdttcwaaaakn';
  const columnarTransposition = new ColumnarTransposition('secret', 'x');
  expect(columnarTransposition.encrypt(plainText)).toBe(cipherText.toUpperCase());
});
