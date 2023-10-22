let hour = new Date().getHours();
let greeting;

if (hour < 5) {
  greeting = "Hello..!🖐";
} else if (hour < 12) {
  greeting = "Good Morning..!☕";
} else if (hour < 16) {
  greeting = "Good Afternoon..!😃";
} else if (hour < 20) {
  greeting = "Good Evening..!🌙";
} else {
  greeting = "Hello..!🖐";
}
window.alert(greeting + " Welcome to Chirag's Portfolio..❤")