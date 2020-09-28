import { highlight, languages } from "prismjs";
import "prismjs/components/prism-json";
import React, {
  ReactElement,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import SimpleCodeEditor from "react-simple-code-editor";
import classnames from "classnames";
import useStyles from "./index.styles";
import "./prism.js";
import Field from "../Field";
import { Validators } from "../validators";
import useGlobalStyles from "./prism";

type Props = {
  id: string;
  label?: string | ReactElement | ReactElement[];
  helpText?: string | ReactElement | ReactElement[];
  content: string;
  onBlur?: (_: any, hasError: boolean) => void;
  rows?: number;
  validators?: Validators[];
  shouldShowErrors?: boolean;
};

const Editor: FunctionComponent<Props> = ({
  id,
  label,
  helpText,
  content,
  onBlur,
  rows = 20,
  validators,
  shouldShowErrors,
}) => {
  const [currentContent, setCurrentContent] = useState(content);
  const classes = useStyles();
  useGlobalStyles();

  useEffect(() => {
    setCurrentContent(content);
  }, [content]);

  return (
    <Field
      id={id}
      label={label}
      helpText={helpText}
      onBlur={onBlur}
      validators={validators}
      shouldShowErrors={shouldShowErrors}
      value={currentContent}
      render={({ errors, shouldShowErrors, onChange }): any => (
        <SimpleCodeEditor
          value={currentContent}
          onValueChange={(value) => {
            onChange &&
              onChange({
                target: {
                  value,
                },
              });

            setCurrentContent(value);
          }}
          highlight={(value) => highlight(value, languages.json, "json")}
          padding={10}
          className={classnames(classes.editor, {
            [classes.hasError]: shouldShowErrors && errors && errors.length > 0,
          })}
          style={{
            minHeight: `${rows}em`,
          }}
        />
      )}
    />
  );
};

export default Editor;
