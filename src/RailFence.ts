/* eslint-disable no-continue,no-plusplus */
import Position from './Models/Position';
import Matrix from './Models/Matrix';

export default class RailFence {
    private readonly key: number;

    private static DIRECT_UP = 'UP';

    private static DIRECT_DOWN = 'DOWN';

    constructor(shift: number) {
      this.key = shift;
    }

    private static getText(matrix: Matrix): string {
      let encryptedString = '';
      for (const char of matrix) {
        if (char !== '') {
          encryptedString += char;
        }
      }
      return encryptedString;
    }

    encrypt(plainText: string): string {
      const text = plainText.toLowerCase().replace(/ /g, '');

      const matrix = new Matrix(text.length, this.key);

      const chars = Array.from(text);

      let letterIndex = 0;
      const movePositionIn = (direction: string, position: Position): Position => {
        if (direction === RailFence.DIRECT_DOWN) {
          return { row: position.row + 1, column: position.column + 1 }
        }
        if (direction === RailFence.DIRECT_UP) {
          return { row: position.row - 1, column: position.column + 1 }
        }
        return { row: 0, column: 0 };
      };

      let direction = RailFence.DIRECT_DOWN;
      let row = 0; let column = 0;
      const list = [];
      while (letterIndex < text.length) {
        list.push([row, column]);
        matrix.set({ row, column }, chars[letterIndex]);
        letterIndex += 1;
        if (direction === RailFence.DIRECT_DOWN) {
          const { row: newI } = movePositionIn(direction, { row, column });
          if (newI >= this.key) {
            direction = RailFence.DIRECT_UP;
          }
          ({ row, column } = movePositionIn(direction, { row, column }));
          continue;
        }

        if (direction === RailFence.DIRECT_UP) {
          const { row: newI } = movePositionIn(direction, { row, column });
          if (newI < 0) {
            direction = RailFence.DIRECT_DOWN;
          }
          ({ row, column } = movePositionIn(direction, { row, column }));
        }
      }
      return RailFence.getText(matrix);
    }
}
