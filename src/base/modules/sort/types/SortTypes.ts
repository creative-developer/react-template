export enum SortOrdersEnum {
  asc = 'asc',
  desc = 'desc',
}

export type SortOrders = keyof typeof SortOrdersEnum;
