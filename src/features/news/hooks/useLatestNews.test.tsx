import {renderHook, waitFor} from "@testing-library/react";
import {useLatestNews} from "./useLatestNews.tsx";
import {Provider} from "react-redux";
import {store} from "../../../store/store.ts";
import React, {ReactNode} from "react";

type Props = {
  children: ReactNode;
};

test("should increment counter", async () => {
  const wrapper: React.FC<Props> = ({children}) => (
    <Provider store={store}>{children}</Provider>
  );
  const {result} = renderHook(() => useLatestNews(), {
    wrapper,
  });

  expect(result.current.data).toBe(undefined);

  await waitFor(() => {
    expect(result.current.data).toBeTruthy();
  });
});
