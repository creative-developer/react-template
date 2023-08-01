import { useRef, useEffect } from 'react';

import { FileHelper } from '~/modules/file/helpers/FileHelper';

export const useObjectUrls = () => {
  const mapRef = useRef<Map<File, string> | null>(null);

  useEffect(() => {
    const map = new Map();
    mapRef.current = map;

    return () => {
      for (const [, url] of map) {
        FileHelper.removeFileUrl(url);
      }

      mapRef.current = null;
    };
  }, []);

  return {
    getObjectUrl: (file: File | null | undefined): string | null => {
      if (!file) {
        return null;
      }

      const map = mapRef.current;

      if (!map) {
        return null;
      }

      if (!map.has(file)) {
        const url = FileHelper.createFileUrl(file);
        map.set(file, url);
      }

      const url = map.get(file);

      if (!url) {
        return null;
      }

      return url;
    },
    removeObjectUrl: (file: File | null | undefined): void => {
      if (!file) {
        return;
      }

      const map = mapRef.current;

      if (!map) {
        return;
      }

      const url = map.get(file);

      if (url) {
        FileHelper.removeFileUrl(url);
      }
    },
  };
};
