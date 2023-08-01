import { Serializable, jsonProperty } from 'ts-serializable';

import { DateModel } from '~/modules/base/models/DateModel';

export class FileModel extends Serializable {
  @jsonProperty(String, null) id: string | null = null;
  @jsonProperty(String, null) link: string | null = null;
  @jsonProperty(Number, null) size: number | null = null;
  @jsonProperty(String, null) meta: string | null = null;
  @jsonProperty(DateModel, null) uploaded_at: DateModel | null = null;
}
