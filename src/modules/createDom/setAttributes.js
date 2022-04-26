import { createDom } from "./createDom.js";

export const setProprieties = () => {
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
  } = createDom();

  app.setAttribute("id", "root");
  title.classList.add("title");
  head.classList.add("head");
  textLabel.setAttribute("name", "name");
  textLabel.classList.add("labelName");
  textInput.setAttribute("name", "name");
  textInput.classList.add("inputName");
  textInput.setAttribute(
    "placeholder",
    "Escreva a palavra a ser encryptada ou desencryptada"
  );
  copyPastContainer.classList.add("copy-past-container");
  copy.classList.add("copy-paste");
  paste.classList.add("copy-paste");
  containerButtons.classList.add("containerButtons");
  crypt.classList.add("button");
  desencrypt.classList.add("button");
  resolutionContainer.classList.add("containerResolution");
  resolution.classList.add("resolution");
  footer.classList.add("footer");
  iconsContainer.classList.add("iconsContainer");
  linkedinIconAncor.setAttribute(
    "href",
    "https://www.linkedin.com/in/roberto-b-costa-000b91218/"
  );
  linkedinIconAncor.setAttribute("target", "_blank");
  linkedinIcon.setAttribute("name", "logo-linkedin");
  githubIconAncor.setAttribute("href", "https://github.com/RobertoCosta33");
  githubIconAncor.setAttribute("target", "_blank");
  githubIcon.setAttribute("name", "logo-github");

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
