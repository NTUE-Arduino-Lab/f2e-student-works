import axios from "axios";

const cors = "https://cors-anywhere.herokuapp.com/"

const baseUrl =
  "https://script.google.com/macros/s/AKfycbxjiX0E9iXrpJQSupsfYElpso8vLdWCFky7q5dP_zOy36LQ4TN6xmTmjvitEQDWWmrcgg/exec";

export const getSheetData = async () => {
  try {

    let result = await axios.get(`${baseUrl}`);

    return result.data;
  } catch (err) {
    console.log(err);
  }
};
