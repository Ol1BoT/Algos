let strs1 = ["flower", "flight", "flaunt"];
let strs2 = ["a"];
let strs3 = [""];
let strs4 = ["flowers", "flowers", "flowers"];
let strs5 = ["", "cbc", "c", "ca"];

const prefix = (strs) => {
  if (strs.length === 1) {
    return strs[0];
  }

  if (strs.length === 0) {
    return "";
  }

  let rv = "";

  let tv = "";
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] === "") {
      return "";
    }
    for (let temp = 0; temp < strs[i].length; temp++) {
      if (strs[i + 1] == undefined) {
        continue;
      }
      if (strs[i][0] != strs[i + 1][0]) {
        return "";
      }
    }
  }

  return rv;
};
