//close modal button

//helper function
function getElement(selection){
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

//gallery constructor. selecting only element
function Gallery(element){
  //section stored in this'container' properperty as element is the section with: nature/city className
  this.container = element;
console.log(element);
//select images in each section as array with E6s sytax, spread-operator
this.list = [...element.querySelectorAll('.img')];
/* console.log(this.list); */

//select the modal div.
this.modal = getElement('.modal');
console.log(this.modal);

//modal shown image
this.modalImg = getElement('.main-img');
console.log(this.modalImg);

//image name, header-tag
this.imageName = getElement('.image-name');

//modal small images below the big picture
this.modalImages = getElement('.modal-images');
/* console.log(this.modalImages); */

//select buttons
this.closeBtn = getElement('.close-btn');
this.nextBtn = getElement('.next-btn');
this.prevBtn = getElement('.prev-btn');

//bind function
//method to show image when clicked on
/* this.show = this.showImage.bind(this); */
this.closeButton = this.closeModal.bind(this);

//eventListeners for container
this.container.addEventListener('click', function(e){
  if(e.target.classList.contains('img')){

    this.showImage(e.target, this.list);
    this.closeBtn.addEventListener('click', this.closeButton);
  }
}.bind(this));
}

//open modal method. modal gets classname 'open' added to parent div for modal. So main image will show
Gallery.prototype.showImage = function(selectedImage, list) {
  console.log(selectedImage, list);
  console.log('Open The Modal');
  this.setMainShownImage(selectedImage);

  //modal images map iterating through all modal images
  this.modalImages.innerHTML = list.map(function(image){
    console.log(image);

    //return here: if selectedImage is same as image in iteration, then class names will be 'modal-image selected' so small image corresponding to the big one will have 'selected' class from css, giving the small higher opacity so it looks different from rest of small images. 
    return `<img src="${image.src}" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img' }"/>`;
  }).join('');
  //new class name is added to show modal
  this.modal.classList.add('open');

}

//main image prototype method
Gallery.prototype.setMainShownImage = function(selectedImage){
  //main image source is changed to src of whichever image is clicked on
this.modalImg.src = selectedImage.src;

//image name, descrip text under image is changed to title of clicked image too
this.imageName.textContent = selectedImage.title;
}

//close button. closing modal
Gallery.prototype.closeModal = function(){
  //class name 'open' is removed
  this.modal.classList.remove('open');

  //event is removed
  this.closeBtn.removeEventListener('click', this.closeButton)
}

//nature section instance
const nature = new Gallery(getElement('.nature'));

//city section instance
const city = new Gallery(getElement('.city'));