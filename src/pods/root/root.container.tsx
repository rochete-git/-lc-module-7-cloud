import React from 'react';
import { RootComponent } from './root.component';

interface Props {
  className?: string;
}

export const RootContainer: React.FunctionComponent<Props> = (props) => {
  const { className } = props;

  return (
    <RootComponent
      className={className}
    />
  );
};
