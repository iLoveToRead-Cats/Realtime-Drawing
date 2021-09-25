nose_x="";
nose_y="";
left_wrist_x="";
right_wrist_x="";
difference="";
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(30, 100);

    canvas=createCanvas(560, 480);
    canvas.position(630, 120);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        left_wrist_x=results[0].pose.leftWrist.x;
        right_wrist_x=results[0].pose.rightWrist.x;
        difference=floor(left_wrist_x-right_wrist_x);
        
        console.log("Nose X:"+nose_x+", Nose Y:"+ nose_y+", Left Wrist X:"+left_wrist_x+", Right Wrist X:"+right_wrist_x);
    }
}

function draw() {
    background('#c2f8ff');
    document.getElementById("square_size").innerHTML="Width and Length of Square now is " + difference +"px";
    fill("#13003d");
    stroke("#13003d");
    square(nose_x, nose_y, difference);
}