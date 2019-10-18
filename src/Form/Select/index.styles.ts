import { makeStyles } from "@material-ui/styles";
import { State } from "../../Colors";

const color = "var(--color-highlight-darkest)";
const useStyles = makeStyles(() => ({
  element: {
    position: "relative",
  },

  select: {
    fontFamily: "var(--font-stack)",
    color,
    border: `var(--border-width) solid ${color}`,
    padding: "0.5rem",
    width: "100%",
    fontSize: "0.875rem",
    lineHeight: 1.5,
    background: "none",
    appearance: "none",
    borderRadius: 0,
  },

  icon: {
    position: "absolute",
    top: "0.25rem",
    right: "0.25rem",
    pointerEvents: "none",
  },

  hasError: {
    borderColor: State.error,
  },
}));

export default useStyles;
