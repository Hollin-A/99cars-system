import React from "react";

import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const screenHeight = window.innerHeight;

const bodyHeight = screenHeight - 48;

type Props = {};

const RootLayout = (props: Props) => {
  return (
    <div className="h-screen">
      <NavBar />
      <div className="flex w-full" style={{ height: `${bodyHeight}px` }}>
        <SideBar />
        <div className="h-full overflow-auto w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
