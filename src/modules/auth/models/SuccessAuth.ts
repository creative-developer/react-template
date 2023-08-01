import { jsonProperty, Serializable } from 'ts-serializable';

export class SuccessAuth extends Serializable {
  @jsonProperty(String, null) type: string | null = null;
  @jsonProperty(String, null) accessToken: string | null = null;
}
