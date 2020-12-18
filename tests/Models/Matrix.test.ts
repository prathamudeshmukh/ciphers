import Matrix from '../../src/Models/Matrix';

test('Matrix should be initialized with empty string', () => {
  const matrix = new Matrix(2, 2);
  expect(matrix.get({ row: 0, column: 0 })).toBe('');
  expect(matrix.get({ row: 0, column: 1 })).toBe('');
  expect(matrix.get({ row: 1, column: 0 })).toBe('');
  expect(matrix.get({ row: 1, column: 1 })).toBe('');
});

test('Matrix should set given string in given position', () => {
  const matrix = new Matrix(2, 2);
  matrix.set({ row: 0, column: 1 }, 'A');
  expect(matrix.get({ row: 0, column: 0 })).toBe('');
  expect(matrix.get({ row: 0, column: 1 })).toBe('A');
  expect(matrix.get({ row: 1, column: 0 })).toBe('');
  expect(matrix.get({ row: 1, column: 1 })).toBe('');
});

test('Matrix should return elements in zig-zag iterating fashion', () => {
  const matrix = new Matrix(2, 2);
  matrix.set({ row: 0, column: 0 }, 'A');
  matrix.set({ row: 0, column: 1 }, 'B');
  matrix.set({ row: 1, column: 0 }, 'C');
  matrix.set({ row: 1, column: 1 }, 'D');
  let index = 0;
  const expectedResult = ['A', 'B', 'C', 'D'];
  for (const value of matrix) {
    expect(value).toBe(expectedResult[index]);
    index++;
  }
});

test('Matrix should return column elements for given column index', () => {
  const matrix = new Matrix(2, 2);
  matrix.set({ row: 0, column: 0 }, 'A');
  matrix.set({ row: 0, column: 1 }, 'B');
  matrix.set({ row: 1, column: 0 }, 'C');
  matrix.set({ row: 1, column: 1 }, 'D');
  const expectedResult = ['B', 'D'];
  const actualResult = matrix.getColumn(1);
  expectedResult.forEach((expectedValue, index) => expect(actualResult[index]).toBe(expectedValue));
});

test('Matrix should set column elements for given column index', () => {
  const matrix = new Matrix(2, 2);
  matrix.set({ row: 0, column: 0 }, 'A');
  matrix.set({ row: 0, column: 1 }, 'B');
  matrix.set({ row: 1, column: 0 }, 'C');
  matrix.set({ row: 1, column: 1 }, 'D');
  const expectedResult = ['A', 'F', 'C', 'G'];
  matrix.setColumn(1, ['F', 'G']);
  let index = 0;
  for (const value of matrix) {
    expect(value).toBe(expectedResult[index]);
    index++;
  }
});
