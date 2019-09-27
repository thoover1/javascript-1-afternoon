function XO(str) {
  let arr = str.split("");
  let oh = 0;
  let ex = 0;
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === "o") {
      oh += 1;
    } else {
      ex += 1;
    }
  }
  console.log(ex);
  return oh === ex;
}

console.log(XO("xxxmppppo"));
