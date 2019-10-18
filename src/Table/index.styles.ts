import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  table: {
    width: "calc(100% + 3rem)",
    borderSpacing: 0,
    marginTop: "1rem",
    marginBottom: "1rem",
    marginLeft: "-1.5rem",
    marginRight: "-1.5rem",
  },

  tableRow: {},

  tableHeadColumn: {
    borderBottom: "1px solid var(--color-highlight-regular)",
    padding: "0.5rem 1.5rem",
  },

  tableColumn: {
    padding: "0.5rem 1.5rem",
    borderBottom: "1px solid #ddd",
  },

  columnNoPadding: {
    padding: 0,
  },
}));

export default useStyles;
