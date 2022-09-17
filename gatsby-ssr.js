import React from "react";

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
