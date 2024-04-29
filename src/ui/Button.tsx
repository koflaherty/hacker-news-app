import {ButtonHTMLAttributes, FC} from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...rest
}) => {
  return (
    <button className={classNames([styles.button, className])} {...rest} />
  );
};
