import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {LatestNews} from "./LatestNews.tsx";
import React, {ReactNode} from "react";
import {Provider} from "react-redux";
import {store} from "@store/store.ts";
import {mockHackerNewsFirebaseAPIData} from "@features/news/api/mockHackerNewsFirebaseAPIData.ts";
import {FirebaseClient} from "@services/FirebaseClient.ts";

jest.mock("../../../services/FirebaseClient.ts");
const FirebaseClientMocked = FirebaseClient as jest.MockedClass<
  typeof FirebaseClient
>;
describe("LatestNews", () => {
  const Wrapper: React.FC<{children: ReactNode}> = ({children}) => (
    <Provider store={store}>{children}</Provider>
  );

  beforeAll(() => {
    // This sets the mock implementation for this test only
    (FirebaseClientMocked.prototype.getURL as jest.Mock).mockImplementation(
      (url) => {
        return mockHackerNewsFirebaseAPIData[url];
      },
    );
  });

  afterEach(() => {
    // Clear all instances and calls to constructor and all methods:
    FirebaseClientMocked.mockClear();
  });

  afterAll(() => {
    FirebaseClientMocked.mockReset();
  });

  describe("data works", () => {
    it("displays loading state", async () => {
      render(
        <Wrapper>
          <LatestNews />
        </Wrapper>,
      );
      await waitFor(() => {
        expect(screen.getByText("Loading..")).toBeInTheDocument();
      });

      // Ensure show more button isn't present while loading
      expect(screen.queryByText("show more")).not.toBeInTheDocument();
    });

    it("displays recent news with default count", async () => {
      render(
        <Wrapper>
          <LatestNews />
        </Wrapper>,
      );
      await waitFor(() => {
        expect(screen.getAllByTestId("news-detail")).toHaveLength(10);
      });
    });

    it("able to fetch more news after initially loaded", async () => {
      render(
        <Wrapper>
          <LatestNews />
        </Wrapper>,
      );
      await waitFor(() => {
        expect(screen.getAllByTestId("news-detail")).toHaveLength(10);
      });

      await waitFor(() => {
        fireEvent.click(screen.getByText("show more"));
      });
      await waitFor(() => {
        expect(screen.getAllByTestId("news-detail")).toHaveLength(19);
      });
      // Ensure show more button is disabled
      expect(screen.queryByText("show more")).toBeDisabled();
    });
  });
});
