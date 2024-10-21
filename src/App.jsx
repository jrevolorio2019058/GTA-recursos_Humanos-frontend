import{

  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes

} from "react-router-dom";

import { Toaster } from "react-hot-toast";

import {LoginPage} from "./pages/login/loginPage.jsx";

import {Home} from "./pages/home/home.jsx";

function AppRoutes() {

  const routes = useRoutes([

    { path: "/", element: <LoginPage/> },
    { path: "/home", element: <Home/> }

  ]);

  return routes;

}

function App(){

  return (

    <Router>

      <Toaster position="top-center" reverseOrder={false}/>

      <AppRoutes />

    </Router>

  )

}

export default App
