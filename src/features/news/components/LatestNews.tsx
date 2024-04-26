import {useAppSelector} from "../../../store/hooks.ts";

export const LatestNews = () => {
  const latest = useAppSelector((s) => s.news.latest);

  return (
    <div>
      <h1>Latest News</h1>
      <ol>
        {latest.map((newsId) => (
          <li key={newsId}>{newsId}</li>
        ))}
      </ol>
    </div>
  );
};
