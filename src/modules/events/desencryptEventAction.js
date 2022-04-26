export const desencryptEventAction = text =>
  text
    .replace(/(ai)/gi, "a")
    .replace(/(enter)/gi, "e")
    .replace(/(imes)/gi, "i")
    .replace(/(ober)/gi, "o")
    .replace(/(ufat)/gi, "u")
    .normalize("NFD")
    .replace(/[^a-zA-Zs^" "^0-9]/gi, "");
