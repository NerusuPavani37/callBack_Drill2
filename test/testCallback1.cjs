let boards = require("../callback1.cjs");

const boardID = "mcu453ed";
boards(boardID, (err, boardInfo) => {
  if (err) {
    console.error("Error :", err);
  } else {
    console.log(boardInfo);
  }
});
