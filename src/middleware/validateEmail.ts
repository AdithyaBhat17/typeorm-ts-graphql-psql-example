export const validateEmail = (email: string): boolean => {
  let re: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
