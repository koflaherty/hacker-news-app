import {Link} from "react-router-dom";
import {PropsWithChildren} from "react";

export const PageTemplate = ({children}: PropsWithChildren) => {
  return (
    <>
      <div>
        <h1>Hacker News</h1>
        <div>
          <Link to={"/"}>latest</Link>
        </div>
        <div>
          <Link to={"/starred"}>starred</Link>
        </div>
      </div>
      {children}
    </>
  );
};
