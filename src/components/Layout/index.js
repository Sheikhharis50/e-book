import React from "react";
import Header from "../Header";
import "./index.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
