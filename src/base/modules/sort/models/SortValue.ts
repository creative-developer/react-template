import { Serializable, jsonProperty } from 'ts-serializable';

import { SortOrdersEnum } from '../types/SortTypes';

export class SortValue extends Serializable {
  @jsonProperty(String, null) orderBy: string | null = null;
  @jsonProperty(String, null) order: SortOrdersEnum = SortOrdersEnum.asc;
}
