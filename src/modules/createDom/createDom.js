export const createDom = () => {
  //Create Elements
  const app = document.createElement("div");
  const head = document.createElement("header");
  const title = document.createElement("h1");
  const textLabel = document.createElement("label");
  const textInput = document.createElement("input");
  const copyPastContainer = document.createElement("div");
  const copy = document.createElement("button");
  const paste = document.createElement("button");
  const containerButtons = document.createElement("div");
  const crypt = document.createElement("button");
  const desencrypt = document.createElement("button");
  const resolutionContainer = document.createElement("div");
  const resolution = document.createElement("p");
  const footer = document.createElement("footer");
  const iconsContainer = document.createElement("div");
  const linkedinIconAncor = document.createElement("a");
  const linkedinIcon = document.createElement("ion-icon");
  const githubIconAncor = document.createElement("a");
  const githubIcon = document.createElement("ion-icon");
  
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