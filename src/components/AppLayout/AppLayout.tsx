import React from 'react';
import { AppLayoutProps } from './types';

const AppLayout = (props: AppLayoutProps) => {
  const { children, variant = 'full' } = props;

  return <div>{children}</div>;
};

export default AppLayout;
