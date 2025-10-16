  import * as React from "react";

  interface ContainerProps {
    children: React.ReactNode;
    className?: string;
  }

  const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
    return (
      <div
        className={`w-full max-w-[100%] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1200px] xl:max-w-[1140px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10 ${className}`}
      >
        {children}
      </div>
    );
  };

  export default Container;
