import Position from './Position';

export default class Matrix {
    private matrix: string[][] = [];

    constructor(width: number, height: number) {
      for (let i = 0; i < height; i++) {
        this.matrix[i] = [];
        for (let j = 0; j < width; j++) {
          this.matrix[i][j] = '';
        }
      }
    }

    get(position: Position): string {
      return this.matrix[position.row][position.column];
    }

    getColumn(columnIndex: number): string[] {
      return this.matrix.map((row) => row[columnIndex]);
    }

    setColumn(columnIndex: number, column: string[]): void {
      this.matrix.forEach((row, index) => {
        this.matrix[index][columnIndex] = column[index];
      });
    }

    set(position: Position, value: string): void {
      this.matrix[position.row][position.column] = value;
    }

    [Symbol.iterator]() {
      let row = 0;
      let column = -1;
      return {
        next: () => {
          column++;
          if (column >= this.matrix[row].length) {
            column = 0;
            row++;
          }

          if (row < this.matrix.length) {
            return { value: this.get({ row, column }), done: false }
          }
          return { value: null, done: true }
        },
      };
    }
}
