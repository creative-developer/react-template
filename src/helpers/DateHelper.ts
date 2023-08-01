import { format, isValid, parseISO, isToday } from 'date-fns';

export class DateHelper {
  static formatStringDate = (date: string, customFormat = 'dd.MM.yyyy'): string => {
    return format(new Date(parseISO(date)), customFormat);
  };

  static formatDate = (date: Date | null, customFormat = 'dd.MM.yyyy', options?: Object): string | null => {
    if (date) {
      return format(date, customFormat, options);
    }

    return null;
  };

  static stringToDate = (date: string): Date => {
    return parseISO(date);
  };

  static isValidDate = (date: Date | null | undefined): boolean => {
    return isValid(date);
  };

  static isToday = (date: Date) => {
    return isToday(date);
  };

  static isIsoDateFormat = (str: string) => {
    const isoDateRegExp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

    return isoDateRegExp.test(str);
  };
}
