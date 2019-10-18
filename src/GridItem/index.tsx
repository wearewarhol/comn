import classnames from "classnames";
import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/styles";
import { Breakpoints } from "../Breakpoints";

const useStyles = makeStyles(() => ({
  root: {},

  item1: { width: `calc(100% / 12 * 1)` },
  item2: { width: `calc(100% / 12 * 2)` },
  item3: { width: `calc(100% / 12 * 3)` },
  item4: { width: `calc(100% / 12 * 4)` },
  item5: { width: `calc(100% / 12 * 5)` },
  item6: { width: `calc(100% / 12 * 6)` },
  item7: { width: `calc(100% / 12 * 7)` },
  item8: { width: `calc(100% / 12 * 8)` },
  item9: { width: `calc(100% / 12 * 9)` },
  item10: { width: `calc(100% / 12 * 10)` },
  item11: { width: `calc(100% / 12 * 11)` },
  item12: { width: `calc(100% / 12 * 12)` },

  itemMd1: { [Breakpoints.md]: { width: `calc(100% / 12 * 1)` } },
  itemMd2: { [Breakpoints.md]: { width: `calc(100% / 12 * 2)` } },
  itemMd3: { [Breakpoints.md]: { width: `calc(100% / 12 * 3)` } },
  itemMd4: { [Breakpoints.md]: { width: `calc(100% / 12 * 4)` } },
  itemMd5: { [Breakpoints.md]: { width: `calc(100% / 12 * 5)` } },
  itemMd6: { [Breakpoints.md]: { width: `calc(100% / 12 * 6)` } },
  itemMd7: { [Breakpoints.md]: { width: `calc(100% / 12 * 7)` } },
  itemMd8: { [Breakpoints.md]: { width: `calc(100% / 12 * 8)` } },
  itemMd9: { [Breakpoints.md]: { width: `calc(100% / 12 * 9)` } },
  itemMd10: { [Breakpoints.md]: { width: `calc(100% / 12 * 10)` } },
  itemMd11: { [Breakpoints.md]: { width: `calc(100% / 12 * 11)` } },
  itemMd12: { [Breakpoints.md]: { width: `calc(100% / 12 * 12)` } },
}));

type Columns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Props = {
  xs?: Columns;
  md?: Columns;
  spacing?: number;
};

const GridItem: FunctionComponent<Props> = ({
  xs,
  md,
  spacing = 12,
  children,
}) => {
  const classes: any = useStyles();

  return (
    <div
      className={classnames(classes.root, {
        [classes[`item${xs}`]]: xs,
        [classes[`itemMd${md}`]]: md,
      })}
      style={{
        paddingLeft: spacing / 2,
        paddingRight: spacing / 2,
      }}
    >
      {children}
    </div>
  );
};

export default GridItem;
