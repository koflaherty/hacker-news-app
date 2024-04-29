import {NewsDetail} from "./NewsDetail.tsx";
import {useAppSelector} from "../../../store/hooks.ts";

export const StarredNews = () => {
  const stared = useAppSelector((state) => state.news.stared);

  return (
    <div>
      <h1>Latest News</h1>
      <ol>
        {Object.keys(stared).map((id) => (
          <li key={id}>
            <NewsDetail key={id} id={id} />
          </li>
        ))}
      </ol>
    </div>
  );
};
