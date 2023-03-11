import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../Appbar";

export default function Header() {
  return (
    <>
      <Appbar />
      <Outlet />
    </>
  );
}
