import {FC} from "react";
import mainLogo from "../../../assets/hacker-news-logo.svg";
import styles from "./styles.module.scss";
import {Link} from "react-router-dom";

export const Logo: FC = () => {
  return (
    <Link to="/">
      <img src={mainLogo} className={styles.logo} alt="Hacker News Logo" />
    </Link>
  );
};
