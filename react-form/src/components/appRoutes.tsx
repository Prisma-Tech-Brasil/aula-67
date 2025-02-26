import { useRoutes } from "react-router-dom";

import Home from "../pages/home";
import CreateClass from "../pages/createClass";

export default function AppRoutes() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/criar-turma", element: <CreateClass /> },
  ];

  return useRoutes(routes);
}