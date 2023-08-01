import { Colors, ColorsKeysMap } from '~/styles/colors';

export class StylesHelper {
  static importantStyle = (value: string | undefined | null): any => {
    if (!value) {
      return undefined;
    }

    return `${value} !important`;
  };

  static getCustomColorsKeys = (): ColorsKeysMap => {
    return Object.entries(Colors).reduce((acc: any, [key, value]) => {
      if (value?.indexOf('linear-gradient') === -1) {
        acc[key] = `customColors.${key}`;
      }

      return acc;
    }, {});
  };
}
