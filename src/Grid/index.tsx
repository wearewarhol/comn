import { makeStyles } from "@material-ui/styles";
import classnames from "classnames";
import React, { FunctionComponent, ReactChild, ReactElement } from "react";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  gutterBottom: {
    marginBottom: "1rem",
  },
}));

interface Props {
  spacing?: number;
  gutterBottom?: boolean;
}

const Grid: FunctionComponent<Props> = ({
  spacing = 12,
  gutterBottom,
  children,
}) => {
  const classes = useStyles();

  return (
    <div
      className={classnames(classes.root, {
        [classes.gutterBottom]: gutterBottom,
      })}
      style={{
        marginLeft: (spacing / 2) * -1,
        marginRight: (spacing / 2) * -1,
      }}
    >
      {React.Children.map(children as any, (child: ReactChild) => {
        return React.cloneElement(child as ReactElement<any>, {
          spacing,
        });
      })}
    </div>
  );
};

export default Grid;
