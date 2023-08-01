import { ReactNotification } from '../ui/ReactNotification';

export class ApiHelper {
  static getApiErrors = (error: any) => {
    if (error?.message || error?.detail) {
      const detail = this.mapDetailErrors(error);

      if (!Array.isArray(error?.errors) && error?.errors) {
        const errorsArray = Object.values(error?.errors);
        const errors = Array.prototype.concat.apply([], errorsArray);

        ReactNotification.showError(errors.join('\n') || 'Unknown error');
      } else {
        ReactNotification.showError(error?.message || detail || 'Unknown error');
      }
    }
  };

  static mapDetailErrors = (error: any) => {
    return Array.isArray(error?.detail)
      ? error?.detail.map((item: any) => item?.msg ?? '').join('\n')
      : error?.detail ?? '';
  };
}
