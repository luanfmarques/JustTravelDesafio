import React from "react";
import Layout from "./src/components/Layout";
import Theme from "./src/components/Theme";
import CartContextProvider from "./src/contexts/Cart-provider";
import TicketsContextProvider from "./src/contexts/Tickets-provider";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload stylesheet"
      href="http://fonts.cdnfonts.com/css/circular-std"
      as="style"
      key="Circular Std"
      type="text/css"
    />,
  ]);
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
  return (
    <TicketsContextProvider>
      <CartContextProvider>
        <Theme>{element}</Theme>
      </CartContextProvider>
    </TicketsContextProvider>
  );
};
