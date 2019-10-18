import { makeStyles } from "@material-ui/styles";
import { State } from "../../Colors";

const useStyles = makeStyles(() => ({
  editor: {
    fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
    fontSize: 12,
    border: `var(--border-width) solid var(--color-highlight-darkest)`,
    minHeight: "20rem",
    color: "#333",
    lineHeight: 1.4,

    "& > textarea": {
      outline: 0,
    },
  },

  hasError: {
    borderColor: State.error,
  },
}));

export default useStyles;
