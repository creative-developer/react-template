import { Serializable, jsonProperty } from 'ts-serializable';

export class DateModel extends Serializable {
  @jsonProperty(String, null) formatted: string | null = null;
  @jsonProperty(String, null) raw: string | null = null;
  @jsonProperty(Date, null) date: Date | null = null;
}
