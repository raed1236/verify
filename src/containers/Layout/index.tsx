import React from "react";
import { Header, Routes } from "./components";

export const Layout = () => {
  return (
    <div className="layoutElement">
      <Header />
      <Routes />

      <p className="footerText">Copyrighted &copy; 2023 - Basilisk Entertainment S.R.L</p>
    </div>
  );
};
