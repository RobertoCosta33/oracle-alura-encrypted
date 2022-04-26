import { setInnerTexts } from "./setInnerTexts.js";

export const appendChilds = () => {
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
  } = setInnerTexts();

  document.body.appendChild(app);
  head.appendChild(title);
  textLabel.appendChild(textInput);
  containerButtons.appendChild(crypt);
  containerButtons.appendChild(desencrypt);
  app.appendChild(head);
  app.appendChild(textLabel);
  app.appendChild(copyPastContainer);
  copyPastContainer.appendChild(copy);
  copyPastContainer.appendChild(paste);
  app.appendChild(containerButtons);
  app.appendChild(resolutionContainer);
  resolutionContainer.appendChild(resolution);
  app.appendChild(footer);
  footer.appendChild(iconsContainer);
  iconsContainer.appendChild(linkedinIconAncor);
  iconsContainer.appendChild(githubIconAncor);
  linkedinIconAncor.appendChild(linkedinIcon);
  githubIconAncor.appendChild(githubIcon);

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
