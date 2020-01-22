import React, { FunctionComponent } from "react";
import showdown from "showdown";
import Typography, { Props as TypographyProps } from "../Typography";
import useStyles from "./index.styles";

const converter = new showdown.Converter();

interface Props {
  content: string;
}

const Markdown: FunctionComponent<Props & TypographyProps> = ({
  content,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Typography
      component="div"
      dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}
      className={classes.root}
      {...rest}
    />
  );
};

export default Markdown;
