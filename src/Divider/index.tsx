import classnames from "classnames";
import React, { StatelessComponent } from "react";
import useStyles from "./index.styles";

type Props = {
  isInCard?: boolean;
};

const Divider: StatelessComponent<Props> = ({ isInCard }) => {
  const classes = useStyles();

  return (
    <hr
      className={classnames(classes.root, {
        [classes.isInCard]: isInCard,
      })}
    />
  );
};

export default Divider;
