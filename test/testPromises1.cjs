let boards = require("../promises1.cjs");

const boardID = "mcu453ed";
async function fetchBoardInfo() {
  try {
    const boardInfo = await boards(boardID);
    console.log(boardInfo);
  } catch (err) {
    console.error("Error:", err);
  }
}

// Call the async function
fetchBoardInfo();
