import { AbstractApiRepository } from '~/base/api/AbstractApiRepository';

export class FileApiRepository extends AbstractApiRepository {
  uploadFile = (data: FormData) => {
    return this.apiClient.post({ url: `/images/upload`, data });
  };

  uploadFiles = (data: FormData) => {
    return this.apiClient.post({ url: '/images/upload', data });
  };

  deleteFile = (imageId: string) => {
    return this.apiClient.delete({ url: `/images/${imageId}` });
  };
}
