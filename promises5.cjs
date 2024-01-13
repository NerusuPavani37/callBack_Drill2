/* 
	Problem 5: Write a function that will use the previously written 
    functions to get the following information. You do not need to 
    pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind and Space lists simultaneously
*/

const fs = require("fs");
const path = require("path");

let boards = require("./promises1.cjs");
let lists = require("./promises2.cjs");
let cards = require("./promises3.cjs");

function problem5() {
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
      let mindId = "";
      let spaceId = "";
      Object.keys(listData).forEach((ele) => {
        const arr = listData[ele];
        arr.forEach((obj) => {
          if (obj.name == "Mind") {
            mindId = obj.id;
          }
          if (obj.name == "Space") {
            spaceId = obj.id;
          }
        });
      });

      async function cardsMindTests() {
        try {
          let obj = await cards(mindId);
          if (obj) {
            console.log(obj);
          } else {
            console.log("could not find data");
          }
        } catch (err) {
          console.log(err);
        }
      }

      cardsMindTests();

      async function cardsSpaceTests() {
        try {
          let obj = await cards(spaceId);
          if (obj) {
            console.log(obj);
          } else {
            console.log("could not find data");
          }
        } catch (err) {
          console.log(err);
        }
      }

      cardsSpaceTests();
    });
  });
}

module.exports = problem5;
