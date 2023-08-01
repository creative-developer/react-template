import { jsonProperty, Serializable } from 'ts-serializable';

export class PaginationModel extends Serializable {
  @jsonProperty(Number, null) limit: number | null = null;
  @jsonProperty(Number, null) offset: number | null = null;
  @jsonProperty(Number, null) total: number | null = null;
}
