import React from "react";

export const CardLayout = ({ children }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-4">
      {children}
    </div>
  );
};
