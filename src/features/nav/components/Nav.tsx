import {Logo} from "./Logo.tsx";
import {NavigationLinks, NavLink} from "./NavigationLinks.tsx";
import {useMemo} from "react";
import styles from "./styles.module.scss";

export const Nav = () => {
  const links: NavLink[] = useMemo(
    () => [
      {
        path: "/",
        children: "latest",
      },
      {
        path: "/starred",
        children: "starred",
      },
    ],
    [],
  );

  console.log(links);

  return (
    <div className={styles.nav}>
      <Logo />
      <NavigationLinks links={links} />
    </div>
  );
};
