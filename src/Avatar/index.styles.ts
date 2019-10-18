import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  avatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2.75rem",
    height: "2.75rem",
    backgroundSize: "100% 100%",
  },

  avatarIcon: {
    display: "block",
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
  },

  small: {
    width: "2rem",
    height: "2rem",
  },

  iconSmall: {
    width: "1.5rem",
    height: "1.5rem",
  },
}));

export default useStyles;
