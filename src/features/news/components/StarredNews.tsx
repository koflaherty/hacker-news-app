import {NewsDetail} from "./NewsDetail.tsx";
import {useAppSelector} from "../../../store/hooks.ts";

export const StarredNews = () => {
  const starred = useAppSelector((state) => state.news.starred);

  return (
    <div>
      <ul>
        {Object.keys(starred).map((id) => (
          <li key={id}>
            <NewsDetail id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
