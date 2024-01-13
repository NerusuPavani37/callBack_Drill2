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

let boards = require("./promises1.cjs");
let lists = require("./promises2.cjs");
let cards = require("./promises3.cjs");

function problem6() {
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

    async function boardsTest() {
      try {
        let obj = await boards(id);
        if (obj) {
          console.log(obj);
        } else {
          console.log("could not find data");
        }
      } catch (err) {
        console.log(err);
      }
    }
    boardsTest();

    async function listsTest() {
      try {
        let obj = await lists(id);
        if (obj) {
          console.log(obj);
        } else {
          console.log("could not find data");
        }
      } catch (err) {
        console.log(err);
      }
    }

    listsTest();

    let listsPath = path.join(__dirname, "lists_1.json");

    fs.readFile(listsPath, "utf-8", (err, data) => {
      if (err) {
        throw err;
      }

      const listData = JSON.parse(data);

      Object.keys(listData).forEach((ele) => {
        const arr = listData[ele];
        arr.forEach((object) => {
          let ele = object;
          async function cardsTests() {
            try {
              let obj = await cards(ele.id);
              if (obj) {
                console.log(obj);
              } else {
                console.log("could not find data");
              }
            } catch (err) {
              console.log(err);
            }
          }
          cardsTests();
        });
      });
    });
  });
}

module.exports = problem6;
