import React from "react";

const DashboardHeading = ({ title = "", desc = "" }) => {
  return (
    <div className="mb-10">
      <h1 className="font-bold text-2xl mb-3">{title}</h1>
      <p className="text-base">{desc}</p>
    </div>
  );
};

export default DashboardHeading;
