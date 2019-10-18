import { makeStyles } from "@material-ui/styles";
import { State } from "../../Colors";

const useStyles = makeStyles(() => ({
  messages: {
    marginTop: "0.5rem",
  },

  message: {
    color: State.error,
  },
}));

export default useStyles;
