import {hackerNewsApi} from "../hacker-news-api.ts";
import {useCallback, useState} from "react";

const DEFAULT_QUERY_LIMIT = 10;

export const useLatestNews = () => {
  const [limit, setLimit] = useState(DEFAULT_QUERY_LIMIT);
  const queryResults = hackerNewsApi.useGetLatestQuery({
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
