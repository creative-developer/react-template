import { Serializable, jsonProperty } from 'ts-serializable';

export class ErrorModel extends Serializable {
  @jsonProperty(Object, null) errorMessages: { [key: string]: string | string[] } | null = null;
}
