/* eslint-disable no-continue,no-plusplus */
export default class RailFence {
    private readonly key: number;

    private static DIRECT_UP = 'UP';

    private static DIRECT_DOWN = 'DOWN';

    constructor(shift: number) {
      this.key = shift;
    }

    private static initMatrix(height: number, width: number): string[][] {
      const matrix: string[][] = [];
      for (let i = 0; i < height; i++) {
        matrix[i] = [];
        for (let j = 0; j < width; j++) {
          matrix[i][j] = '';
        }
      }
      return matrix;
    }

    private static getText(matrix: string[][]): string {
      let encryptedString = '';
      matrix.forEach((row: string[]) => {
        row.forEach((char: string) => {
          if (char !== '') {
            encryptedString += char;
          }
        })
      });
      return encryptedString;
    }

    encrypt(plainText: string): string {
      const text = plainText.toLowerCase().replace(/ /g, '');

      const matrix = RailFence.initMatrix(this.key, text.length);

      const chars = Array.from(text);

      let letterIndex = 0;
      const movePositionIn = (direction: string, i: number, j: number): any => {
        if (direction === RailFence.DIRECT_DOWN) {
          return { i: i + 1, j: j + 1 }
        }
        if (direction === RailFence.DIRECT_UP) {
          return { i: i - 1, j: j + 1 }
        }
        return {};
      };

      let direction = RailFence.DIRECT_DOWN;
      let i = 0; let j = 0;
      const list = [];
      while (letterIndex < text.length) {
        list.push([i, j]);
        matrix[i][j] = chars[letterIndex];
        letterIndex += 1;
        if (direction === RailFence.DIRECT_DOWN) {
          const { i: newI } = movePositionIn(direction, i, j);
          if (newI >= this.key) {
            direction = RailFence.DIRECT_UP;
          }
          ({ i, j } = movePositionIn(direction, i, j));
          continue;
        }

        if (direction === RailFence.DIRECT_UP) {
          const { i: newI } = movePositionIn(direction, i, j);
          if (newI < 0) {
            direction = RailFence.DIRECT_DOWN;
          }
          ({ i, j } = movePositionIn(direction, i, j));
        }
      }
      return RailFence.getText(matrix);
    }
}
