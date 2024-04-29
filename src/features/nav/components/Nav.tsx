import {Logo} from "./Logo.tsx";
import {NavigationLinks, NavLink} from "./NavigationLinks.tsx";
import styles from "./styles.module.scss";
import {FC} from "react";

export const Nav: FC<{links: NavLink[]}> = ({links}) => {
  return (
    <div className={styles.nav}>
      <Logo />
      <NavigationLinks links={links} />
    </div>
  );
};
