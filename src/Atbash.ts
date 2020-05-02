import Alphabets from './Utils/Alphabets';

export default class Atbash {
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
      const alphabetIndex = Alphabets.indexFor(char);
      const substituteLetterIndex = Alphabets.TOTAL - alphabetIndex;
      processedText += Alphabets.at(substituteLetterIndex);
    });
    return processedText;
  }
}
