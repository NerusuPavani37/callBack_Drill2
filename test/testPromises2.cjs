let lists = require("../promises2.cjs");

const boardID = "abc122dc";

async function test() {
  try {
    const obj = await lists(boardID);
    console.log(obj);
  } catch (err) {
    console.log(err);
  }
}

test();
