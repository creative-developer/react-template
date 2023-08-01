export class NumberHelper {
  static round = (value: number | undefined | string | null): number => {
    if (!value) {
      return 0;
    }

    if (typeof value === 'string') {
      return Math.round(parseFloat(value));
    }

    return Math.round(value);
  };

  static parseFloat = (value: number | string | undefined | null) => {
    if (!value) {
      return 0;
    }

    if (typeof value === 'string') {
      return parseFloat(value);
    }

    return value;
  };
}
