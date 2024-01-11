/* 
	Problem 3: Write a function that will return all cards that belong to a particular list based 
    on the listID that is passed to it from the given data in cards.json. Then pass control back to 
    the code that called it by using a callback function.
*/

const fs = require("fs");
const path = require("path");

function getCardsInfo(listID, callback) {
  setTimeout(() => {
    let cardsPath = path.join(__dirname, "cards_1.json");

    fs.readFile(cardsPath, "utf-8", (err, data) => {
      if (err) {
        throw err;
      }

      try {
        const cardsData = JSON.parse(data);
        let listIdCards = Object.keys(cardsData).find((listid) => {
          return listid == listID;
        });
        if (listIdCards) {
          callback(null, cardsData[listIdCards]);
        } else {
          callback(null, "could not find data");
        }
      } catch (error) {
        callback("Error parsing JSON", null);
      }
    });
  }, 2000);
}

module.exports = getCardsInfo;
