import Alphabets from '../src/Utils/Alphabets';

test('Should return all alphabets in right order', () => {
  const allAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'];
  expect(Alphabets.getAll()).toEqual(allAlphabets);
})
