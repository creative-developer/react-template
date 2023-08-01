import { jsonProperty, Serializable } from 'ts-serializable';

export class RegisterDto extends Serializable {
  @jsonProperty(String) deviceId: string = 'web';
  @jsonProperty(String) deviceType: string = 'web';
  @jsonProperty(String) name: string = '';
  @jsonProperty(String) email: string = '';
  @jsonProperty(String) password: string = '';
}
