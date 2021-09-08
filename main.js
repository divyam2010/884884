Webcam.set({
    wideth:350,
    Height:300,
    image_formate:'png',
    png_quality: 90
});
camera=document.getElementById('camera');
webcam.attach('#camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8OYVdnEQb/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }