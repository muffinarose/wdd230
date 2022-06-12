// Hamburger Menu Toggle
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamButton").classList.toggle("open");
  document.getElementById("main-nav").classList.toggle("open");
}

const x = document.getElementById("hamButton");
x.onclick = toggleMenu;

// Day of the Week
function isMondayTuesday() {
  if (new Date().getDay() == 1 || new Date().getDay() == 2) {
    return true;
  } else {
    return false;
  }
}
//full Date

let date = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayOfWeek = days[date.getDay()];

let dayOfMonth = [date.getDate()];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[date.getMonth()];

let year = [date.getFullYear()];

document.getElementById("header-date").innerHTML =
  dayOfWeek + ", " + dayOfMonth + " " + month + " " + year;

//year
const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.innerHTML = new Date().getFullYear();

//Last Modified
let modified = document.getElementById("modified");
modified.innerHTML = new Date(document.lastModified);

//Mon Tues Banner
if (isMondayTuesday()) {
  document.getElementById("mon-tues-banner").style.display = "block";
}
//troubleshooting tests:

// monTuesBanner.innerHTML = "This is a test";
// alert(isMondayTuesday());
