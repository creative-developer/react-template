import { modelFactory } from '~/base/ModelFactory';

import { SortModel } from './models/SortModel';
import { SortValue } from './models/SortValue';
import { SortOrders, SortOrdersEnum } from './types/SortTypes';

export class SortService {
  getSortModel = (sort: any): SortModel => {
    return modelFactory.create<SortModel>(SortModel, sort);
  };

  getSortValue = (currentOrderBy: string, sortValue: SortValue | null, withClear: boolean = true): SortValue => {
    const model: any = {};
    const isAsc = sortValue?.orderBy === currentOrderBy && sortValue.order === SortOrdersEnum.asc;
    const isDesc = currentOrderBy === sortValue?.orderBy && sortValue.order === SortOrdersEnum.desc;
    const order = isAsc ? SortOrdersEnum.desc : SortOrdersEnum.asc;

    if (isDesc && !!withClear) {
      model.orderBy = null;
      return modelFactory.create<SortValue>(SortValue, model);
    }

    model.orderBy = currentOrderBy;
    model.order = order;

    return modelFactory.create<SortValue>(SortValue, model);
  };

  getSort = (sortValue: SortValue | null): SortModel => {
    const model = sortValue;

    if (model?.orderBy && model?.order === SortOrdersEnum.desc) {
      return this.getSortModel({ orderBy: '-' + model.orderBy });
    }

    return this.getSortModel({ orderBy: model?.orderBy ?? null });
  };

  getCurrentSortValue = (currentSort: string, sortDirection: SortOrders): SortValue => {
    return modelFactory.create<SortValue>(SortValue, { orderBy: currentSort, order: sortDirection });
  };
}
