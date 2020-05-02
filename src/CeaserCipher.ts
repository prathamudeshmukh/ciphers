import Alphabets from './Utils/Alphabets';

export default class CeaserCipher {
    private readonly shift: number;

    constructor(shift: number) {
      if (shift > Alphabets.TOTAL - 1) {
        throw new Error('Invalid shift');
      }
      this.shift = shift;
    }

    encrypt(plainText: string): string {
      return CeaserCipher.processText(this.shift, plainText);
    }

    decrypt(plainText: string): string {
      return CeaserCipher.processText((-1 * this.shift), plainText);
    }

    private static processText(shift: number, plainText: string): string {
      const chars = Array.from(plainText.toLowerCase());
      let processedText = '';
      chars.forEach((char) => {
        if (char === ' ') {
          processedText += ' ';
          return;
        }
        const alphabetIndex = Alphabets.indexFor(char);
        const shiftedIndex = alphabetIndex + shift;
        let substituteLetterIndex = shiftedIndex % Alphabets.TOTAL;
        if (shiftedIndex < 0) {
          substituteLetterIndex = Alphabets.TOTAL + shiftedIndex;
        }
        processedText += Alphabets.at(substituteLetterIndex);
      });
      return processedText;
    }
}
