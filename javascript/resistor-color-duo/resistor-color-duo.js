export const decodedValue = (colors) => {
  const bands = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
  // colors.slice(0, 2);
  var a = bands.indexOf(colors[0]);
  var b = bands.indexOf(colors[1]);
  return parseInt(`${a}${b}`);
  // return Number(`${a}${b}`)
};
