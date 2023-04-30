import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import FrontPartLayout from "./components/FrontPart/Layouts/FrontPartLayout";
import Home from "./components/FrontPart/Pages/Home";
import Blogs from "./components/FrontPart/Pages/Blogs";
import AuthLayout from "./components/FrontPart/Layouts/AuthLayout";
import SignIn from "./components/FrontPart/Pages/SinIn";

import DashboardLayout from "./components/Dashboard/Layouts/DashboardLayout";
import Dashboard from "./components/Dashboard/Pages/Dashboard";
import DashboardProfile from "./components/Dashboard/Pages/DashboardProfile";
import DashboardProfileSettings from "./components/Dashboard/Pages/DashboardProfileSettings";
import DashboardBlogs from "./components/Dashboard/Pages/DashboardBlogs";
import AllUsers from "./components/Dashboard/Pages/AllUsers";
import NotFound from "./components/FrontPart/Pages/NotFound";
import Register from "./components/FrontPart/Pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./components/Shared/RequireAuth";
import RequireAdmin from "./components/Shared/RequireAdmin";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FrontPartLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "blogs",
          element: <Blogs />,
        },
      ],
    },
    {
      path: "",
      element: <AuthLayout />,
      children: [
        {
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <RequireAuth>
          <DashboardLayout />
        </RequireAuth>
      ),
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/dashboard/profile",
          element: <DashboardProfile />,
        },
        {
          path: "/dashboard/profile-settings",
          element: <DashboardProfileSettings />,
        },
        {
          path: "/dashboard/blogs",
          element: (
            <RequireAdmin>
              <DashboardBlogs />
            </RequireAdmin>
          ),
        },
        {
          path: "/dashboard/users",
          element: (
            <RequireAdmin>
              <AllUsers />
            </RequireAdmin>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
