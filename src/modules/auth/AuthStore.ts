import { makeAutoObservable } from 'mobx';

import { ErrorsService } from '~/base/modules/errors/ErrorsService';

import { AuthService } from './AuthService';
import { LoginForm } from './forms/LoginForm';
import { RegisterForm } from './forms/RegisterForm';
import { TokenService } from './modules/token/TokenService';

export class AuthStore {
  loading = false;
  errorMessages: any | null = null;

  isAuth = false;
  completeCheckAuth = false;

  loginForm: LoginForm = LoginForm.createObservable();
  registerForm: RegisterForm = RegisterForm.createObservable();

  private authService: AuthService;
  private tokenService: TokenService;
  private errorsService: ErrorsService;

  constructor() {
    makeAutoObservable(this);
    this.authService = new AuthService();
    this.tokenService = new TokenService();
    this.errorsService = new ErrorsService();
  }

  register = (form: RegisterForm): void => {
    this.setLoading(true);

    this.authService
      .register(form)
      .then(({ accessToken }) => {
        if (accessToken) {
          this.tokenService.saveToken(accessToken);
          this.setIsAuth(true);
        }
      })
      .catch(error => {
        this.setErrors(this.errorsService.getErrors(error));
      })
      .finally(() => this.setLoading(false));
  };

  login = (form: LoginForm, callback?: () => void): void => {
    this.setLoading(true);

    this.authService
      .login(form)
      .then(successAuthData => {
        if (successAuthData.accessToken) {
          this.tokenService.saveToken(successAuthData.accessToken);
          this.setIsAuth(true);
          callback?.();
        }
      })
      .catch(error => {
        this.setErrors(this.errorsService.getErrors(error));
      })
      .finally(() => this.setLoading(false));
  };

  logout = (): void => {
    this.setLoading(true);

    this.authService
      .logout()
      .then(() => {
        this.tokenService.deleteToken();

        window.location.href = '/';
      })
      .catch(() => {})
      .finally(() => this.setLoading(false));
  };

  checkAuth = (onSuccessAuth?: () => void, onErrorAuth?: () => void): void => {
    const accessToken = this.tokenService.getToken();

    if (accessToken) {
      this.tokenService.saveToken(accessToken);
      this.isAuth = true;
      this.completeCheckAuth = true;

      onSuccessAuth?.();
      return;
    }

    this.setIsAuth(false);
    this.tokenService.deleteToken();
    this.setCompleteCheckAuth(true);
    onErrorAuth?.();
  };

  // Loadings
  setLoading = (value: boolean): void => {
    this.loading = value;
  };

  // Setters
  setLoginForm = (data: any) => {
    this.loginForm.setValues(data);
  };

  setCompleteCheckAuth = (value: boolean): void => {
    this.completeCheckAuth = value;
  };

  setIsAuth = (state: boolean): void => {
    this.isAuth = state;
  };

  setErrors = (errors: any | null): void => {
    this.errorMessages = errors;
  };

  removeTokenUnlessAuthorized = () => {
    window.location.href = '/';
    this.tokenService.deleteToken();
  };

  removeError = (fieldName: string): void => {
    delete this.errorMessages[fieldName];
  };

  resetStore = (): void => {
    this.loading = false;
    this.errorMessages = {};

    this.isAuth = false;
    this.completeCheckAuth = true;
  };
}
