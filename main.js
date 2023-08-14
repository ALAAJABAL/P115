function setup()
{
   canvas = createCanvas(300, 300);
   canvas.center();

   video = createCapture(VIDEO);
   video.hide();

   model = ml5.poseNet(video, modelLoaded);
   model.on("pose", showResult);
}

function modelLoaded()
{
  console.log("Model has been linked");
}

noseX = 0;
noseY = 0;

function showResult(result)
{
  console.log(result);
  noseX = result[0].pose.nose.x;
  noseY = result[0].pose.nose.y;

}

//circle(x , y, size);
function draw(){
  image(video, 0, 0, 300, 300);
  
  stroke("red");
  fill("red");
  circle(noseX - 180 , noseY - 80 , 30);
}