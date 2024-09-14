export const createPassword = (characters: string, passwordLength: number) => {
  let result = '';
  for (let i = 0; i < passwordLength; i++) {
    const characterIndex = Math.round(Math.random() * characters.length);
    result += characters.charAt(characterIndex);
  }
  return result;
  // console.log('hitesh');
};
