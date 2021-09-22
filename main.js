function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(30, 100);

    canvas=createCanvas(560, 500);
    canvas.position(630, 100);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}

function draw() {
    background('#dba6ff');
}