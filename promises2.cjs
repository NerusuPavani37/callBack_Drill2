/* 
	Problem 2: Write a function that will return all lists that belong to a board based on the boardID 
    that is passed to it from the given data in lists.json. Then pass control back to the code that called 
    it by using a callback function.
*/

const { rejects } = require("assert");
const fs = require("fs");
const path = require("path");

function listInformation(boardId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let listsPath = path.join(__dirname, "lists_1.json");

      fs.readFile(listsPath, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        }
        try {
          const lists = JSON.parse(data);

          const foundList = Object.keys(lists).find((ids) => {
            return ids == boardId;
          });
          if (foundList) {
            resolve(lists[foundList]);
          } else {
            reject("Error List not found");
          }
        } catch (error) {
          reject("Error parsing JSON");
        }
      });
    }, 2000);
  });
}

module.exports = listInformation;
