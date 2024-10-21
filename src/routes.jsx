import { useRoutes } from "react-router-dom/list";
import {LoginPage} from "./pages/login/loginPage";
import {Home} from "./pages/home/home";

const routes = useRoutes([

    { path: "/", element: <LoginPage/> },
    { path: "/home", element: <Home/> }

]);

export default routes;