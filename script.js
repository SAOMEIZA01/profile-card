// Display current time in milliseconds
const timeElement = document.getElementById("time");

function updateTime() {
  timeElement.textContent = Date.now();
}

// Initialize once and optionally update every second
updateTime();
setInterval(updateTime, 1000);
