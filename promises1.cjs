const { rejects } = require("assert");
const fs = require("fs");
const path = require("path");

function getBoardInformation(boardID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let boardsPath = path.join(__dirname, "boards_1.json");
      fs.readFile(boardsPath, "utf-8", (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        try {
          const boards = JSON.parse(data);
          const foundBoard = boards.find((board) => {
            return board.id === boardID;
          });

          if (foundBoard) {
            resolve(foundBoard);
          } else {
            reject("Board not found");
          }
        } catch (error) {
          reject("Error parsing JSON");
        }
      });
    }, 2000);
  });
}
module.exports = getBoardInformation;
