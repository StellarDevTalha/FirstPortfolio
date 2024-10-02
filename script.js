// script.js
function dynamicGreeting() {
    const hour = new Date().getHours();
    let greeting;
  
    if (hour < 12) {
      greeting = "Good Morning";
    } else if (hour < 18) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Evening";
    }
  
    document.getElementById("greeting").innerHTML = `${greeting}, Welcome to Alamz.com`;
  }
  