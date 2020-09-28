incon conversion table

> openweathermap has a custom iconset with a code name specific for each icon. To match Weather icon set need a pair of icons


| oW      | wIcons               | description      |
| ------- | -------------------- | ---------------- |
| 01d.png | wi-day-sunny         | clear sky        |
| 02d.png | wi-day-cloudy        | few clouds       |
| 03d.png | wi-cloud             | scattered clouds |
| 04d.png | wi-day-cloudy-windy  | broken clouds    |
| 09d.png | wi-day-storm-showers | shower rain      |
| 10d.png | wi-day-rain          | rain             |
| 11d.png | wi-day-thunderstorm  | thunderstorm     |
| 13d.png | wi-day-snow          | snow             |
| 50d.png | wi-day-fog           | mist             |

```js

switch () {

case(01d): // wi-day-sunny
case(02d): // wi-day-cloudy
case(03d): // wi-cloud
case(04d): // wi-day-cloudy-windy
case(09d): // wi-day-storm-showers
case(10d): // wi-day-rain
case(11d): // wi-day-thunderstorm
case(13d): // wi-day-snow
case(50d): // wi-day-fog

}


```