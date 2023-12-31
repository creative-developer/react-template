import React from 'react';

import { AuthStore } from '~/modules/auth/AuthStore';

class RootStore {
  authStore: AuthStore;

  constructor() {
    this.authStore = new AuthStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
