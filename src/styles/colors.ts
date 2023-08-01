import { StylesHelper } from '~/helpers/StylesHelper';

export enum Colors {
  black = '#000',
  white = '#fff',
  red = '#FF5A6E',
  blue = '#2B78FC',
  gradientBlue = 'linear-gradient(90deg, #0A54D4 0%, #04BEFE 100%, #04B6F3 100%)',
}

type TColorsKeys = `${keyof typeof Colors}`;
// TODO: Потом нужно добавить названия градиентов, что-бы градиенты не попали в типы для переменной customColors
type ExcludedGradientColors = Exclude<TColorsKeys, ''>;

export type ColorsKeysMap = Record<ExcludedGradientColors, string>;

export const customColors: ColorsKeysMap = StylesHelper.getCustomColorsKeys();
