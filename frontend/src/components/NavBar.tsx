import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="w-full h-12 flex items-center justify-between p-3 border-b border-dark/20">
      <div className="">
        <span className="text-red text-2xl font-extrabold italic">99</span>
        <span className="text-darkBlue text-2xl font-extrabold uppercase">
          cars
        </span>
      </div>
      <div className="cursor-pointer">
        <p className="capitalize font-semibold">
            sign out
        </p>
      </div>
    </nav>
  );
};

export default NavBar;
