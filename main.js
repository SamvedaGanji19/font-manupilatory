var difference="";
var leftwrist="";
var rightwrist="";

function setup(){
    video=createCapture(VIDEO);
     video.size(480,480);  
     canvas=createCanvas(500,500);
   canvas.position(600,200);
   poseNet=ml5.poseNet(video,ModelLoaded);
   poseNet.on('pose',gotPoses);
   }

   function draw(){
   background("#7a7676");
   fill('#f26fb5');
   text('Samveda.G',50,400);
   textSize(difference);
   }

   function ModelLoaded(){
   console.log("PoseNet Is Initialized");
   }

   function gotPoses(results){
   if (results.length>0){
       console.log(results);
      leftwrist=results[0].pose.leftWrist.x;
      rightwrist=results[0].pose.rightWrist.x;
    difference=floor(leftwrist-rightwrist);
    }
   }


   