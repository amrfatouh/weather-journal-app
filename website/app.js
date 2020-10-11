/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

const apiKey = "&appid=629aa1395ae06058a5ea03ec443cc3cd";
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";
const LAZip = 90011;

const getWeather = async (url, zipCode, key) => {
  const res = await fetch(url + zipCode + key);
  try {
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
};

document.querySelector("#generate").addEventListener("click", () => {
  getWeather(baseUrl, 90011, apiKey);
});
