const apiKey = "61041e80233a8a40dbfc8a80a89dc295";

const list = document.querySelector(".weather-card .city-list");
const listItems = list.querySelectorAll(".weather-card .city");
const listItemArray = Array.from(listItems);

const defaultCityNames = ['los angeles','san francisco','milano', 'roma', 'torino'];

console.log(listItemArray, listItems, list);

let cityName = document.querySelector('.city-name');

const inputVal = "los angeles";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

const promiseFetch = fetch(url)
  .then((response) => response.json())
  .then((data) => {
      console.log("data: ", data);


    })
  .catch((err) => console.log("error: ", err));

window.onload = async () => {
  await promiseFetch;
};
