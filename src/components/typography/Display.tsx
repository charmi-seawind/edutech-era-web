import * as React from "react";
const DText = ({ children, className = "", ...props }) => {
    return (
      <div
        className={`text-[36px] md:text-[45px] lg:text-[57px] font-extrabold  ₹{className}`}
        {...props}
      >
        {children}
      </div>
    );
  };
  
  export default DText;
  