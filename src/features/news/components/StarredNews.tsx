import {NewsDetail} from "./NewsDetail.tsx";
import {useAppDispatch, useAppSelector} from "@store/hooks.ts";
import {StarIcon} from "./StarIcon.tsx";
import styles from "./styles.module.scss";
import {toggleStarred} from "../newsSlice.ts";
import {useMemo} from "react";

export const StarredNews = () => {
  const starred = useAppSelector((state) => state.news.starred);
  const starredIds = useMemo(() => Object.keys(starred), [starred]);
  const dispatch = useAppDispatch();

  if (starredIds.length === 0) {
    return <div>No News has been starred.</div>;
  } else {
    return (
      <div>
        <ul>
          {starredIds.map((id) => (
            <li className={styles.starredNews} key={id}>
              <button
                className={styles.starredNewsBigstarButton}
                onClick={() => {
                  dispatch(toggleStarred(id));
                }}
              >
                <StarIcon size={18} isStarred={true} />
              </button>

              <NewsDetail id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
