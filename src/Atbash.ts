
export default class Atbash {
    private static TOTAL_NUMBER_ALPHABETS = 26;

    private static ASCII_ALPHABETS_START_INDEX = 96;

    static decrypt(text: string): string {
      return Atbash.processString(text);
    }

    static encrypt(text: string): string {
      return Atbash.processString(text);
    }

    private static processString(text: string): string {
      const chars = Array.from(text.toLowerCase());
      let processedText = '';
      chars.forEach((char) => {
        if (char === ' ') {
          processedText += ' ';
          return;
        }
        const alphabetIndex = Atbash.getAlphabetIndex(char);
        const substituteLetterIndex = Atbash.TOTAL_NUMBER_ALPHABETS - alphabetIndex;
        processedText += Atbash.getAlphabetAtIndex(substituteLetterIndex);
      });
      return processedText;
    }

    private static getAlphabetIndex(char: string): number {
      const charCode = char.charCodeAt(0);
      return (charCode - Atbash.ASCII_ALPHABETS_START_INDEX) - 1;
    }

    private static getAlphabetAtIndex(index: number): string {
      return String.fromCharCode(index + Atbash.ASCII_ALPHABETS_START_INDEX);
    }
}
