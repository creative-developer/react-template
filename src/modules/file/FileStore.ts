import { makeAutoObservable, runInAction } from 'mobx';

import { FileService } from './FileService';
import { FileModel } from './models/FileModel';

export class FileStore {
  loading: boolean = false;
  fileSettingsLoading: boolean = false;
  deleteFileLoading: boolean = false;

  fileData: FileModel | null = null;
  fileList: FileModel[] | null = null;

  private fileService: FileService;

  constructor() {
    makeAutoObservable(this);
    this.fileService = new FileService();
  }

  uploadFile = async (
    file: File,
    actions?: {
      onHandleSuccess?: (fileData: FileModel) => void;
      onHandleError?: () => void;
      onHandleFinally?: () => void;
    },
  ) => {
    this.setLoading(true);

    return this.fileService
      .uploadFile(file)
      .then(fileData => {
        runInAction(() => {
          this.fileData = fileData;
          actions?.onHandleSuccess?.(fileData);
        });

        return fileData;
      })
      .catch(() => {
        actions?.onHandleError?.();
      })
      .finally(() => {
        this.setLoading(false);
        actions?.onHandleFinally?.();
      });
  };

  uploadFiles = async (files: File[]) => {
    this.setLoading(true);

    return this.fileService
      .uploadFiles(files)
      .then(fileList => {
        runInAction(() => {
          this.fileList = fileList;
        });

        return fileList;
      })
      .catch(() => {})
      .finally(() => {
        this.setLoading(false);
      });
  };

  deleteFile = (
    fileId: string,
    actions?: {
      onHandleSuccess?: () => void;
      onHandleError?: () => void;
      onHandleFinally?: () => void;
    },
  ) => {
    this.setDeleteFileLoading(true);

    this.fileService
      .deleteFile(fileId)
      .then(() => {
        actions?.onHandleSuccess?.();
      })
      .catch(() => {
        actions?.onHandleError?.();
      })
      .finally(() => {
        this.setDeleteFileLoading(false);
        actions?.onHandleFinally?.();
      });
  };

  // Loadings
  setLoading = (value: boolean) => {
    this.loading = value;
  };

  setFileSettingsLoading = (value: boolean) => {
    this.fileSettingsLoading = value;
  };

  setDeleteFileLoading = (value: boolean) => {
    this.deleteFileLoading = value;
  };
}
