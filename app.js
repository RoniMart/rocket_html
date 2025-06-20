const rocket = document.getElementById("allrocket");
const rocket_fire1 = document.getElementById("rocket_fire");



 function start() {
    rocket_fire.style.display = "block";
  }

  function end() {
    rocket_fire.style.display = "none";
}

function up() {
    allrocket.style.transition = "1s";
    allrocket.style.marginTop = "-10000px";
}
function down() {
    allrocket.style.transition = "2s";
    allrocket.style.marginTop = 0;
}