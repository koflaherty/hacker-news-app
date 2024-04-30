import {hackerNewsFirebaseApi} from "../api/hacker-news-firebase-api.ts";
import {toggleStarred} from "../newsSlice.ts";
import {useAppDispatch, useAppSelector} from "@store/hooks.ts";
import styles from "./styles.module.scss";
import {useNewsInfo} from "../hooks/useNewsInfo.ts";
import pluralize from "pluralize";
import {useBaseUrl} from "../hooks/useBaseUrl.ts";
import {StarIcon} from "./StarIcon.tsx";

export const NewsDetail = ({id}: {id: string}) => {
  const dispatch = useAppDispatch();
  const isStarred = Boolean(useAppSelector((state) => state.news.starred[id]));
  const {data, isLoading} = hackerNewsFirebaseApi.useGetDetailsQuery({
    id,
  });
  const description = useNewsInfo(data);
  const commentCount = data?.kids?.length ?? 0;
  const baseUrl = useBaseUrl(data?.url);

  if (isLoading) {
    return <div className={styles.newsDetailSkeleton} />;
  } else if (data) {
    return (
      <div className={styles.newsDetail}>
        <div className={styles.newsDetailTitleContainer}>
          <a className={styles.newsDetailTitle} href={data.url}>
            {data.title}
          </a>
          <div className={styles.newsDetailTitleLabel}>({baseUrl})</div>
        </div>

        <ul className={styles.newsDetailSubtext}>
          {description && <li>{description}</li>}
          <li>
            {commentCount} {pluralize("comments", commentCount)}
          </li>
          <li>
            <button
              className={styles.newsDetailSaveButton}
              onClick={() => {
                dispatch(toggleStarred(id));
              }}
            >
              <StarIcon size={10} isStarred={isStarred} />
              {isStarred ? "Saved" : "Save"}
            </button>
          </li>
        </ul>
      </div>
    );
  } else {
    return <div className={styles.newsDetailError}>An Error Occurred</div>;
  }
};
