import type { PropsWithChildren } from "react";

type TButton = {
  buttonClassName?: string;
  onClick?: () => void;
};
export const ButtonClick = ({ children, buttonClassName ="button-click", onClick }: PropsWithChildren<TButton>) => {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};
