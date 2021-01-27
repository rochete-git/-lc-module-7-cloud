import React from 'react';
import { AppLayout } from 'layouts';
import { RootContainer } from '../pods/root';

export const RootScene: React.FunctionComponent = () => {
  return (
    <AppLayout>
      {({ className }) => <RootContainer className={className} />}
    </AppLayout>
  );
};
