import { ObjectToFormDataHelper } from '~/helpers/ObjectToFormDataHelper';

import { FileApiRepository } from './FileApiRepository';
import { FileFactory } from './FileFactory';
import { ILocalFileWithFileModel } from './interfaces/FileInterfaces';
import { FileModel } from './models/FileModel';

export class FileService {
  private fileApi: FileApiRepository;
  private fileFactory: FileFactory;

  constructor() {
    this.fileApi = new FileApiRepository();
    this.fileFactory = new FileFactory();
  }

  tryUploadFile = async (file: File): Promise<FileModel | null> => {
    let savedFile = null;

    try {
      savedFile = await this.uploadFile(file);
    } catch (err) {
      console.log(err);
    }

    return savedFile;
  };

  tryUploadFiles = async (file: File[]): Promise<FileModel[] | null> => {
    let savedFiles = null;

    try {
      savedFiles = await this.uploadFiles(file);
    } catch (err) {
      console.log(err);
    }

    return savedFiles;
  };

  uploadFile = async (file: File): Promise<FileModel> => {
    const formData = ObjectToFormDataHelper.getSingleFileFormData(file);
    const { data } = await this.fileApi.uploadFile(formData);

    return this.fileFactory.createFileModel(data?.[0] ?? null);
  };

  uploadFiles = async (files: File[]): Promise<FileModel[]> => {
    const formData = ObjectToFormDataHelper.getMultipleFilesFormData(files);
    const { data } = await this.fileApi.uploadFiles(formData);

    return this.fileFactory.createFileModelList(data);
  };

  deleteFile = async (fileId: string): Promise<void> => {
    return this.fileApi.deleteFile(fileId);
  };

  createLocalFileWithFileModel = (fileModel: FileModel | null): ILocalFileWithFileModel | null => {
    if (!fileModel) {
      return null;
    }

    return { fileModel, localFile: null };
  };
}
