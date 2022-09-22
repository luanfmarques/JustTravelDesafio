import * as React from "react";
import { Link, HeadFC } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Página não encontrada</h1>
      <p style={paragraphStyles}>
        Desculpe 😔, Não conseguimos encontrar o que você estava procurando
        <br />
        <br />
        <Link to="/">Ir para o inicio</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Não encontrada</title>;
