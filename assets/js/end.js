// Declare Variables related to the Canvas element inside seeyoulater.html page and set its context to 2d
let smileFace = document.getElementById("smile-face");
let theContext = smileFace.getContext("2d");

// Main face design - Full Circle
theContext.beginPath();
theContext.fillStyle = "#41ead4";
theContext.arc(smileFace.width / 2, smileFace.height / 2, 80, 0, Math.PI * 2);
theContext.fill();

// The Mouth inside the face - Half Circle
theContext.beginPath();
theContext.fillStyle = "#FFFFFF";
theContext.arc(smileFace.width / 2, smileFace.height / 2 + 10, 60, 0, Math.PI);
theContext.fill();

// The Right Eye - Full Circle
theContext.beginPath();
theContext.fillStyle = "#FFFFFF";
theContext.arc(
  smileFace.width / 2 + 35,
  smileFace.height / 2 - 35,
  12,
  0,
  Math.PI * 2
);
theContext.fill();

// Pupil inside the Right Eye - Full Circle
theContext.beginPath();
theContext.fillStyle = "#41ead4";
theContext.arc(
  smileFace.width / 2 + 35,
  smileFace.height / 2 - 35,
  3,
  0,
  Math.PI * 2
);
theContext.fill();

// The Left Eye - Full Circle
theContext.beginPath();
theContext.fillStyle = "#FFFFFF";
theContext.arc(
  smileFace.width / 2 - 35,
  smileFace.height / 2 - 35,
  12,
  0,
  Math.PI * 2
);
theContext.fill();

// Pupil inside the Left Eye - Full Circle
theContext.beginPath();
theContext.fillStyle = "#41ead4";
theContext.arc(
  smileFace.width / 2 - 35,
  smileFace.height / 2 - 35,
  3,
  0,
  Math.PI * 2
);
theContext.fill();

// The Nose inside the face - Simple Small Line
theContext.beginPath();
theContext.moveTo(smileFace.width / 2, smileFace.height / 2);
theContext.lineTo(smileFace.width / 2, smileFace.height / 2 - 15);
theContext.strokeStyle = "#FFFFFF";
theContext.lineWidth = 3;
theContext.stroke();

// I set all the methods for (x,y) values dynamically due to media rules in the CSS file reducing the width and height of the main canvas.
