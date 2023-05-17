export function convertString(str) {
  if (str) {
    var temp = str.split("-"),
      i,
      pretty;
    for (i = 0; i < temp.length; i++) {
      temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
    }
    pretty = temp.join(" ");
    return pretty;
  }
}
