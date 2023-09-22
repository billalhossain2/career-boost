import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/Layouts/HomeLayout/HomeLayout";
import HomePage from "../components/Pages/Home/HomePage";
import CommonLayout from "../components/Layouts/CommonLayout/CommonLayout";
import JobDetails from "../components/Pages/JobDetails/JobDetails";
import AppliedJobs from "../components/Pages/AppliedJobs/AppliedJobs";
import Blog from "../components/Pages/Blogs/Blog";
import Statistics from "../components/Pages/Statistics/Statistics";

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
  {
    path:"/main",
    element:<CommonLayout></CommonLayout>,
    children:[
      {
        path:"/main/job-details/:jobId",
        element:<JobDetails></JobDetails>,
      },
      {
        path:"/main/applied-jobs",
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:"/main/blogs",
        element:<Blog></Blog>
      },
      {
        path:"/main/statistics",
        element:<Statistics></Statistics>,
        loader:(()=>fetch("../assignment.json"))
      }
    ]
  }
]);

export default router;
