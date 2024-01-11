let lists = require("../callback2.cjs");

const boardID = "abc122dc";

lists(boardID, (err, data) => {
  if (err) {
    console.error("Error :", err);
  } else {
    console.log(data);
  }
});
