import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/Layouts/HomeLayout/HomeLayout";
import HomePage from "../components/Pages/Home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
    ],
  },
]);

export default router;
