import styles from "./styles.module.scss";
import {FooterLinks, NavLink} from "./FooterLinks.tsx";
import {FC} from "react";

export const Footer: FC<{
  links: NavLink[];
}> = ({links}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>Hacker News</div>
      <FooterLinks links={links}></FooterLinks>
    </footer>
  );
};
