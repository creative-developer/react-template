import { serialize } from 'object-to-formdata';

export class ObjectToFormDataHelper {
  static getFormData = (data: object): FormData => {
    return serialize(data, { allowEmptyArrays: true, nullsAsUndefineds: true });
  };

  static getSingleFileFormData = (file: File, formDataKey: string = 'images'): FormData => {
    const formData = new FormData();
    formData.append(formDataKey, file);

    return formData;
  };

  static getMultipleFilesFormData = (files: File[], formDataKey: string = 'images'): FormData => {
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append(`${formDataKey}`, files[i]);
    }

    return formData;
  };
}
