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

    private getPathCoordinates(textLength: number): Position[] {
      const pathCoordinates: Position[] = [];
      let letterIndex = 0; let row = 0; let column = 0;
      let direction = RailFence.DIRECT_DOWN;
      while (letterIndex < textLength) {
        pathCoordinates.push({ row, column });
        letterIndex += 1;
        if (direction === RailFence.DIRECT_DOWN) {
          const { row: newI } = RailFence.movePositionIn(direction, { row, column });
          if (newI >= this.key) {
            direction = RailFence.DIRECT_UP;
          }
          ({ row, column } = RailFence.movePositionIn(direction, { row, column }));
          continue;
        }

        if (direction === RailFence.DIRECT_UP) {
          const { row: newI } = RailFence.movePositionIn(direction, { row, column });
          if (newI < 0) {
            direction = RailFence.DIRECT_DOWN;
          }
          ({ row, column } = RailFence.movePositionIn(direction, { row, column }));
        }
      }
      return pathCoordinates;
    }

    private static movePositionIn(direction: string, position: Position): Position {
      if (direction === RailFence.DIRECT_DOWN) {
        return { row: position.row + 1, column: position.column + 1 }
      }
      if (direction === RailFence.DIRECT_UP) {
        return { row: position.row - 1, column: position.column + 1 }
      }
      return { row: 0, column: 0 };
    }

    encrypt(plainText: string): string {
      const text = plainText.toLowerCase().replace(/ /g, '');
      const matrix = new Matrix(text.length, this.key);
      const chars = Array.from(text);
      const pathCoordinates = this.getPathCoordinates(text.length);
      pathCoordinates.forEach((position, letterIndex) => {
        matrix.set(position, chars[letterIndex]);
      });
      return RailFence.getText(matrix);
    }

    decrypt(cipherText: string): string {
      const text = cipherText.toLowerCase().replace(/ /g, '');
      const matrix = new Matrix(text.length, this.key);
      const chars = Array.from(text);
      const pathCoordinates = this.getPathCoordinates(text.length);
      const rowWiseCoordinates = new Map<number, Position[]>();
      let plainText = '';
      pathCoordinates.forEach((position) => {
        const positions = rowWiseCoordinates.get(position.row);
        if (positions) {
          positions.push(position);
          return;
        }
        rowWiseCoordinates.set(position.row, [position]);
      });
      let letterIndex = 0;
      rowWiseCoordinates.forEach((positions) => {
        positions.forEach((position) => {
          matrix.set(position, chars[letterIndex]);
          letterIndex++;
        });
      });
      pathCoordinates.forEach((position) => {
        plainText += matrix.get(position);
      });
      return plainText;
    }
}
