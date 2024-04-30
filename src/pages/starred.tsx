import {RouteObject} from "react-router-dom";
import {PageTemplate} from "@pages/templates/PageTemplate.tsx";
import {StarredNews} from "@features/news/components/StarredNews.tsx";

export const starred: RouteObject = {
  path: "/starred",
  element: (
    <PageTemplate>
      <StarredNews />
    </PageTemplate>
  ),
};
