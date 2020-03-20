
<div>Teachable Machine Image Model - p5.js and ml5.js</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js"></script>
<script src="https://unpkg.com/ml5@0.4.3/dist/ml5.min.js"></script>
<script type="text/javascript">
  
  let classifier;

  let imageModelURL = 'https://teachablemachine.withgoogle.com/models/lWiOtjZ6h/';
  
  
  let video;
  let flippedVideo;
  
  let label = "";

  
  function preload() {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  }

  function setup() {
    createCanvas(320, 260);
  
    video = createCapture(VIDEO);
    video.size(320, 240);
    video.hide();

    flippedVideo = ml5.flipImage(video);
    
    classifyVideo();
  }

  function draw() {
    background(0);
   
    image(flippedVideo, 0, 0);

    
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 4);
  }

  
  function classifyVideo() {
    flippedVideo = ml5.flipImage(video)
    classifier.classify(flippedVideo, gotResult);
    flippedVideo.remove();

  }

 
  function gotResult(error, results) {
   
    if (error) {
      console.error(error);
      return;
    }
   
    label = results[0].label;
    
    classifyVideo();
  }
</script>
