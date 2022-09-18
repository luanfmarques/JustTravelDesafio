import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        text-decoration: none;
    }

    body {
        background-color: ${({ theme }) => theme.color.background};
        font-family: "Circular Std", sans-serif;
        color: ${({ theme }) => theme.color.black};
    }

    h1 {
        font-size: 40px;
        line-height: 45px;
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        letter-spacing: -0.02em;
        margin: 0;
    }

    h2 {
        font-size: 24px;
        line-height: 30px;
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        letter-spacing: -0.01em;
    }

    h3 {
        font-size: 22px;
        line-height: 28px;
        font-weight: ${({ theme }) => theme.fontWeight.medium};
    }

    p {
        font-weight: ${({ theme }) => theme.fontWeight.book};
        font-size: 14px;
        line-height: 18px;
    }
`;
