import { makeStyles } from "@material-ui/styles";

const colorLight = "var(--color-highlight-medium)";

const useStyles = makeStyles(() => ({
  root: {
    borderTop: `var(--border-width) solid var(--color-highlight-medium)`,
    marginTop: "2rem",
    marginBottom: "2rem",
    borderBottom: 0,
  },

  isInCard: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    marginLeft: "-1.5rem",
    marginRight: "-1.5rem",
    borderTopWidth: 1,
    borderTopColor: colorLight,
  },
}));

export default useStyles;
