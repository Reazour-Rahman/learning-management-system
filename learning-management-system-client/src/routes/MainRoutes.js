import { lazy } from "react";

// project import
import Loadable from "../components/suspense/Loadable";
import MainLayout from "../layout/mainLayout/MainLayout";

// render - dashboard
const Home = Loadable(lazy(() => import("../pages/home/index.js")));
const About = Loadable(lazy(() => import("../pages/about/index.js")));
const AuthLogin = Loadable(
  lazy(() => import("../pages//authentication/Login"))
);

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "login",
      element: <AuthLogin />,
    },
  ],
};

export default MainRoutes;
