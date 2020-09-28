/**
 * GHColors theme by Avi Aryan (http://aviaryan.in)
 * Inspired by Github syntax coloring
 */
import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(
  createStyles({
    "@global .token.comment, @global .token.prolog, @gblobal .token.doctype, @global .token.cdata": {
      color: "#999988",
      fontStyle: "italic",
    },

    "@global .token.namespace": {
      opacity: 0.7,
    },

    "@global .token.string, @global .token.attr-value": {
      color: "#e36f11",
    },

    "@global .token.punctuation, @global .token.operator": {
      color: "#393A34",
    },

    [`@global .token.entity,
    @global .token.url,
    @global .token.symbol,
    @global .token.number,
    @global .token.boolean,
    @global .token.variable,
    @global .token.constant,
    @global .token.property,
    @global .token.regex,
    @global .token.inserted`]: {
      color: "#3681ac",
    },

    [`@global .token.atrule,
    @global .token.keyword,
    @global .token.attr-name,
    @global .language-autohotkey .token.selector`]: {
      color: "#003adb",
    },

    [`@global .token.function, @global .token.deleted, @global .language-autohotkey .token.tag`]: {
      color: "#9a050f",
    },

    [`@global .token.tag, @global .token.selector, @global .language-autohotkey .token.keyword`]: {
      color: "#00009f",
    },

    [`@global .token.important, @global .token.function, @global .token.bold`]: {
      fontWeight: "bold",
    },

    [`@global .token.italic`]: {
      fontStyle: "italic",
    },
  }),
);

export default useStyles;
