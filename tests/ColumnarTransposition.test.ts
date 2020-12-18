import ColumnarTransposition from '../src/ColumnarTransposition';

test('encrypts string using Columnar transposition algorithm', () => {
  const plainText = 'AbCz';
  const cipherText = 'CBXZAX';
  const columnarTransposition = new ColumnarTransposition('secret', 'x');
  expect(columnarTransposition.encrypt(plainText)).toBe(cipherText);
});
