import {hackerNewsApi} from "../hacker-news-api.ts";

export const NewsDetail = ({id}: {id: string}) => {
  const results = hackerNewsApi.useGetDetailsQuery({id});
  return <div>{JSON.stringify(results)}</div>;
};
