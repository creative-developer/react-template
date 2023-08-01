import { Serializable, jsonProperty } from 'ts-serializable';

export class SortModel extends Serializable {
  @jsonProperty(String, null) orderBy: string | null = null;
}
