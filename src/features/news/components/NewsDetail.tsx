import {hackerNewsFirebaseApi} from "../api/hacker-news-firebase-api.ts";

export const NewsDetail = ({id}: {id: string}) => {
  const results = hackerNewsFirebaseApi.useGetDetailsQuery({id});
  return <div>{JSON.stringify(results)}</div>;
};
