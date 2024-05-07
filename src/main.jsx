import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AppContext from "./context";
import { Query, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContext>
    <QueryClientProvider client={queryClient}>
      <App></App>
      <ReactQueryDevtools initialIsOpen={true}></ReactQueryDevtools>
    </QueryClientProvider>
  </AppContext>
);
