import React, {
  useState,
  FunctionComponent,
  useEffect,
  useCallback,
} from "react";

interface Props {
  className?: string;
  onSubmit: (form: any) => void;
}

const Form: FunctionComponent<Props> = ({ className, onSubmit, children }) => {
  const [hasErrors, setHasErrors] = useState<boolean>(true);
  const [shouldShowErrors, setShouldShowErrors] = useState<boolean>(false);
  const [formState, setFormState] = useState({});

  const handleSubmit = useCallback(() => {
    setShouldShowErrors(true);

    if (!hasErrors) {
      onSubmit(formState);
    }
  }, [formState, setShouldShowErrors, onSubmit, hasErrors]);

  const handleChangeForField = useCallback(
    (id: string) => {
      return (event: any, fieldHasError: boolean) => {
        setHasErrors(fieldHasError);

        if ((formState as any)[id] === event.target.value) {
          return;
        }

        setFormState({
          ...formState,
          [id]: event.target.value,
        });
      };
    },
    [formState],
  );

  const handleKeypress = useCallback(
    (event: KeyboardEvent) => {
      if (event.which === 13) {
        setTimeout(() => handleSubmit(), 100);
      }
    },
    [handleSubmit],
  );

  useEffect(() => {
    window.addEventListener("keypress", handleKeypress);

    return () => {
      window.removeEventListener("keypress", handleKeypress);
    };
  }, []);

  return (
    <form className={className}>
      {React.Children.map(children, (child: any) => {
        if (!child) {
          return null;
        }

        return React.cloneElement(child, {
          shouldShowErrors,
          onBlur:
            child && child.props.id && handleChangeForField(child.props.id),
          onSubmit: handleSubmit,
        });
      })}
    </form>
  );
};

export default Form;
