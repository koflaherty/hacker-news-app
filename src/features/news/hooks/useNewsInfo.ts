// useNewsInfo()
//
// used to make the description of the news post which includes points, author, and how long ago it was posted
// ex: 102 points by samizdis 5 hours ago
import {News} from "../api/entities.ts";
import pluralize from "pluralize";

export const useNewsInfo = (news?: News) => {
  const infoDescription = [];

  if (typeof news?.score === "number") {
    infoDescription.push(`${news.score} ${pluralize("points", news.score)}`);
  }

  if (typeof news?.by === "string") {
    infoDescription.push(`by ${news.by}`);
  }

  return infoDescription.join(" ");
};
