import { createBrowserRouter } from "react-router-dom";
import ClickCount from "../component/ClickCount";
import Hovercount from "../component/Hovercount";
import UserComp from "../component/UserComp";
import PageNotFOund from "../Layout/PageNotFound"; // fixed case
import MainDashboard from "../Layout/MainDashboard";
import ReactHookComp from "../Layout/ReactHookComp";
import UseStateComp from "../Layout/UseStateComp";
import UseEffectComp from "../Layout/UseEffectComp";
import ProductDash from "../Layout/ProductDash";
const router = createBrowserRouter([
  { path: "/", element: <UserComp /> },
  { path: "/count", element: <ClickCount /> },
  { path: "/hover", element: <Hovercount /> },
  { path: "*", element: <PageNotFOund /> },
  {
    path: "/dashboard",
    element: <MainDashboard />,
    children: [
      { path: "hook", element: <ReactHookComp /> },
      { path: "state", element: <UseStateComp /> },
      { path: "useEffect", element: <UseEffectComp /> },
      { path: "product", element: <ProductDash /> },
    ],
  },
]);
export default router;
