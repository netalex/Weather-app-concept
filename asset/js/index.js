import "regenerator-runtime/runtime";
import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";
import fromUnixTime from 'date-fns/fromUnixTime'
import images from '../img/*.jpg'
const imgPath='../img';


const today = new Date();
const startDay = startOfWeek(today);
const endDay = endOfWeek(today);
console.log(today, startDay, endDay);

const openWeatherApiKey = "61041e80233a8a40dbfc8a80a89dc295";

const openWeatherBasepath = "https://api.openweathermap.org";
// const path = '/data/2.5/weather'
const openWeatherPath = "/data/2.5";
const openWeatherEndPointF = "/onecall"
const openWeatherEndPointW = "/onecall"
const openWeatherCity = "q";
const openWeatherLat = "lat";
const openWeatherLon = "lon";
const openWeatherAppId = "appid";

const defaultCityList = [
  {
    cityName: "los angeles",
    lat: 45.4642,
    lon: -118.243683,
    img: `LosAngeles`
    //      ../img/LosAngeles.jpg
  },
  {
    cityName: "san francisco",
    lat: 37.773972,
    lon: -122.431297,
    img: `${imgPath}/sanFrancisco.jpg`
  },
  {
    cityName: "milano",
    lat: 45.4642,
    lon: 9.19,
    img: `${imgPath}/milano.jpg`
  },
  {
    cityName: "roma",
    lat: 41.902782,
    lon: 12.496366,
    img: `${imgPath}/roma.jpg`
  },
];

const weatherDataStructure = {};

async function getWeatherData(citynamesArray, wApiK) {
  let resultArray = [];

  let resultCord = [
    {
      city: "",
      lat: 0,
      lon: 0
    }
  ];

  for (let i = 0; i < citynamesArray.length; i++) {
    const city = citynamesArray[i];
    let forecastUrl= `${openWeatherBasepath}${openWeatherPath}${openWeatherEndPointF}?${openWeatherLat}=${city.lat}&${openWeatherLon}=${city.lon}&${openWeatherAppId}=${wApiK}&units=metric&exclude=minutely`;
    let wUrl = ``;
    console.log(`fetching city ${city.cityName}`);
    try {
      let res = await fetch(forecastUrl).then((response) => response.json());
      resultArray.push(res);

      const td= {
        date: res.current.dt,
        wType: res.current.weather[0].main,
        temp : res.current.temp,
        min : res.daily[0].temp.min,
        max : res.daily[0].temp.max,
        // max : res.daily.filter(d => d.dt===res.current.dt).temp.max,
        week: []
      }
      for (let wi = 0; wi < res.daily.length; wi++) {
        const dayEl = res.daily[wi];
        const dtn2 = new Date(fromUnixTime(dayEl.dt));
        console.log(dtn2.getDay())

        let day='';
        switch (dtn2.getDay()) {
          case 0:
            day = "SUN";
            break;
          case 1:
            day = "MON";
            break;
          case 2:
            day = "TUE";
            break;
          case 3:
            day = "WED";
            break;
          case 4:
            day = "THU";
            break;
          case 5:
            day = "FRI";
            break;
          case 6:
            day = "SAT";
        }

        td.week.push({
          dayName: day,
          wType: dayEl.weather[0].icon,
          min: dayEl.temp.min,
          max: dayEl.temp.max,
        });

      }

      citynamesArray[i].today = td;


    } catch (err) {
      console.log("error: ", err);
    }
  }
  console.log(resultArray);
  console.log(citynamesArray);

  document.getElementById('bkg1').style.backgroundImage = `url(${images[citynamesArray[0].img]})`;


}

window.onload = function() {
  getWeatherData(defaultCityList, openWeatherApiKey).then(
    console.log("done")
  );
};
