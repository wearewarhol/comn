import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    opacity: 0,
    transform: "translateY(2rem)",
    transition: "0.2s ease-out",
  },

  isIn: {
    opacity: 1,
    transform: "translateY(0)",
  },
}));

export default useStyles;
