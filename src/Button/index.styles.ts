import { makeStyles } from "@material-ui/styles";

const buttonColor = "var(--color-highlight-darkest)";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    zIndex: 1,
    display: "inline-block",
    background: "#fff",
    color: buttonColor,
    border: `var(--border-width) solid ${buttonColor}`,
    padding: "0.5rem 1rem",
    cursor: "pointer",
    transition: "0.15s ease-in-out",
    overflow: "hidden",
    fontSize: "0.875rem",
    lineHeight: 1.3,
    fontWeight: "bold",
    textDecoration: "none",
    textTransform: "uppercase",
    marginRight: "1rem",

    "&:focus": {
      color: "#fff",
    },

    "&:hover": {
      color: "#fff",
    },

    "&:focus *, &:hover *": {
      fill: "#fff",
    },

    "&:before": {
      content: '""',
      position: "absolute",
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: buttonColor,
      width: 0,
      transition: ".15s easeIn-out",
      marginLeft: "auto",
      marginRight: "auto",
    },

    "&:focus:before": {
      width: "120%",
    },

    "&:hover:before": {
      width: "120%",
    },
  },

  gutterBottom: {
    marginBottom: "1rem",
  },

  icon: {
    position: "relative",
    top: "-0.1rem",
    display: "inline-block",
    marginBottom: "-0.5rem",
  },

  iconWithChildren: {
    marginLeft: "0.5rem",
  },

  flat: {
    border: 0,
  },

  fab: {
    borderRadius: "2rem",
    boxShadow: `0 6px 15px rgba(0, 0, 0, 0.35),
                0 2px 5px rgba(0, 0, 0, 0.15),
                0 1px 3px rgba(0, 0, 0, 0.05)`,
    background: `var(--color-secondary)`,
    border: 0,
    color: "#fff",
  },

  clean: {
    border: 0,
    padding: 0,
    background: "transparent",
    marginRight: 0,

    "&::before": {
      background: "transparent",
    },
  },

  small: {
    padding: "0.5rem",
    lineHeight: 1.2,
  },

  large: {
    padding: "1rem 1.5rem",
  },

  isLoading: {
    color: "transparent",

    "&:focus": {
      color: "transparent",
    },
  },

  animation: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default useStyles;