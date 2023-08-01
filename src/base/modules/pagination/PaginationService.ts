export class PaginationService {
  getPaginationData = (page: number, currentLimit: number): { offset: number; limit: number } => {
    const limit = currentLimit;
    const offset = limit * (page - 1);

    return { offset, limit };
  };
}
