import { createBrowserRouter } from "react-router-dom";
import QuestionAndAnswer from "./Pages/QuestionAndAnswer/QuestionAndAnswer.jsx";
import AskQuestion from "./Pages/Question/AskQuestion/AskQuestion.jsx";
import PageNotFound from "./Pages/PageNotFound/PageNotFound.jsx";
import Home from "./Pages/Home/Home.jsx";
import AuthLayout from "./Pages/AuthLayout/AuthLayout.jsx";
import ProtectRoute from "./components/ProtectRoute/ProtectRoute.jsx";
import Layout from "./Layout/Layout.jsx";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectRoute redirect={"/"}>
            <Home />
          </ProtectRoute>
        ),
      },
      {
        path: "/ask",
        element: (
          <ProtectRoute redirect={"/ask"}>
            <AskQuestion />
          </ProtectRoute>
        ),
      },
      {
        path: "/question/:questionId",
        element: (
          <ProtectRoute redirect={"/question/:questionId"}>
            <QuestionAndAnswer />
          </ProtectRoute>
        ),
      },
      {
        path: "/auth",
        element: <AuthLayout />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
