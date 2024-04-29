import {FC, ReactNode} from "react";
import {Link} from "react-router-dom";
import styles from "./styles.module.scss";

export type NavLink = {
  path: string;
  children: ReactNode;
};

export const FooterLinks: FC<{
  links: NavLink[];
}> = ({links}) => {
  return (
    <ul className={styles.footerLinks}>
      {links.map((link, index) => (
        <li key={index} className={styles.footerLink}>
          <Link to={link.path}>{link.children}</Link>
        </li>
      ))}
    </ul>
  );
};
