import { highlight, languages } from "prismjs";
// import "prismjs/components/prism-json";
import React, { FunctionComponent, useEffect, useState } from "react";
import SimpleCodeEditor from "react-simple-code-editor";
import classnames from "classnames";
import useStyles from "./index.styles";
import "./prism.css";
import Field from "../Field";
import { Validators } from "../validators";

type Props = {
  id?: string;
  label?: string;
  content: string;
  onBlur?: (_: any, value: string) => void;
  rows?: number;
  validators?: Validators[];
  shouldShowErrors?: boolean;
};

const Editor: FunctionComponent<Props> = ({
  id,
  label,
  content,
  onBlur,
  rows = 20,
  validators,
  shouldShowErrors,
}) => {
  const [currentContent, setCurrentContent] = useState(content);
  const classes = useStyles();

  useEffect(() => {
    setCurrentContent(content);
  }, [content]);

  return (
    <Field
      id={id}
      label={label}
      onBlur={onBlur as any}
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
