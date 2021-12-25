//selecting elements

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

}
/* Gallery.prototype.show = function() {
  this.modal.classList.add('.open');
} */
//nature section instance
const nature = new Gallery(getElement('.nature'));

//city section instance
const city = new Gallery(getElement('.city'));