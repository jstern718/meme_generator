const imagesArray = [
  "images/andrew-umansky-l5truYNKmm8-unsplash.jpg",
  "images/belinda-fewings-73XDjmZQo6Y-unsplash.jpg",
  "images/charlesdeluvio-bYXP-ITv4_s-unsplash.jpg",
  "images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg",
  "images/charlesdeluvio-pOUA8Xay514-unsplash.jpg",
  "images/georgy-trofimov-rNTl4AMAPdE-unsplash.jpg",
  "images/hang-niu-Tn8DLxwuDMA-unsplash.jpg",
  "images/harry-grout-_CTpGHp8nGk-unsplash.jpg",
  "images/henley-design-studio-XbZgARqXROc-unsplash.jpg",
  "images/jamie-haughton-Z05GiksmqYU-unsplash.jpg",
  "images/jared-rice-O6DUoIl6NWA-unsplash.jpg",
  "images/john-cobb-6QMEh31lUes-unsplash.jpg",
  "images/karsten-winegeart-QcwLDcfLXkk-unsplash.jpg",
  "images/karsten-winegeart-qy0BHykaq0E-unsplash.jpg",
  "images/karsten-winegeart-W9c6YicHKyE-unsplash.jpg",
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

let imageCounter = 0;


function imageLoad(){
  document.querySelector("#img1").src = "images/andrew-umansky-l5truYNKmm8-unsplash.jpg";
  console.log("test");
}

function changeImages(){
  document.querySelector("#img1").src = imagesArray[imageCounter];
  document.querySelector("#img2").src = imagesArray[imageCounter + 1];
  document.querySelector("#img3").src = imagesArray[imageCounter + 2];
  document.querySelector("#img4").src = imagesArray[imageCounter + 3];
  imageCounter += 4;
}

function chooseImage(imageNum){
  console.log("clicked");
  const imagePath = document.querySelector(`${imageNum}`).src;
  console.log(imagePath);
  document.querySelector("#yourImage").src = `${imagePath}`;

}

function submitForm(){

}

// const image1 = getElementByID("img1");
// const image2 = getElementByID("img2");
// const image3 = getElementByID("img3");
// const image4 = getElementByID("img4");
// console.log(image1);
// Document.addEventListener("click", (event) => imageFunc());