import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "block",
    marginBottom: "1rem",
    width: "100%",
  },

  sizeSmall: {
    width: `${100 / 3}%`,
  },
}));

export default useStyles;
