import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="w-full h-12 flex items-center justify-end p-3 border-b border-light relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
