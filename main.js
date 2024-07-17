// Get Slider Items | Array.form [ES6 Feature]
let sliderImage = Array.from(
  document.querySelectorAll(".slider-container img")
);
// Get Number Of Slides
let slidesCount = sliderImage.length;

// Set Current Slide
let currentSlide = 1;

// Slide Number Element
let slideNumberElement = document.getElementById("slide-number");

// Previous and Next Buttons
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

// Handle Click on Previous and Next Buttons
nextButton.onclick = next;
prevButton.onclick = prev;

// Create The Main UL Element
let paginationElement = document.createElement("ul");

// Set ID On Created Ul Element
paginationElement.setAttribute("id", "pagination-ul");

for (let i = 1; i <= slidesCount; i++) {
  // Create The LI
  var paginationItem = document.createElement("li");
  // Set Custom Attribute
  paginationItem.setAttribute("data-index", i);
  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));
  // Append Items to The Main Ul List
  paginationElement.appendChild(paginationItem);
}
// Add The Created UL Element to The Page
document.getElementById("indicators").appendChild(paginationElement);

// Get The New Created UL
let paginationGetElement = document.getElementById("pagination-ul");
let paginationLi = Array.from(document.querySelectorAll("#pagination-ul li"));


theChecker();

for (let i = 0; i < slidesCount; i++) {
  paginationLi[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute('data-index'));
    theChecker();
  }
}

function next(){
  if(nextButton.classList.contains('disabled')){
    return false;
  }else{
    currentSlide++;
    theChecker();
  }
}

function prev(){
  if(prevButton.classList.contains('disabled')){
    return false;
  }else{
    currentSlide--;
    theChecker();
  }
}

function theChecker() {

  slideNumberElement.textContent = "Slider #" + currentSlide + " of " + slidesCount;

  removeAllActive();

  sliderImage[currentSlide - 1].classList.add("active");
  paginationGetElement.children[currentSlide - 1].classList.add("active");

  if(currentSlide == 1){
    prevButton.classList.add('disabled')
  }else{
    prevButton.classList.remove('disabled')
  }

  if(currentSlide == slidesCount){
    nextButton.classList.add('disabled')
  }else{
    nextButton.classList.remove('disabled')
  }
}

function removeAllActive() {

  sliderImage.forEach(function(img){
    img.classList.remove("active");
  })

  paginationLi.forEach(function(el){
    el.classList.remove("active");
  })
}
