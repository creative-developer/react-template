import { ModelFactory } from '~/base/ModelFactory';
import { DateHelper } from '~/helpers/DateHelper';
import { IDate } from '~/interfaces/CommonInterfaces';

import { FileModel } from '../file/models/FileModel';
import { BASE_DISPLAY_DATE_FORMAT } from './consts/consts';
import { DateModel } from './models/DateModel';

export class BaseFactory extends ModelFactory {
  createDateModel(date: any | null | undefined | string, format: string = BASE_DISPLAY_DATE_FORMAT): DateModel | null {
    if (date?.length) {
      const dateObject: IDate = { date: null, formatted: null, raw: null };
      dateObject.date = DateHelper.stringToDate(date as string);

      if (format) {
        dateObject.formatted = DateHelper.formatDate(dateObject.date, format);
      }

      dateObject.raw = date;

      return this.create<DateModel>(DateModel, dateObject);
    }

    return null;
  }

  createFileModelList = (items: any[]): FileModel[] => {
    return items?.length ? items.map(item => this.createFileModel(item)) : [];
  };

  createFileModel = (json: any): FileModel => {
    const fileModelData: Record<string, unknown> = {};

    if (json?.uploaded_at && !(json.uploaded_at instanceof DateModel)) {
      fileModelData.uploaded_at = this.createDateModel(json.uploaded_at);
    }

    return this.create<FileModel>(FileModel, { ...json, ...fileModelData });
  };
}
