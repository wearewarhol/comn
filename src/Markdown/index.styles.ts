import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    "& > p": {
      marginTop: 0,
      marginBottom: 0,
    },
  },
}));

export default useStyles;
