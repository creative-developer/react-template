import { computed, makeObservable } from 'mobx';

import { BaseForm } from '~/base/BaseForm';

export enum LoginFormFields {
  name = 'name',
  email = 'email',
  password = 'password',
}

export class RegisterForm extends BaseForm {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(props?: any) {
    super(props);
    this.load(props);
  }

  static createObservable = () => {
    const context = new this();
    context.createObservable();

    return makeObservable(context, {
      ...context.makeObservableValues(LoginFormFields),
      isValidPassword: computed,
    });
  };

  get isValidPassword() {
    return this.password.length >= 6;
  }
}
