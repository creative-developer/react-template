import { makeAutoObservable } from 'mobx';

export class BaseStore {
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  // Loadings
  setLoading = (value: boolean) => {
    this.loading = value;
  };
}
