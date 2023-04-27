export default class Alphabets {
    static TOTAL = 26;

    private static ASCII_ALPHABETS_START_INDEX = 97;

    static indexFor(char: string): number {
      const charCode = char.charCodeAt(0);
      return (charCode - Alphabets.ASCII_ALPHABETS_START_INDEX);
    }

    static at(index: number): string {
      return String.fromCharCode(index + Alphabets.ASCII_ALPHABETS_START_INDEX);
    }

    static getAll(): string[] {
      return Array.from(Array(26)).map((e, i) => String.fromCharCode(i + 65));
    }
}
