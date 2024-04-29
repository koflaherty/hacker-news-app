import {PropsWithChildren, useMemo} from "react";
import styles from "./page-template.module.scss";
import {Nav} from "../../features/nav/components/Nav.tsx";
import {Footer} from "../../features/footer/Footer.tsx";
import {NavLink} from "../../features/nav/components/NavigationLinks.tsx";

export const PageTemplate = ({children}: PropsWithChildren) => {
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

  return (
    <div className={styles.pageTemplate}>
      <Nav links={links} />
      <main className={styles.pageTemplateContent}>{children}</main>
      <Footer links={links} />
    </div>
  );
};
