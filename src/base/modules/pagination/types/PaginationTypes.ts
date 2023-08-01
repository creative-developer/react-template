import { PaginationModel } from '../models/PaginationModel';

export type ResponseWithPagination<I> = Promise<{ items: I; paginationMeta: PaginationModel }>;
