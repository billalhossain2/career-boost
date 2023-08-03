import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './components/Root.jsx'
import Home from './components/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Statistics from './components/Statistics.jsx'
import Blog from './components/Blog.jsx'
import AppliedJobs from './components/AppliedJobs.jsx'
import JobDetails from './components/JobDetails.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import jobDetailsLoader from './loaders/jobDetailsLoader'
import featuresLoader from './loaders/featuresLoader'
import assignmentDataLoader from './loaders/assignmentDataLoader'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader: featuresLoader
      },
      {
        path:'/statistics',
        element:<Statistics/>,
        loader:assignmentDataLoader,
      },
      {
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/applied-jobs',
        element:<AppliedJobs/>
      },
      {
        path:'/job-details/:detailId',
        element:<JobDetails/>,
        loader:jobDetailsLoader
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
