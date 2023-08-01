import { jsonProperty, Serializable } from 'ts-serializable';

export class LoginDto extends Serializable {
  @jsonProperty(String) deviceId: string = 'web';
  @jsonProperty(String) deviceType: string = 'web';
  @jsonProperty(String) email: string = '';
  @jsonProperty(String) password: string = '';
}
