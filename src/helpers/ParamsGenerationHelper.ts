import queryString from 'query-string';

export class ParamsGenerationHelper {
  static getSerializedParams = (params: any) => {
    const stringParam = queryString.stringify(params, { skipEmptyString: true, skipNull: true, encode: true });

    if (stringParam.length) {
      return `?${stringParam}`;
    }

    return '';
  };

  static getSerializedData = (data: any) => {
    return queryString.stringify(data);
  };
}
