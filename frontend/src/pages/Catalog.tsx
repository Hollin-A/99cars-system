import React from "react";
import Title from "../components/Title";

const tableHeaders: string[] = [
  "code",
  "brand",
  "model",
  "registraion",
  "color",
];

type Props = {};

const Catalog = (props: Props) => {
  return (
    <div className="">
      <Title title="vehicle catalog" />
      <div className="mt-5">
        <div className="bg-white grid grid-cols-5 p-3 rounded-xl">
          {tableHeaders.map((item) => (
            <div className="" key={item}>
              <p className="capitalize font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
