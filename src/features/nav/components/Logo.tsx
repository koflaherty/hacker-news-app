import {FC} from "react";
import mainLogo from "../../../assets/hacker-news-logo.svg";
import styles from "./styles.module.scss";

export const Logo: FC = () => {
  return <img src={mainLogo} className={styles.logo} alt="Hacker News Logo" />;
};
