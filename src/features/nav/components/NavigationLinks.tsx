import {FC, ReactNode} from "react";
import {Link, useLocation} from "react-router-dom";
import style from "./styles.module.scss";
import classNames from "classnames";

export type NavLink = {
  path: string;
  children: ReactNode;
};

interface NavigationLinksProps {
  links: NavLink[];
}

export const NavigationLinks: FC<NavigationLinksProps> = ({links}) => {
  const location = useLocation();
  const activeLink = links.find((link) => link.path === location.pathname);

  return (
    <nav className={style.navigationLinks}>
      <ul>
        {links.map((link, index) => (
          <li
            key={index}
            className={classNames([
              style.navigationLink,
              {[style.navigationLinkActive]: activeLink === link},
            ])}
          >
            <Link to={link.path}>{link.children}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
