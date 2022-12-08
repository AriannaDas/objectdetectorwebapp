function preload() {

}

function setup() {
    canvas = createCanvas(640,460);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects"
}

function getResults() {
    
}