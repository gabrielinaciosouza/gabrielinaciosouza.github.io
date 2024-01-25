import React from "react";
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import Main from "./views/Main";
import Home from "./views/Home";
import Posts from "./views/Posts";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="posts" element={<Outlet />}>
            <Route path="" element={<Posts />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
