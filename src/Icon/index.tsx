import classnames from "classnames";
import React, { FunctionComponent } from "react";
import AddIcon from "./AddIcon";
import CopyIcon from "./CopyIcon";
import CloseIcon from "./CloseIcon";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";
import ExternalIcon from "./ExternalIcon";
import useStyles from "./index.styles";
import LoginIcon from "./LoginIcon";
import SaveIcon from "./SaveIcon";
import SelectIcon from "./SelectIcon";

export enum IconNames {
  add,
  copy,
  close,
  delete,
  edit,
  external,
  login,
  save,
  select,
}

type Props = {
  icon: IconNames;
  size?: "small" | "default" | "medium" | "large";
  className?: string;
};

const getElement = (icon: IconNames) => {
  switch (icon) {
    case IconNames.add: {
      return AddIcon;
    }

    case IconNames.copy: {
      return CopyIcon;
    }

    case IconNames.delete: {
      return DeleteIcon;
    }

    case IconNames.edit: {
      return EditIcon;
    }

    case IconNames.external: {
      return ExternalIcon;
    }

    case IconNames.save: {
      return SaveIcon;
    }

    case IconNames.select: {
      return SelectIcon;
    }

    case IconNames.close: {
      return CloseIcon;
    }

    case IconNames.login: {
      return LoginIcon;
    }

    default: {
      return null;
    }
  }
};

const Icon: FunctionComponent<Props> = ({
  icon,
  size = "default",
  className,
}) => {
  const classes: any = useStyles();
  const Element: FunctionComponent<any> | null = getElement(icon);

  if (Element) {
    return (
      <Element className={classnames(classes[size], className)} />
    );
  }

  return Element;
};

export default Icon;
