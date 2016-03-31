var slideshowViewport = document.getElemetByID("image");

var imageArrayHome = [];
var imageArrayBand = [];
var imageArrayChorus = [];
var imageArrayTheater = [];
var imageArrayMusic = [];

var imageIndex = 0;

function changeImage() {
  slideshowViewport.setAttribute("src", imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex >= imageArrayHome.length) {
    imageIndex = 0;
  }
};

var interval = setInterval(changeImage, 3000);
