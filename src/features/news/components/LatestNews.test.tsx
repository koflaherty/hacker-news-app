import {render, screen, waitFor} from "@testing-library/react";
import {LatestNews} from "./LatestNews.tsx";
import React, {ReactNode} from "react";
import {Provider} from "react-redux";
import {store} from "../../../store/store.ts";

describe("LatestNews component", () => {
  const Wrapper: React.FC<{children: ReactNode}> = ({children}) => (
    <Provider store={store}>{children}</Provider>
  );
  it.todo("Refactor wrapper");
  it.todo("mock out firebase api");

  it("displays loading state", async () => {
    render(
      <Wrapper>
        <LatestNews />
      </Wrapper>,
    );
    await waitFor(() => {
      expect(screen.getByText("Loading..")).toBeInTheDocument();
    });
  });

  it("displays recent news", async () => {
    render(
      <Wrapper>
        <LatestNews />
      </Wrapper>,
    );
    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toHaveLength(10);
    });
  });

  it.todo("show more and show more is disabled");
});
