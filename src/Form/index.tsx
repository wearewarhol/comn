import React, {
  useState,
  useEffect,
  useCallback,
  FunctionComponent,
  HTMLProps,
} from "react";

interface Props extends HTMLProps<HTMLFormElement> {
  className?: string;
  onSubmit: (form: any) => void;
}

const Form: FunctionComponent<Props> = ({
  className,
  onSubmit,
  children,
  ref,
  ...props
}) => {
  const [hasErrors, setHasErrors] = useState<boolean>(true);
  const [shouldShowErrors, setShouldShowErrors] = useState<boolean>(false);
  const [formState, setFormState] = useState({});

  const handleSubmit = useCallback(
    (event?) => {
      event && event.preventDefault();

      setShouldShowErrors(true);

      if (!hasErrors) {
        onSubmit(formState);
      }
    },
    [formState, setShouldShowErrors, onSubmit, hasErrors],
  );

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
        handleSubmit();
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
    <form
      className={className}
      onSubmit={handleSubmit}
      method="post"
      ref={ref}
      {...props}
    >
      {React.Children.map(children, (child: any) => {
        if (!child) {
          return null;
        }

        return React.cloneElement(child, {
          shouldShowErrors,
          onBlur:
            child && child.props.id && handleChangeForField(child.props.id),
        });
      })}
    </form>
  );
};

export default React.forwardRef<any, Props>((props, ref) => (
  <Form {...props} ref={ref} />
));
