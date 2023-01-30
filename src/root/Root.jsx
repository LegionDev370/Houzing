import React from "react";
import Navbar from "../components/Navbar";
import navbar from "../utils/navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Navbar/>}>
          {navbar.map(({ path, id, element }) => {
            return <Route key={id} path={path} element={element} />;
          })}
        </Route>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default Root;
