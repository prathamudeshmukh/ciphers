import RailFence from '../src/RailFence';

test('encrypts string using rail-fence algorithm', () => {
  const plainText = 'defend the east wall of the castle';
  const cipherText = 'dttfsedhswotatfneaalhcleelee';
  const railFence = new RailFence(4);
  expect(railFence.encrypt(plainText)).toBe(cipherText);
});
