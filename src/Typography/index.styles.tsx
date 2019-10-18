import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    color: "rgba(0, 0, 0, 0.87)",
    margin: 0,
    fontWeight: 400,
  },

  h1: {
    fontSize: "4rem",
    fontWeight: 300,
    lineHeight: 1,
    letterSpacing: "-0.01562em",
  },

  h2: {
    fontSize: "2.75rem",
    fontWeight: 300,
    lineHeight: 1,
    letterSpacing: "-0.00833em",
  },

  h3: {
    fontSize: "2.25rem",
    lineHeight: 1.04,
    letterSpacing: 0,
  },

  h4: {
    fontSize: "1.75rem",
    lineHeight: 1.17,
    letterSpacing: "0.00735em",
  },

  h5: {
    fontSize: "1.5rem",
    lineHeight: 1.33,
    letterSpacing: 0,
  },

  h6: {
    fontSize: "1.25rem",
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: "0.0075em",
  },

  subtitle1: {
    fontSize: "1rem",
    lineHeight: 1.75,
    letterSpacing: "0.00938em",
  },

  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.57,
    letterSpacing: "0.00714em",
    opacity: 0.87,
  },

  body1: {
    fontSize: "1rem",
    lineHeight: 1.5,
    letterSpacing: "0.00938em",
  },

  body2: {
    fontSize: "0.875rem",
    lineHeight: 1.5,
    letterSpacing: "0.01071em",
    opacity: 0.87,
  },

  caption: {
    fontSize: "0.75rem",
    lineHeight: 1.5,
    letterSpacing: "0.01071em",
    opacity: 0.87,
  },

  gutterBottom: {
    marginBottom: "0.5em",
  },

  gutterBottom2: {
    marginBottom: "1em",
  },

  gutterBottom4: {
    marginBottom: "2em",
  },

  gutterBottom8: {
    marginBottom: "4em",
  },

  isInline: {
    display: "inline",
  },
}));

export default useStyles;
