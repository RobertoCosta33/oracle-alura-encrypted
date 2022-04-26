export const cryptEventAction = text =>
  text
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/e/gi, "enter")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat")
    .replace(/[^a-zA-Zs^" "^0-9]/gi, "");
