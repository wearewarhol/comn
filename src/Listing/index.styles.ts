import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  listTitle: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },

  chart: {
    marginLeft: "7rem",
  },
}));

export default useStyles;
