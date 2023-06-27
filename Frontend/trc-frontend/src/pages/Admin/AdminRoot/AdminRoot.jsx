import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const AdminRoot = () => {
  return (
    <>
      <AdminNavbar></AdminNavbar>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default AdminRoot;
