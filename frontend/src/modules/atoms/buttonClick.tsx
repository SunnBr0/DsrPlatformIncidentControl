type TButton = {
  buttonClassName?:string,
  children: React.ReactNode
}
export const ButtonClick = ({children,buttonClassName}:TButton) => {
  return <button className={buttonClassName}>{children}</button>;
};
