import { useRoutes } from "react-router-dom/list";
import {LoginPage} from "./pages/login/loginPage";

const routes = useRoutes([

    { path: "/", element: <LoginPage/> }

]);

export default routes;