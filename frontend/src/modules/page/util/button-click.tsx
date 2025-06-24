import "../../../style/page/button-click/button-click.scss"
type ButtonClickProps = {
  children: string;
};

export const ButtonClick: React.FC<ButtonClickProps> = (props) => {
  return <button className="button-click">{props.children}</button>;
};
