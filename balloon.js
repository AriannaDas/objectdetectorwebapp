statuss = ""
results = []

function preload() {

}

function setup() {
    canvas = createCanvas(640,460);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects"
}

function draw() {
    if(statuss != "")
        {
            objectDetector.detect(video, gotResult);
            for (i = 0; i < objects.length; i++) {
                fill("#FF0000");
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
                noFill();
                stroke("FF0000");
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
                document.getElementById("objects_detected_outof_allobjects").innerHTML = "There are 5 objects in the image where the cocossd model has detected " + objects.length + "objects"
            }
        }
}

function modelLoaded() {
    console.log("Model Loaded!");
    sstatus = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResult(error, results) {
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}