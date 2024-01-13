let listMatchedCardIds = require("../promises3.cjs");

const listId = "azxs123";

async function test() {
  try {
    const obj = await listMatchedCardIds(listId);
    console.log(obj);
  } catch (err) {
    console.error(err);
  }
}
test();
