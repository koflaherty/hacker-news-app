import {renderHook, waitFor} from "@testing-library/react";
import {DEFAULT_QUERY_LIMIT, useLatestNews} from "./useLatestNews.tsx";
import {Provider} from "react-redux";
import {store} from "../../../store/store.ts";
import React, {act, ReactNode} from "react";
import {FirebaseClient} from "../../../services/FirebaseClient.ts";
import {mockHackerNewsFirebaseAPIData} from "../api/mockHackerNewsFirebaseAPIData.ts";

jest.mock("../../../services/FirebaseClient.ts");

describe("useLatestNews", () => {
  const wrapper: React.FC<{children: ReactNode}> = ({children}) => (
    <Provider store={store}>{children}</Provider>
  );

  beforeEach(() => {
    // This sets the mock implementation for this test only
    (FirebaseClient.prototype.getURL as jest.Mock).mockImplementation(
      (url) => mockHackerNewsFirebaseAPIData[url],
    );
  });

  afterEach(() => {
    // Clear all instances and calls to constructor and all methods:
    FirebaseClient.mockClear();
  });

  it("should fetch latest news limited by page size", async () => {
    const {result} = renderHook(() => useLatestNews(), {
      wrapper,
    });
    expect(result.current.isFetching).toBe(true);
    await waitFor(() => {
      expect(result.current.isFetching).toBe(false);
    });
    expect(result.current.data?.results.length).toBe(DEFAULT_QUERY_LIMIT);
  });

  it("should fetch latest news and be bale to view more", async () => {
    const {result} = renderHook(() => useLatestNews(), {
      wrapper,
    });
    await waitFor(() => {
      expect(result.current.isFetching).toBe(false);
    });
    expect(result.current.data?.hasMore).toBe(true);
    act(() => {
      result.current.viewMore();
    });
    await waitFor(() => {
      expect(result.current.isFetching).toBe(false);
    });
    expect(result.current.data?.results.length).toBe(19);
    expect(result.current.data?.hasMore).toBe(false);
  });
});