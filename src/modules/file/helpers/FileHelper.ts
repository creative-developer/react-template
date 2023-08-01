import { FileModel } from '../models/FileModel';

export class FileHelper {
  static createFileUrl = (file: File): string => {
    return URL.createObjectURL(file);
  };

  static removeFileUrl = (url: string | null): void => {
    if (url?.length) {
      URL.revokeObjectURL(url);
    }
  };

  static removeFileUrlArray = (urlList: Array<string | null>): void => {
    for (let i = 0; i < urlList.length; i++) {
      const url = urlList[i];

      if (url?.length) {
        URL.revokeObjectURL(url);
      }
    }
  };

  static getFileExtension = (file: File): string => {
    const fileName = file.name;
    const fileNameSplitted = fileName?.split('.');

    return fileNameSplitted?.[fileNameSplitted?.length - 1];
  };

  static getFileUuid = () => {
    return crypto.randomUUID();
  };

  static downloadFile = (url: string, name = 'download') => {
    const a = document.createElement('a');
    a.href = url;
    a.download = name;

    a.click();
  };

  static getFileSizeInKB = (size: number) => {
    return `${(size / 1024).toFixed(2)} Kb`;
  };

  static isFileModel = (object: unknown): object is FileModel => {
    return typeof object === 'object' && object !== null && typeof (object as FileModel).id === 'string';
  };

  static isFileImage = (url: string, ext: string) => {
    if (url.match(/^(blob:)/) !== null) {
      return ext === 'jpeg' || ext === 'png' || ext === 'jpg';
    }

    return url.match(/\.(jpeg|jpg|gif|png|svg)$/gi) !== null;
  };

  static getCurrentFileUrl = (localFileUrl: string | null, fileModel: FileModel | null | undefined) => {
    return localFileUrl?.length ? localFileUrl : fileModel?.link;
  };
}
