import {NewsDetail} from "./NewsDetail.tsx";
import {useLatestNews} from "../hooks/useLatestNews.tsx";
import styles from "./styles.module.scss";
import {Button} from "../../../ui/Button.tsx";

export const LatestNews = () => {
  const {data, isError, isLoading, viewMore} = useLatestNews();

  if (isLoading) {
    <div>
      <p>Loading..</p>
    </div>;
  } else if (isError) {
    return (
      <div>
        <h1>An Error Occurred</h1>
        <p>The latest hacker news could not be loaded.</p>
      </div>
    );
  } else {
    return (
      <div>
        <ol className={styles.newsList}>
          {(data?.results ?? []).map((id) => (
            <li key={id}>
              <NewsDetail id={id} />
            </li>
          ))}
        </ol>
        <div className={styles.inlineWithList}>
          <Button onClick={viewMore} disabled={!data?.hasMore}>
            show more
          </Button>
        </div>
      </div>
    );
  }
};
