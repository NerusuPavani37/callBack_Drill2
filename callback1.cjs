const fs = require("fs");
const path = require("path");

function getBoardInformation(boardID, callback) {
  setTimeout(() => {
    let boardsPath = path.join(__dirname, "boards_1.json");
    fs.readFile(boardsPath, "utf-8", (err, data) => {
      if (err) {
        callback(err, null);
        return;
      }
      try {
        const boards = JSON.parse(data);
        const foundBoard = boards.find((board) => {
          return board.id === boardID;
        });

        if (foundBoard) {
          callback(null, foundBoard);
        } else {
          callback("Board not found", null);
        }
      } catch (error) {
        callback("Error parsing JSON", null);
      }
    });
  }, 2000);
}
module.exports = getBoardInformation;
