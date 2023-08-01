import { modelFactory } from '~/base/ModelFactory';

import { ErrorModel } from './ErrorModel';

export class ErrorsService {
  getErrors = (error: any) => {
    const errors = error?.response?.data?.errors;
    const errorMessages = modelFactory.create<ErrorModel>(ErrorModel, errors).errorMessages;

    if (errorMessages) {
      return errorMessages;
    } else {
      return null;
    }
  };
}
