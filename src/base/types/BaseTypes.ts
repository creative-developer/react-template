export type Nullable<T> = T | null;
export type StringOrNumber = string | number;

export type IForm<Fields extends string, ValidForm extends Record<Fields, ValidForm[Fields]>> = Record<
  Fields,
  Nullable<any>
> & {
  [key: string]: any;
};

export type FormFieldSetter<Fields extends string, ValidForm extends Record<Fields, ValidForm[Fields]>> = <
  T extends Fields,
>(
  key: T,
  value: ValidForm[T],
) => void;
