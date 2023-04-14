// Object Activity 1
// Below is an object called currentWeather
const currentWeather = {
  weather: "Rain",
  temp: 50,
  sky: "Overcast",
  details: ["Moderate Rain", 45, "Not Severe"]
};

console.log(`The temp is ${currentWeather.temp}, the weather is ${currentWeather.weather}, the sky is ${currentWeather.sky}`);

// Object Activity 2
// Accessing the details key, Print another string that references each of the properties contained within details
console.log(`The temp is ${currentWeather.details[1]}, the weather is ${currentWeather.details[0]}, the sky is ${currentWeather.details[2]}`)
