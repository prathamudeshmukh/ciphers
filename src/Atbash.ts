
export default class Atbash {
    private static TOTAL_NUMBER_ALPHABETS = 26;

    private static ASCII_ALPHABETS_START_INDEX = 96;

    static decrypt(text: string): string {
      return text;
    }

    static encrypt(text: string): string {
      const chars = Array.from(text.toLowerCase());
      let encryptedText = '';
      chars.forEach((char) => {
        if (char === ' ') {
          encryptedText += ' ';
          return;
        }
        const alphabetIndex = Atbash.getAlphabetIndex(char);
        const substituteLetterIndex = Atbash.TOTAL_NUMBER_ALPHABETS - alphabetIndex;
        encryptedText += Atbash.getAlphabetAtIndex(substituteLetterIndex);
      });
      return encryptedText;
    }

    private static getAlphabetIndex(char: string): number {
      const charCode = char.charCodeAt(0);
      return (charCode - Atbash.ASCII_ALPHABETS_START_INDEX) - 1;
    }

    private static getAlphabetAtIndex(index: number): string {
      return String.fromCharCode(index + Atbash.ASCII_ALPHABETS_START_INDEX);
    }
}
