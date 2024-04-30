import {hackerNewsFirebaseApi} from "@features/news/api/hacker-news-firebase-api.ts";
import {useCallback, useState} from "react";

export const DEFAULT_QUERY_LIMIT = 10;

export const useLatestNews = () => {
  const [limit, setLimit] = useState(DEFAULT_QUERY_LIMIT);
  const queryResults = hackerNewsFirebaseApi.useGetLatestQuery({
    limit: limit,
  });

  const viewMore = useCallback(() => {
    setLimit((current) => current + DEFAULT_QUERY_LIMIT);
  }, []);

  return {
    ...queryResults,
    viewMore,
  };
};
