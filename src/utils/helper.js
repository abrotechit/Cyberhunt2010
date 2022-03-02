export const checkAcess = (value) => {
  const regexFormat = /^[[0-9+-]+$/;
  console.log(regexFormat.test(value));
  return regexFormat.test(value);
};
