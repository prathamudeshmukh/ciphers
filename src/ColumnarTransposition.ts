import Matrix from './Models/Matrix';

export default class ColumnarTransposition {
    private readonly keyword: string;

    private readonly paddingLetter: string;

    constructor(keyword: string, paddingLetter: string) {
      this.keyword = keyword;
      this.paddingLetter = paddingLetter;
    }

    encrypt(plainText: string): string {
      const text = plainText.toLowerCase().replace(/ /g, '');
      const columns = this.keyword.length;
      const rows = (text.length / columns) + 1;
      const matrix = new Matrix(columns, rows);
      for (let index = 0; index < columns; index++) {
        matrix.set({ column: index, row: 0 }, this.keyword[index]);
      }

      let letterIndex = 0;
      for (let rowIndex = 1; rowIndex < rows; rowIndex++) {
        for (let colIndex = 0; colIndex < columns; colIndex++) {
          if (letterIndex >= text.length) {
            matrix.set({ column: colIndex, row: rowIndex }, this.paddingLetter);
            continue;
          }
          matrix.set({ column: colIndex, row: rowIndex }, text[letterIndex]);
          letterIndex++;
        }
      }

      const columnOrder = this.getColumnOrder();
      return columnOrder
        .map((columnIndex) => matrix.getColumn(columnIndex).slice(1).join(''))
        .join('').toUpperCase();
    }

    private getColumnOrder(): number[] {
      const keyWord = this.keyword.split('').map((letter, index) => ({ letter, index }));
      const orderedKeyword = keyWord.sort(
        (item, nextItem) => item.letter.localeCompare(nextItem.letter),
      );
      return orderedKeyword.map((item) => item.index);
    }
}
