import {hackerNewsApi} from "../hacker-news-api.ts";
import {NewsDetail} from "./NewsDetail.tsx";

export const LatestNews = () => {
  const {data} = hackerNewsApi.useGetLatestQuery({
    limit: 5,
  });

  return (
    <div>
      <h1>Latest News</h1>
      <ol>
        {(data ?? []).map((id) => (
          <li key={id}>
            <NewsDetail key={id} id={id} />
          </li>
        ))}
      </ol>
    </div>
  );
};
