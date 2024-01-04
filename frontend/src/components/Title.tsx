import React from "react";

type Props = {};

const Title = (props: { title: string }) => {
  return (
    <h3 className="text-lightBlue font-bold uppercase text-2xl">{props.title}</h3>
  );
};

export default Title;
