import React from "react";

import { NavLink } from "react-router-dom";

import { HomeIcon, CatalogIcon, SettingsIcon, InsightsIcon } from "./icons";

import { sidebar } from "../config/site";

type Props = {};

const renderIconComponent = (name: string) => {
  switch (name) {
    case "home":
      return <HomeIcon />;
    case "catalog":
      return <CatalogIcon />;
    case "insights":
      return <InsightsIcon />;
    case "settings":
      return <SettingsIcon />;
    default:
      return <div />;
  }
};

const SideBar = (props: Props) => {
  return (
    <div className="w-18 flex flex-col items-center justify-start p-3 border-r border-light gap-10">
      {sidebar.map((item) => (
        <NavLink
          className="flex flex-col items-center justify-center gap-2 cursor-pointer"
          key={item.link}
          to={item.link}
        >
          {renderIconComponent(item.name)}
          <p className="text-xs uppercase font-semibold text-dark/50">
            {item.name}
          </p>
        </NavLink>
      ))}
    </div>
  );
};

export default SideBar;
