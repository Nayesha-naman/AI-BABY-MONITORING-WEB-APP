 status="";
 
  object=[];//ARRAY
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
     object_detector=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML=" Status : detecting baby ";
}

function draw() {
    image(video,0,0,400,400)
    if (status!="") {
        r=random(255);
        g=random(255);
        b=random(255);
       object_detector.detect(video,gotResult);
        for(i=0;  i<object.length;  i++){
            document.getElementById("status").innerHTML=" status : object detected ";
            document.getElementById("number_of_objects").innerHTML=" Number of objects detected are : "+object.length;
        fill(r,g,b);
            
            percent=floor(object[i].confidence*100); 
            text(object[i].label+"  "+percent+ "%",object[i].x,object[i].y);
            noFill()
            stroke(252, 44, 3)
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
             
            
            }
        
          
    }
    }


function preload() {
 dog_image=loadImage("dog_cat.jpg");   
}

function modelLoaded(){
console.log(" model has been loaded ");
status=true;                                            
object_detector.detect(dog_image,gotResult)
}

function gotResult(error,result) {
    if (error) {
        console.log(error);   
    }
    else{
        console.log(result);
        object=result;
    }
  
    
}