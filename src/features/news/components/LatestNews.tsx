import {NewsDetail} from "./NewsDetail.tsx";
import {useLatestNews} from "../hooks/useLatestNews.tsx";

export const LatestNews = () => {
  const {data, viewMore} = useLatestNews();

  return (
    <div>
      <ol>
        {(data?.results ?? []).map((id) => (
          <li key={id}>
            <NewsDetail key={id} id={id} />
          </li>
        ))}
      </ol>
      <button onClick={viewMore} disabled={!data?.hasMore}>
        show more
      </button>
    </div>
  );
};
