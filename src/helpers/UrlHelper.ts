export class UrlHelper {
  static getFilteredListOfPathnameParts = (pathname: string): string[] => {
    if (!pathname.length) {
      return [];
    }

    return pathname.split('/').filter(item => !!item.length);
  };

  static isValidRoute = (currentLocationPathname: string, condition: string | string[]): boolean => {
    if (!currentLocationPathname.length && !condition.length) {
      return false;
    }

    const pathnameParts = UrlHelper.getFilteredListOfPathnameParts(currentLocationPathname);

    if (Array.isArray(condition)) {
      return condition.filter(item => !!item.length).every(path => pathnameParts.includes(path));
    }

    return pathnameParts.includes(condition);
  };
}
