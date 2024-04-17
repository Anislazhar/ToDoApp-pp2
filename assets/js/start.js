// Declare variables and set their values from elements inside index.html
let startBtn = document.getElementById("start-btn");
let closeBtn = document.getElementById("close-btn");

// Add event listener for "load" event to auto-focus on the start button after page fully loads
window.addEventListener("load", function () {
  startBtn.focus();
});

// Add event listener for "click" event to open the next app page when start button is clicked
startBtn.addEventListener("click", function () {
  window.open("todolistpage.html", "_self");
});

// Add event listener for "click" event to close the window app when close button is clicked
closeBtn.addEventListener("click", function () {
  window.open("seeyoulater.html", "_self");
  window.close();
  /* Note: The behavior of the close() method varies among browsers. For instance, in MS-Edge and Firefox, 
       the close() method will close the window of the app. However, in Chrome locally on my device the behavior 
       is similar to MS-Edge, but on Live link it will open the page through window.open() and window.close() 
       it will not close the window. */
});
