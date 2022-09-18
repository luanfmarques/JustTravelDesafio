import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyles } from "../../styles/globals";
import { theme } from "../../styles/theme";

interface Props {
  children?: ReactNode;
}

const Theme = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Normalize />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
