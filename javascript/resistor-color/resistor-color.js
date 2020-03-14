const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

export const colorCode = (color) => {
  return colors.indexOf(color)
};

export const COLORS = colors;


// better solution?

// export const colorCode = (color) => COLORS.indexOf(color);
// export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
