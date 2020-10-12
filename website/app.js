/* Global Variables */

// const { userInfo } = require("os");

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
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

const postWeather = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const weather = await request.json();
    document.getElementById("date").innerHTML = weather.date;
    document.getElementById("temp").innerHTML = weather.temperature;
    document.getElementById("content").innerHTML = weather.userResponse;
  } catch (error) {
    console.log("error", error);
  }
};

document.querySelector("#generate").addEventListener("click", () => {
  let zip = document.querySelector("#zip").value;
  let userResponse = document.querySelector("#feelings").value;
  getWeather(baseUrl, zip, apiKey)
    .then((data) => {
      console.log(data);
      let weatherObj = {
        temperature: data.main.temp,
        date: newDate,
        userResponse,
      };
      postWeather("/add", weatherObj);
    })
    .then(updateUI());
});
