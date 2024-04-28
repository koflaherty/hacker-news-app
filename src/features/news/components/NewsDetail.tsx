import {hackerNewsFirebaseApi} from "../api/hacker-news-firebase-api.ts";
import {toggleStared} from "../newsSlice.ts";
import {useAppDispatch, useAppSelector} from "../../../store/hooks.ts";

export const NewsDetail = ({id}: {id: string}) => {
  const dispatch = useAppDispatch();
  const isStarred = Boolean(useAppSelector((state) => state.news.stared[id]));
  const results = hackerNewsFirebaseApi.useGetDetailsQuery({id});

  return (
    <div>
      {JSON.stringify(results)}{" "}
      <button
        onClick={() => {
          dispatch(toggleStared(id));
        }}
      >
        {isStarred ? "un-star" : "star"}
      </button>
    </div>
  );
};
