import React, { useRef, useEffect, FunctionComponent, RefObject } from "react";

const useClickAwayListener = (ref: RefObject<any>, callback: () => void) => {
  const handleClick = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
};

interface Props {
  isActive?: boolean;
  className?: string;
  onClick: () => void;
}

const ClickAwayListener: FunctionComponent<Props> = ({
  isActive = false,
  className,
  onClick,
  children,
  ...props
}) => {
  const wrapperRef = useRef(null);

  useClickAwayListener(wrapperRef, onClick);

  if (!isActive) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className={className} {...props}>
      {children}
    </div>
  );
};

export default ClickAwayListener;
