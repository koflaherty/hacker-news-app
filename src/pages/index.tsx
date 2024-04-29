import {RouteObject} from "react-router-dom";
import {PageTemplate} from "./templates/PageTemplate.tsx";
import {LatestNews} from "../features/news/components/LatestNews.tsx";

export const index: RouteObject = {
  path: "/",
  element: (
    <PageTemplate>
      <LatestNews />
    </PageTemplate>
  ),
};
