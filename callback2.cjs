/* 
	Problem 2: Write a function that will return all lists that belong to a board based on the boardID 
    that is passed to it from the given data in lists.json. Then pass control back to the code that called 
    it by using a callback function.
*/

const fs = require("fs");
const path = require("path");

function listInformation(boardId, callback) {
  setTimeout(() => {
    let listsPath = path.join(__dirname, "lists_1.json");

    fs.readFile(listsPath, "utf-8", (err, data) => {
      if (err) {
        console.error(err);
      }
      try {
        const lists = JSON.parse(data);

        const foundList = Object.keys(lists).find((ids) => {
          return ids == boardId;
        });
        if (foundList) {
          callback(null, lists[foundList]);
        } else {
          callback("Error List not found", null);
        }
      } catch (error) {
        callback("Error parsing JSON", null);
      }
    });
  }, 2000);
}

module.exports = listInformation;
