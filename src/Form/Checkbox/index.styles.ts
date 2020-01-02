import { makeStyles } from "@material-ui/styles";
import { State } from "../../Colors";

const color = "var(--color-highlight-darkest)";
const disabledBackgroundColor = "var(--color-highlight-lightest)";
const disabledColor = "var(--color-highlight-regular)";

const useStyles = makeStyles(() => ({
  input: {
    fontFamily: "var(--font-stack)",
    color,
    border: `var(--border-width) solid ${color}`,
    padding: "0.5rem",
    width: "100%",
    fontSize: "0.875rem",
    lineHeight: 1.5,
  },

  checkboxField: {
    position: "relative",
    marginLeft: "2rem",
    width: "auto",
  },

  checkbox: {
    position: "absolute",
    top: 0,
    left: "-2rem",
    fontSize: "1rem",
  },

  disabled: {
    backgroundColor: disabledBackgroundColor,
    color: disabledColor,
  },

  hasError: {
    borderColor: State.error,
  },
}));

export default useStyles;
