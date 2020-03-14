export const parse = (string) => {
  var array = string.replace(/_/g, '').split(/[ -]/);
  return array.map(words => words[0]).join('').toUpperCase();
};
