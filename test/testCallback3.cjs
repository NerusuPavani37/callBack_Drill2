let listMatchedCardIds = require("../callback3.cjs");

const listId = "azxs123";
listMatchedCardIds(listId, (err, data) => {
  if (err) {
    console.error("Error :", err);
  } else {
    console.log(data);
  }
});
