const imagesArray = [
  "images/andrew-umansky-l5truYNKmm8-unsplash.jpg",
  "images/belinda-fewings-73XDjmZQo6Y-unsplash.jpg",
  "images/charlesdeluvio-bYXP-ITv4_s-unsplash.jpg",
  "images/georgy-trofimov-rNTl4AMAPdE-unsplash.jpg",
  "images/charlesdeluvio-pOUA8Xay514-unsplash.jpg",
  "images/hang-niu-Tn8DLxwuDMA-unsplash.jpg",
  "images/harry-grout-_CTpGHp8nGk-unsplash.jpg",
  "images/henley-design-studio-XbZgARqXROc-unsplash.jpg",
  "images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg",
  "images/jamie-haughton-Z05GiksmqYU-unsplash.jpg",
  "images/john-cobb-6QMEh31lUes-unsplash.jpg",
  "images/karsten-winegeart-QcwLDcfLXkk-unsplash.jpg",
  "images/karsten-winegeart-qy0BHykaq0E-unsplash.jpg",
  "images/karsten-winegeart-W9c6YicHKyE-unsplash.jpg",
  "images/jared-rice-O6DUoIl6NWA-unsplash.jpg",
  "images/mahdi-bafande-2HW1I7sMbs8-unsplash.jpg",
  "images/marco-biondi-0apwACX-W2Y-unsplash.jpg",
  "images/nail-gilfanov-M74Pihi2vz8-unsplash.jpg",
  "images/noah-naf-ATnB7EbH86I-unsplash.jpg",
  "images/raoul-droog-Ea8rP2Ebp_4-unsplash.jpg",
  "images/rob-schreckhise-8zdEgWg5JAA-unsplash.jpg",
  "images/roberto-nickson-ey5s8rNHG-c-unsplash.jpg",
  "images/saksham-gangwar-BVWD_zX6-Zk-unsplash.jpg",
  "images/tengyart-3QlPInLcSaY-unsplash.jpg",
  "images/vincent-van-zalinge-4B5F388MLE4-unsplash.jpg"

];

let submitChecker;
let imageCounter = 0;
let savedMemeNumber = 0;
let savedMemeRow = 0;

const presentMeme = {
  image: "images/in-the-making-studio-gx6NxtpgHqY-unsplash.jpg",
  topText: "",
  bottomText: ""
}

function changeImages(){
  imageCounter += 4;
  if (imageCounter >= 23){
    imageCounter = 0;
  }
  document.querySelector("#img1").src = imagesArray[imageCounter];
  document.querySelector("#img2").src = imagesArray[imageCounter + 1];
  document.querySelector("#img3").src = imagesArray[imageCounter + 2];
  document.querySelector("#img4").src = imagesArray[imageCounter + 3];

}

//go to left in provided images
function changeImagesBackwards(){
  imageCounter -= 4;
  if (imageCounter <= 0){
    imageCounter = 21;
  }
  document.querySelector("#img1").src = imagesArray[imageCounter];
  document.querySelector("#img2").src = imagesArray[imageCounter + 1];
  document.querySelector("#img3").src = imagesArray[imageCounter + 2];
  document.querySelector("#img4").src = imagesArray[imageCounter + 3];

}

function chooseImage(imageNum){
  const imagePath = document.querySelector(`${imageNum}`).src;
  presentMeme.image = imagePath;
  document.querySelector("#yourImage").src = `${imagePath}`;

}

const addTextForm = document.querySelector("#addTextForm");
addTextForm.addEventListener("submit", function(event){
  event.preventDefault();

  //Top Text
  const topText = event.target.topTextInput.value;
  const topMemeText = document.querySelector("#topMemeText");
  presentMeme.topText = topText;
  topMemeText.innerHTML = topText;

  // const textEntry1 = querySelector("#topTextInput");
  // textEntry1.value = "";

  //bottom Text
  const bottomText = event.target.bottomTextInput.value;
  const bottomMemeText = document.querySelector("#bottomMemeText");
  presentMeme.bottomText = bottomText;
  bottomMemeText.innerHTML = bottomText;

  if (submitChecker === "sub2"){
    loadSavedMemes(event)
  }
})

//get image from web
const selectImage = document.querySelector("#selectImageForm");
selectImage.addEventListener("submit", function(event){
  event.preventDefault();
  const imageAddress = event.target.outsideSourceTextInput.value;
  presentMeme.address = imageAddress;
  document.querySelector("#yourImage").src = `${imageAddress}`;

})

function loadSavedMemes(event){

  //making a copy of meme
  const presMeme = document.querySelector("#presentImageSubDiv");
  const copyOfPresMeme = presMeme.cloneNode(true);
  copyOfPresMeme.removeChild(copyOfPresMeme.firstElementChild);

  event.target.topTextInput.value = "";
  event.target.bottomTextInput.value = ""

  //changing id names in meme b/c otherwise they would be same as
  //in original and adding adjusted class names

  copyOfPresMeme.id = `copyOfPresMeme${savedMemeNumber}`;

  const child1 = copyOfPresMeme.firstElementChild;
  child1.id = `topMemeDiv${savedMemeNumber}`;
  child1.classList.add("topMemeDivs");
  const child2 = child1.nextElementSibling;
  child2.id = `bottomMemeDiv${savedMemeNumber}`;
  child2.classList.add("bottomMemeDivs");

  const child1a = child1.firstElementChild;
  child1a.id = `topMemeSubDiv${savedMemeNumber}`;
  child1a.classList.add("topMemeSubDivs");
  const child2a = child2.firstElementChild;
  child2a.id = `bottomMemeSubDiv${savedMemeNumber}`;
  child2a.classList.add("bottomMemeSubDivs");

  const child1a1 = child1a.firstElementChild;
  child1a1.id = `topMemeText${savedMemeNumber}`;
  child1a1.classList.add("topMemeTexts");
  child1a1.value = topTextInput;

  const child2a1 = child2a.firstElementChild;
  child2a1.id = `bottomMemeText${savedMemeNumber}`;
  child2a1.classList.add("bottomMemeTexts");
  child2a1.value = bottomTextInput;

  const galleryTableRow  = document.querySelector(".galleryRow");

  let rowItem = document.createElement('td')
  rowItem.appendChild(copyOfPresMeme);
  const deleteMeme = document.createElement("form");
  const deleteButton = document.createElement("input");
  deleteMeme.appendChild(deleteButton);
  deleteButton.type = "submit";

  deleteButton.classList.add("deleteButtons")
  deleteButton.value = "delete meme"


  rowItem.appendChild(deleteMeme);
  galleryTableRow.appendChild(rowItem);
  deleteMeme.onclick = deleteFunc(event);

  savedMemeNumber += 1;

}

//didn't get delete working.
function deleteFunc(event){
  event.preventDefault;
  console.log(event.target);

}

