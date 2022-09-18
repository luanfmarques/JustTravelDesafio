import React from "react";
import Layout from "./src/components/Layout";
import Theme from "./src/components/Theme";

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
  return <Theme>{element}</Theme>;
};
