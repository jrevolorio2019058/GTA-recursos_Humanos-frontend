import{

  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes

} from "react-router-dom";

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

      <AppRoutes />

    </Router>

  )

}

export default App
