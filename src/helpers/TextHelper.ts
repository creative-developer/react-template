export class TextHelper {
  static lowerCase = (text: string | null | undefined): string => {
    if (!text?.length) {
      return '';
    }

    return text.toLowerCase();
  };

  static upperCase = (text: string | null | undefined): string => {
    if (!text?.length) {
      return '';
    }

    return text.toUpperCase();
  };

  static getFirstUppercase = (text: string | null | undefined) => {
    if (!text?.length) {
      return '';
    }

    return text.substring(0, 1).toUpperCase() + text.substring(1);
  };

  static getFirstLetter = (text: string | null | undefined) => {
    if (!text?.length) {
      return '';
    }

    return text.substring(0, 1);
  };

  static getWordFirstLetter = (text: string | null | undefined) => {
    if (!text?.length) {
      return '';
    }

    return text
      .split(' ')
      .map(item => this.getFirstLetter(item))
      .join('');
  };

  static declensionsOfWordsFromNumber = (number: number, titles: string[]): string => {
    const declensionIndex = this.getDeclensionIndex(number);

    return titles[declensionIndex];
  };

  static getDeclensionIndex = (number: number): number => {
    const PLURAL_INDEX = 2;
    const cases = [2, 0, 1, 1, 1, 2];
    const isPlural = number % 100 > 4 && number % 100 < 20;
    const lastDigitDeclensionIndex = number % 10 < 5 ? number % 10 : 5;

    const declensionCase = cases[lastDigitDeclensionIndex];
    return isPlural ? PLURAL_INDEX : declensionCase;
  };

  static capitalizeAllFirstWords = (str: string) => {
    return str.replace(/(^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  };
}
