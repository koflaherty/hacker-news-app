import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {index} from "./pages";
import {starred} from "./pages/starred.tsx";

const router = createBrowserRouter([index, starred]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
