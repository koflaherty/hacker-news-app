import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {index} from "@pages/index.tsx";
import {starred} from "@pages/starred.tsx";
import "./theme/global/main.scss";
import {store} from "@store/store.ts";

const router = createBrowserRouter([index, starred]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
