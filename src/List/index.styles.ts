import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  list: {
    listStyle: "none",
    margin: "1rem 0",
    padding: 0,
    borderTop: "1px solid var(--color-highlight-medium)",
  },

  listItem: {
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    borderBottom: "1px solid var(--color-highlight-medium)",
  },
}));

export default useStyles;
