import React from "react";
const Shimmer = ({ show }) => {
  const isHidden = show ? "" : "hidden";
  return <div class={`absolute inset-0 bg-indigo-200 skeleton ${isHidden}`} />;
};
export default Shimmer;
