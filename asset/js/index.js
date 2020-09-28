import "regenerator-runtime/runtime";
import fromUnixTime from "date-fns/fromUnixTime";
import images from "../img/*.jpg";
const imgPath = "../img";

const openWeatherApiKey = "61041e80233a8a40dbfc8a80a89dc295";

const openWeatherBasepath = "https://api.openweathermap.org";
const openWeatherPath = "/data/2.5";
const openWeatherEndPointF = "/onecall";
const openWeatherLat = "lat";
const openWeatherLon = "lon";
const openWeatherAppId = "appid";

const defaultCityList = [
  {
    cityName: "los angeles",
    lat: 45.4642,
    lon: -118.243683,
    img: "LosAngeles"
  },
  {
    cityName: "san francisco",
    lat: 37.773972,
    lon: -122.431297,
    img: "sanFrancisco"
  },
  {
    cityName: "milano",
    lat: 45.4642,
    lon: 9.19,
    img: "milano"
  },
  {
    cityName: "roma",
    lat: 41.902782,
    lon: 12.496366,
    img: "roma"
  }
];

async function getWeatherData(citynamesArray, wApiK) {
  let resultArray = [];

  for (let i = 0; i < citynamesArray.length; i++) {
    const city = citynamesArray[i];

    let forecastUrl = `${openWeatherBasepath}${openWeatherPath}${openWeatherEndPointF}?${openWeatherLat}=${city.lat}&${openWeatherLon}=${city.lon}&${openWeatherAppId}=${wApiK}&units=metric&exclude=minutely,hourly`;
    let wUrl = ``;
    console.log(`fetching city ${city.cityName}`);
    try {
      let res = await fetch(forecastUrl).then(response => response.json());
      resultArray.push(res);

      const td = {
        date: res.current.dt,
        wType: res.current.weather[0].main,
        temp: res.current.temp,
        min: res.daily[0].temp.min,
        max: res.daily[0].temp.max,
        week: []
      };
      for (let wi = 0; wi < res.daily.length; wi++) {
        const dayEl = res.daily[wi];
        const dtn2 = new Date(fromUnixTime(dayEl.dt));

        let day = "";
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

        let icon = "";
        switch (dayEl.weather[0].icon) {
          case "01d":
            icon = "wi-day-sunny";
            console.log(dayEl.weather[0].icon);
            break;
          case "02d":
            icon = "wi-day-cloudy";
            console.log(dayEl.weather[0].icon);
            break;
          case "03d":
            icon = "wi-cloud";
            console.log(dayEl.weather[0].icon);
            break;
          case "04d":
            icon = "wi-day-cloudy-windy";
            console.log(dayEl.weather[0].icon);
            break;
          case "09d":
            icon = "wi-day-storm-showers";
            console.log(dayEl.weather[0].icon);
            break;
          case "10d":
            icon = "wi-day-rain";
            console.log(dayEl.weather[0].icon);
            break;
          case "11d":
            icon = "wi-day-thunderstorm";
            console.log(dayEl.weather[0].icon);
            break;
          case "13d":
            icon = "wi-day-snow";
            console.log(dayEl.weather[0].icon);
            break;
          case "50d":
            icon = "wi-day-fog";
            console.log(dayEl.weather[0].icon);
            break;
        }

        td.week.push({
          dayName: day,
          wType: icon,
          min: dayEl.temp.min,
          max: dayEl.temp.max
        });
      }

      citynamesArray[i].today = td;
    } catch (err) {
      console.log("error: ", err);
    }
  }
  console.log(resultArray);
  console.log(citynamesArray);

  const virtualSliderOptions = {
    speed: 1000,
    parallax: true,
    grabCursor: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    on: {
      init: () => {
        document.querySelector(".city-name").innerHTML =
          citynamesArray[0].cityName;
        document.querySelector(".w-type").innerHTML =
          citynamesArray[0].today.wType;
        document.querySelector(".temp").innerHTML =
          citynamesArray[0].today.temp.toFixed(1) + "<span>°</span>";
        document.querySelector(".min-max").innerHTML =
          citynamesArray[0].today.min.toFixed(1) +
          "<span>°</span>/" +
          citynamesArray[0].today.max.toFixed(1) +
          "<span>°</span>";
      }
    },
    virtual: {
      slides: (function() {
        let slides = [];
        for (let bkgI = 0; bkgI < citynamesArray.length; bkgI++) {
          slides.push(
            `<img alt=${citynamesArray[bkgI].cityName} src=${images[
              citynamesArray[bkgI].img
            ]} data-id=${bkgI} id="bkg${bkgI}" class="background-img"></img>`
          );
        }
        return slides;
      })()
    }
  };

  let mySwiper = new Swiper(".swiper-container", virtualSliderOptions);

  mySwiper.on("slideChange", () => {
    document.querySelector(".city-name").innerHTML =
      citynamesArray[mySwiper.activeIndex].cityName;
    document.querySelector(".w-type").innerHTML =
      citynamesArray[mySwiper.activeIndex].today.wType;
    document.querySelector(".temp").innerHTML =
      citynamesArray[mySwiper.activeIndex].today.temp.toFixed(1) +
      "<span>°</span>";
    document.querySelector(".min-max").innerHTML =
      citynamesArray[mySwiper.activeIndex].today.min.toFixed(1) +
      "<span>°</span>/" +
      citynamesArray[mySwiper.activeIndex].today.max.toFixed(1) +
      "<span>°</span>";
    let forecastBar = document.querySelectorAll(
      ".bar.text-level .bar-container .forecast-bar"
    );
    for (let i = 0; i < forecastBar.length; i++) {
      const element = forecastBar[i];
      // console.log(element);
      for (
        let y = 0;
        y < citynamesArray[mySwiper.activeIndex].today.week.length;
        y++
      ) {
        // console.log("y", y);
        // console.log(citynamesArray[mySwiper.activeIndex].today.week[y].dayName);
        // console.log(element
        //     .getElementsByClassName("day")
        //     [y].className.toString());
        // console.log("-----------------------------------");
        let element2 = element.getElementsByClassName("day")[y];

        if (element2) {
          console.log(element2.children);

          element2.children[0].children[0].innerHTML = `${citynamesArray[
            mySwiper.activeIndex
          ].today.week[y].dayName}`;

          console.log(`${citynamesArray[mySwiper.activeIndex].today.week[y].wType}`)

          element2.children[1].children[0].classList.toggle(
            `${citynamesArray[mySwiper.activeIndex].today.week[y].wType}`
          );

          element2.children[2].children[0].innerHTML = `<p>${citynamesArray[
            mySwiper.activeIndex
          ].today.week[y].min}<span>°</span>${citynamesArray[
            mySwiper.activeIndex
          ].today.week[y].max}<span>°</span></p>`;
        }
      }
    }
  });
}

window.onload = function() {
  getWeatherData(defaultCityList, openWeatherApiKey).then(console.log("done"));
};
