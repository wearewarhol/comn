import { makeStyles } from "@material-ui/styles";
import chroma from "chroma-js";
import { Breakpoints } from "../Breakpoints";
import { State } from "../Colors";

const useStyles = makeStyles(() => ({
  root: {
    padding: "1rem",
    borderRadius: "2px",
    boxShadow: `0 1px 3px 0 rgba(0, 0, 0, 0.2),
                0 1px 1px 0 rgba(0, 0, 0, 0.14),
                0 2px 1px -1px rgba(0, 0, 0, 0.12)`,
    background: "#fff",
    marginBottom: "1rem",
  },

  isSecondary: {
    background: chroma("#fff")
      .alpha(0.75)
      .hex(),
  },

  noPadding: {
    padding: 0,
  },

  isCentered: {
    textAlign: "center",
  },

  isSmall: {
    padding: "1rem 1.5rem",
  },

  isWarning: {
    background: chroma(State.warning)
      .brighten(2)
      .hex(),
  },

  isInfo: {
    background: chroma(State.update)
      .brighten(2)
      .alpha(0.75)
      .hex(),
  },

  [Breakpoints.sm]: {
    root: {
      padding: "1.5rem",
      marginBottom: "1.5rem",
    },

    noPadding: {
      padding: 0,
    },
  },
}));

export default useStyles;
