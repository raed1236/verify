import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { PathProvider } from "providers";

interface Props {
  children?: React.ReactNode;
}

export const Providers: FC<Props> = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <PathProvider>{children}</PathProvider>
      </BrowserRouter>
    </>
  );
};
