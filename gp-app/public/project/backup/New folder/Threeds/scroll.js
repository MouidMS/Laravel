let direction;
function timedCount() {
    postMessage(direction.data);
  setTimeout(`timedCount()`,10);
}


onmessage = function(dir) {
    direction = dir;
    timedCount();
};