import { FileModel } from '../models/FileModel';

export interface ILocalFileWithUuid {
  [key: string]: File;
}

export interface ILocalFileWithFileModel {
  localFile: File | null;
  fileModel: FileModel | null;
}
