// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");

var deg = 0;
const finaleDate = new Date("February 17, 2021 00:00:00").getTime();

const timer = () => {
  const now = new Date().getTime();

  let diff = finaleDate - now;
  if (diff <= 0) {
    day.textContent = "00";
    hour.textContent = "00";
    minute.textContent = "00";
    second.textContent = "00";
  } else {
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    day.textContent = days;
    hour.textContent = hours;
    minute.textContent = minutes;
    second.textContent = seconds;

    deg = deg + 1;
    if (deg > 10) {
      deg = 0;
    }
    console.log("deg: " + deg);
    tick.style.transform = `rotateZ(${-deg}deg)`;
  }
};
timer();
setInterval(timer, 1000);

// Inject the time in the UI
// var renderTime = function() {
//   const date = new Date();

//   const options1 = {
//     timeZone: "America/New_York",
//     day: "numeric"
//   };
//   const days = date.toLocaleString("en-US", options1);
//   day.textContent = days;
//   // console.log("day: " + days);

//   const options2 = {
//     timeZone: "America/New_York",
//     hour12: false,
//     hour: "numeric"
//   };
//   const hours = date.toLocaleString("en-US", options2);
//   hour.textContent = hours;
//   // console.log("hour: " + hours);

//   const options3 = {
//     timeZone: "America/New_York",
//     minute: "numeric"
//   };
//   const minutes = date.toLocaleString("en-US", options3);
//   minute.textContent = minutes;
//   // console.log("minute: " + minutes);

//   const options4 = {
//     timeZone: "America/New_York",
//     second: "numeric"
//   };
//   const seconds = date.toLocaleString("en-US", options4);
//   second.textContent = seconds;
//   // console.log("second: " + seconds);
// };

// Render the time on load
// renderTime();
// // Update the time every second
// setInterval(renderTime, 1000);