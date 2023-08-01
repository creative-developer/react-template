import { WrappedPromiseType } from '~/types/CommonTypes';

export class PromiseHelper {
  static PromiseAllSettled = <T>(promises: Promise<T>[]) => {
    if (Promise.allSettled) {
      return Promise.allSettled(promises);
    }

    const wrappedPromises: WrappedPromiseType<T> = promises.map(p =>
      Promise.resolve(p).then(
        val => ({ status: 'fulfilled', value: val }),
        err => ({ status: 'rejected', reason: err }),
      ),
    );

    return Promise.all(wrappedPromises);
  };
}
