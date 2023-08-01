export class CommonHelper {
  static hasLength = <T>(arr: T[] | string | undefined | null) => {
    return !!arr?.length;
  };

  static isNotUndefined = <T>(value: T) => {
    return value !== undefined;
  };

  static isNotNull = <T>(value: T) => {
    return value !== null;
  };

  static isNullOrUndefined = (value: any) => {
    return value === undefined || value === null;
  };

  static isNotNullOrUndefined = (value: any) => {
    return !this.isNullOrUndefined(value);
  };

  static isNan = (value: string | number | undefined | null) => {
    if (!value) {
      return true;
    }

    if (typeof value === 'string') {
      return Number.isNaN(Number(value));
    }

    return Number.isNaN(value);
  };

  static isObjectNotEmpty = (value: any | {} | undefined | null): boolean => {
    if (this.isNullOrUndefined(value)) {
      return false;
    }

    return Object.keys(value ?? {}).length > 0;
  };

  static deleteArrayItemFromPosition = <T>(arr: T[], index: number) => {
    return arr.filter((_, arrIndex) => arrIndex !== index);
  };

  static getUniqNotNullArray = <T>(arr: T[]) => {
    return [...new Set(arr.filter(item => !!item))];
  };

  static createArraByQuantity = (item: any, quantity: number) => {
    const array = [];

    for (let i = 0; i < quantity; i++) {
      array.push(item);
    }

    return array;
  };

  static hasValue = (value: any) => {
    return typeof value === 'object' ? value : CommonHelper.hasLength(value);
  };

  static stringArrayToObjectHashMap = (array: string[] | null | undefined): Record<string, string> => {
    if (!array?.length) {
      return {};
    }

    const result: Record<string, string> = {};

    for (let i = 0; i < array.length; i++) {
      result[array[i]] = array[i];
    }

    return result;
  };
}
