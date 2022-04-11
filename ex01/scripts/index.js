
//running
var modal_running = document.getElementById("modal_running");
var img_running = document.getElementById("running");
var span_running = document.getElementsByClassName("close_running")[0];
img_running.onclick = function() {
  modal_running.style.display = "block";
}
span_running.onclick = function() {
  modal_running.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal_running) {
    modal_running.style.display = "none";
  }
}


//basketball
var modal_basketball = document.getElementById("modal_basketball");
var img_basketball = document.getElementById("basketball");
var span_basketball = document.getElementsByClassName("close_basketball")[0];
img_basketball.onclick = function() {
  modal_basketball.style.display = "block";
}
span_basketball.onclick = function() {
  modal_basketball.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal_basketball) {
    modal_basketball.style.display = "none";
  }
}


//marathon
var modal_marathon = document.getElementById("modal_marathon");
var img_marathon = document.getElementById("marathon");
var span_marathon = document.getElementsByClassName("close_marathon")[0];
img_marathon.onclick = function() {
  modal_marathon.style.display = "block";
}
span_marathon.onclick = function() {
  modal_marathon.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal_marathon) {
    modal_marathon.style.display = "none";
  }
}


//WeightLifft
var modal_weightLift = document.getElementById("modal_weightLift");
var img_weightLift = document.getElementById("weightLift");
var span_weightLift = document.getElementsByClassName("close_weightLift")[0];
img_weightLift.onclick = function() {
  modal_weightLift.style.display = "block";
}
span_weightLift.onclick = function() {
  modal_weightLift.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal_weightLift) {
    modal_weightLift.style.display = "none";
  }
}



//gymnstics
var modal_gymnastics = document.getElementById("modal_gymnastics");
var img_gymnastics = document.getElementById("gymnastics");
var span_gymnastics = document.getElementsByClassName("close_gymnastics")[0];
img_gymnastics.onclick = function() {
  modal_gymnastics.style.display = "block";
}
span_gymnastics.onclick = function() {
  modal_gymnastics.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal_gymnastics) {
    modal_gymnastics.style.display = "none";
  }
}



//climbing
var modal_climbing = document.getElementById("modal_climbing");
var img_climbing = document.getElementById("climbing");
var span_climbing = document.getElementsByClassName("close_climbing")[0];
img_climbing.onclick = function() {
  modal_climbing.style.display = "block";
}
span_climbing.onclick = function() {
  modal_climbing.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal_climbing) {
    modal_climbing.style.display = "none";
  }
}

//swimming
var modal_swimming = document.getElementById("modal_swimming");
var img_swimming = document.getElementById("swimming");
var span_swimming = document.getElementsByClassName("close_swimming")[0];
img_swimming.onclick = function() {
  modal_swimming.style.display = "block";
}
span_swimming.onclick = function() {
  modal_swimming.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal_swimming) {
    modal_climbing.style.display = "none";
  }
}


//cycling
var modal_cycling = document.getElementById("modal_cycling");
var img_cycling = document.getElementById("cycling");
var span_cycling = document.getElementsByClassName("close_cycling")[0];
img_cycling.onclick = function() {
  modal_cycling.style.display = "block";
}
span_cycling.onclick = function() {
  modal_cycling.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal_cycling) {
    modal_climbing.style.display = "none";
  }
}

//skiing
var modal_skiing = document.getElementById("modal_skiing");
var img_skiing = document.getElementById("skiing");
var span_skiing = document.getElementsByClassName("close_skiing")[0];
img_skiing.onclick = function() {
  modal_skiing.style.display = "block";
}
span_skiing.onclick = function() {
  modal_skiing.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal_cycling) {
    modal_climbing.style.display = "none";
  }
}



//jogging
var modal_jogging = document.getElementById("modal_jogging");
var img_jogging = document.getElementById("jogging");
var span_jogging = document.getElementsByClassName("close_jogging")[0];
img_jogging.onclick = function() {
  modal_jogging.style.display = "block";
}
span_jogging.onclick = function() {
  modal_jogging.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal_cycling) {
    modal_climbing.style.display = "none";
  }
}



