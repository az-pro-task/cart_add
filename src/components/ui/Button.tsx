import { FC, HtmlHTMLAttributes } from "react";
import './Button.scss'

const Button: FC<HtmlHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { className } = props;

  return (
    <button {...props} className={`my-button ${className}`}>
      {props.children}
    </button>
  );
};
export default Button;
