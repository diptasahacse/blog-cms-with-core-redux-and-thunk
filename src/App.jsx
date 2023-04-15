import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import FrontPartLayout from "./components/FrontPart/Layouts/FrontPartLayout";
import Home from "./components/FrontPart/Pages/Home";
import Blogs from "./components/FrontPart/Pages/Blogs";
import AuthLayout from "./components/FrontPart/Layouts/AuthLayout";
import SignIn from "./components/FrontPart/Pages/SinIn";
import Register from "./components/FrontPart/Pages/Register";
import PasswordReset from "./components/FrontPart/Pages/PasswordReset";
import DashboardLayout from "./components/Dashboard/Layouts/DashboardLayout";
import Dashboard from "./components/Dashboard/Pages/Dashboard";
import DashboardProfile from "./components/Dashboard/Pages/DashboardProfile";
import DashboardProfileSettings from "./components/Dashboard/Pages/DashboardProfileSettings";
import DashboardBlogs from "./components/Dashboard/Pages/DashboardBlogs";
import AllUsers from "./components/Dashboard/Pages/AllUsers";
import NotFound from "./components/FrontPart/Pages/NotFound";


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
        {
          path: "/forget-password",
          element: <PasswordReset />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
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
          element: <DashboardBlogs />,
        },
        {
          path: "/dashboard/users",
          element: <AllUsers />,
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
    </>
  );
}

export default App;
