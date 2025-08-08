const temperatureField = document.querySelector(".temp p");
const locationField = document.querySelector(".time_location p:first-child");
const dateandTimeField = document.querySelector(".time_location p:last-child");
const weatherField = document.querySelector(".condition p");
const form = document.querySelector("form");
const searchField = document.querySelector(".search_area");

form.addEventListener('submit', searchForLocation);
let target = 'Mumbai';

const fetchResult = async (targetLocation) => {
  let url = 'url as u wish'

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;

    updateDetails(temp, locationName, time, condition);
  };

function updateDetails(temp, locationName, time, condition) {
  let [dateStr, timeStr] = time.split(" ");

  let currentDay = getDayName(new Date(dateStr).getDay());

  temperatureField.innerText = `${temp}°C`;
  locationField.innerText = locationName;
  dateandTimeField.innerText = `${timeStr} ${currentDay.toUpperCase()} ${dateStr}`;
  weatherField.innerText = condition;
}

function searchForLocation(e) {
  e.preventDefault();
  target = searchField.value.trim();
  fetchResult(target);
}

function getDayName(number) {
  switch (number) {
    case 0: return "Sunday";
    case 1: return "Monday";
    case 2: return "Tuesday"; 
    case 3: return "Wednesday";
    case 4: return "Thursday"; 
    case 5: return "Friday";
    case 6: return "Saturday";
    default: return "";        
  }
}