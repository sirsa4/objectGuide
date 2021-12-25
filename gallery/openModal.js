//open model without addition functionality

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

//modal small images below the big picture
this.modalImages = getElement('.modal-images');
/* console.log(this.modalImages); */

//select buttons
this.closeBtn = getElement('.close-btn');
this.nextBtn = getElement('.next-btn');
this.prevBtn = getElement('.prev-btn');

//bind function
//method to show image when clicked on
this.show = this.showImage.bind(this);

//eventListeners for container
this.container.addEventListener('click', function(e){
  this.showImage();
}.bind(this));
}

//open modal method. modal gets classname 'open' added to parent div for modal. So main image will show
Gallery.prototype.showImage = function() {
  console.log(this);
  console.log('Open The Modal');

  //new class name is added to show modal
  this.modal.classList.add('open');
}
//nature section instance
const nature = new Gallery(getElement('.nature'));

//city section instance
const city = new Gallery(getElement('.city'));