import React from "react";
// container : accepts properties as children ,
// defines the styles for the container component
function Container({ children }) {
  return <div className="w-full max-w-7xl mx-auto px-4">{children}</div>;
}

export default Container;
