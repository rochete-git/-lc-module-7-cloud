import React from 'react';
import { cx } from 'emotion';
import Typography from '@material-ui/core/Typography';
import * as classes from './root.styles';

interface Props {
  className?: string;
}

export const RootComponent: React.FunctionComponent<Props> = (props) => {
  const { className } = props;

  return (
    <div className={cx(classes.root, className)}>
      <Typography className={classes.title} variant="h2">
        MAIN PAGE
      </Typography>
    </div>
  );
};
