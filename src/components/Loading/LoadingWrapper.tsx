import { ReactNode } from 'react';
import classNames from 'classnames';

import Loading from './Loading';

import './LoadingWrapper.scss';

type Props = {
  children: ReactNode;
  isLoading: boolean;
};

function LoadingWrapper({ children, isLoading }: Props) {
  const loadingCls = classNames({
    'loading-wrapper': isLoading,
  });

  return (
    <div className={loadingCls}>
      {children}
      {isLoading && <Loading />}
    </div>
  );
}

export default LoadingWrapper;
