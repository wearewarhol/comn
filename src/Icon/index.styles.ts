import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(() => ({
  small: {
    width: "1rem",
    height: "1rem",
    marginLeft: "0.25rem",
    marginBottom: "-0.125rem",
  },

  medium: {
    width: "2rem",
    height: "2rem",
  },

  large: {
    width: "4rem",
    height: "4rem",
  },
}));

export default useStyle;
