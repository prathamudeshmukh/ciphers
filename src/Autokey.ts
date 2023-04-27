import Alphabets from './Utils/Alphabets';

export default class Autokey {
    private readonly keyword: string;

    constructor(keyword: string) {
      this.keyword = keyword;
    }

    encrypt(plainText: string): string {
      let key = this.keyword;
      const allAlphabets = Alphabets.getAll();
      const text = plainText.replace(/ /ig, '');
      if (this.keyword.length < text.length) {
        const remainingPaddingLength = text.length - this.keyword.length;
        key = `${this.keyword}${text.substring(0, remainingPaddingLength)}`;
      }
      console.log('key:', key);
      return text.split('').map((letter, index) => {
        const rowNo = Alphabets.indexFor(letter);
        const row = [...allAlphabets.slice(rowNo), ...allAlphabets.slice(0, rowNo)];
        const colNo = Alphabets.indexFor(key.split('')[index])
        return row[colNo];
      }).join('').toLowerCase();
    }
}

/**
 * F = 6 = row
 * D = 4 = column
 *
 * [...alpha.slice(5), ...alpha.slice(0, 5)]
 *
 */
