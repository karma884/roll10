//const url = "https://roll10-api.herokuapp.com/";
//const url = "http://localhost:5000/";
const url = process.env.ROLL10_API_URL || "http://localhost:5000/";
export default url;
