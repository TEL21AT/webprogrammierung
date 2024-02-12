let start = Date.now(),
  i = 0;

let count = function () {
  for (let j = 0; j < 1e9; j++) {
    i++;
  }
  console.log("finished app.js");
};

count();
