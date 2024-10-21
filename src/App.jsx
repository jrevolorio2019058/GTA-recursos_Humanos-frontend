import{

  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes

} from "react-router-dom";

import { Toaster } from "react-hot-toast";

import {LoginPage} from "./pages/login/loginPage.jsx";

function AppRoutes() {

  const routes = useRoutes([

    { path: "/", element: <LoginPage/> }

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
