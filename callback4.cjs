/* 
	Problem 4: Write a function that will use the previously written 
    functions to get the following information. You do not need to pass control 
    back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind list simultaneously
*/
const fs = require("fs");
const path = require("path");

let boards = require("./callback1.cjs");
let lists = require("./callback2.cjs");
let cards = require("./callback3.cjs");

function pro() {
  let boardsPath = path.join(__dirname, "boards_1.json");

  fs.readFile(boardsPath, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }

    const boardsData = JSON.parse(data);
    let id = "";
    boardsData.forEach((ele) => {
      if (ele.name == "Thanos") {
        id = ele.id;
      }
    });
    boards(id, (err, data) => {
      if (err) {
        throw err;
      }
      if (data) {
        console.log(data);
      } else {
        console.log("could not find data");
      }
    });
    lists(id, (err, data) => {
      if (err) {
        throw err;
      }
      if (data) {
        console.log(data);
      } else {
        console.log("could not find data");
      }
    });
    let listsPath = path.join(__dirname, "lists_1.json");

    fs.readFile(listsPath, "utf-8", (err, data) => {
      if (err) {
        throw err;
      }

      const listData = JSON.parse(data);
      let mindId = "";
      Object.keys(listData).forEach((ele) => {
        const arr = listData[ele];
        arr.forEach((obj) => {
          if (obj.name == "Mind") {
            mindId = obj.id;
          }
        });
      });

      cards(mindId, (err, data) => {
        if (err) {
          throw err;
        }

        if (data) {
          console.log(data);
        } else {
          console.log("data could not find");
        }
      });
    });
  });
}

module.exports = pro;
