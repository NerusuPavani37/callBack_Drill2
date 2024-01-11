/* 
	Problem 6: Write a function that will use the previously written 
    functions to get the following information. You do not need to pass 
    control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for all lists simultaneously
*/

const fs = require("fs");
const path = require("path");

let boards = require("./callback1.cjs");
let lists = require("./callback2.cjs");
let cards = require("./callback3.cjs");

function problem6() {
  const boardsPath = path.join(__dirname, "./boards_1.json");

  fs.readFile(boardsPath, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }

    const boardsData = JSON.parse(data);
    let boarsId = "";
    boardsData.forEach((ele) => {
      if (ele.name == "Thanos") {
        boarsId = ele.id;
      }
    });

    boards(boarsId, (err, data) => {
      if (err) {
        throw err;
      }

      if (data) {
        console.log(data);
      } else {
        console.log("could not find data");
      }
    });
    //Get all the lists for the Thanos board

    lists(boarsId, (err, data) => {
      if (err) {
        throw err;
      }

      if (data) {
        console.log(data);
      } else {
        console.log("could not find data");
      }
    });

    //Get all cards for all lists simultaneously
    let listsPath = path.join(__dirname, "lists_1.json");
    fs.readFile(listsPath, "utf-8", (err, data) => {
      if (err) {
        throw err;
      }

      const listData = JSON.parse(data);
      Object.keys(listData).forEach((ele) => {
        let arr = listData[ele];

        arr.forEach((obj) => {
          cards(obj.id, (err, data) => {
            if (err) {
              throw err;
            }
            if (data) {
              console.log(data);
            } else {
              console.log("no cards for this lists");
            }
          });
        });
      });
    });
  });
}

module.exports = problem6;
