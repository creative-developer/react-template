import { PropsWithChildren } from 'react';

import { Footer } from '../Footer';
import { Header } from '../Header';

interface IBaseLayoutProps {}

export const BaseLayout: React.FC<PropsWithChildren<IBaseLayoutProps>> = props => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
