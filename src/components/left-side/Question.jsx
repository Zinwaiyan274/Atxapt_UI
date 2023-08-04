import React from "react";

function Question({ text, children }) {
  return (
    <div>
      <h2 className=" mb-7 text-secondary font-semibold text-lg  md:text-xl lg:text-2xl">{text}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">{children}</div>
    </div>
  );
}

export default Question;
