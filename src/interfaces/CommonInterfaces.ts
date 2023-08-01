// useParam hook
export interface IStringParams {
  [key: string]: string;
}

export interface IDate {
  date: Date | null;
  raw: string | null;
  formatted: string | null;
}
