// useBaseUrl()
//
// used to get the base url from a url string
// ex: https://fearoflanding.com/accidents/accident-reports/the-unstallable-plane-that-stalled/ will return fearoflanding.com
import {useMemo} from "react";

export const useBaseUrl = (url?: string) => {
  return useMemo(() => {
    if (!url) return "";
    else return new URL(url).hostname.replace("www.", "");
  }, [url]);
};
