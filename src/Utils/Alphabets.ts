export default class Alphabets {
    static TOTAL = 26;

    private static ASCII_ALPHABETS_START_INDEX = 96;

    static indexFor(char: string): number {
      const charCode = char.charCodeAt(0);
      return (charCode - Alphabets.ASCII_ALPHABETS_START_INDEX) - 1;
    }

    static at(index: number): string {
      return String.fromCharCode(index + Alphabets.ASCII_ALPHABETS_START_INDEX);
    }
}
