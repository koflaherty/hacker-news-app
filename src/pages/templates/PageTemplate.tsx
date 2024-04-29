import {PropsWithChildren} from "react";
import styles from "./page-template.module.scss";
import {Nav} from "../../features/nav/components/Nav.tsx";

export const PageTemplate = ({children}: PropsWithChildren) => {
  return (
    <div className={styles.pageTemplate}>
      <Nav />
      {children}
    </div>
  );
};
