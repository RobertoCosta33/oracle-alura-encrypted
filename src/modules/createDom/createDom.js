import { cryptEventAction } from "../events/cryptEventAction.js";
import { desencryptEventAction } from "../events/desencryptEventAction.js";

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

  //Event from crypt text
  crypt.addEventListener("click", () => {
    const newText = cryptEventAction(textInput.value);

    resolution.innerText = newText;

    textInput.value = "";
  });

  //Event from desencrypt text
  desencrypt.addEventListener("click", () => {
    const newText = desencryptEventAction(textInput.value);

    resolution.innerText = newText;

    textInput.value = "";
  });

  //Event from copy button
  copy.addEventListener("click", () => {
    navigator.clipboard.writeText(resolution.innerHTML);
  });

  //Event from paste button
  paste.addEventListener("click", async () => {
    const read = await navigator.clipboard.readText();
    textInput.value = read;
  });

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
