import { setProprieties } from "./setProprieties.js";

export const setInnerTexts = () => {
  const {
    app,
    head,
    title,
    textLabel,
    textInput,
    copyPastContainer,
    copy,
    paste,
    containerButtons,
    crypt,
    desencrypt,
    resolutionContainer,
    resolution,
    footer,
    iconsContainer,
    linkedinIconAncor,
    linkedinIcon,
    githubIconAncor,
    githubIcon,
  } = setProprieties();

  title.innerText = "Oracle + Alura - Encrypted";
  textLabel.innerText = "Primeiro desafio";
  copy.innerText = "Copiar";
  paste.innerText = "Colar";
  crypt.innerText = "Cryptografar";
  desencrypt.innerText = "Descryptografar";
  resolution.innerHTML = "";
  footer.innerHTML = "&copyRoberto Barbosa Costa - 2022";
  return {
    app,
    head,
    title,
    textLabel,
    textInput,
    copyPastContainer,
    copy,
    paste,
    containerButtons,
    crypt,
    desencrypt,
    resolutionContainer,
    resolution,
    footer,
    iconsContainer,
    linkedinIconAncor,
    linkedinIcon,
    githubIconAncor,
    githubIcon,
  };
};
