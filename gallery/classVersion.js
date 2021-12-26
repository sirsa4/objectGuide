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

  class Gallery {
      constructor(element){
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
  
  //bind functions
  //method to show image when clicked on
  /* this.show = this.showImage.bind(this); */
  //close btn bind function
  this.closeButton = this.closeModal.bind(this);
  //next button bind function
  this.nextButton = this.nextImage.bind(this);
  //prev button bind function
  this.prevButton = this.prevImage.bind(this);
  //click on image
  this.clickImage = this.clickImage.bind(this);

  //eventListeners for container
this.container.addEventListener('click', function(e){
    if(e.target.classList.contains('img')){
  
      this.showImage(e.target, this.list);
      this.closeBtn.addEventListener('click', this.closeButton);
      this.nextBtn.addEventListener('click', this.nextButton);
      this.prevBtn.addEventListener('click', this.prevButton);
    }
  }.bind(this));
  
  
      }

      //methods from prototype

      //open modal method. modal gets classname 'open' added to parent div for modal. So main image will show
      showImage(selectedImage, list){
        this.setMainShownImage(selectedImage);
  

        //modal images map iterating through all modal images
        this.modalImages.innerHTML = list.map(function(image){
          console.log(image);
      
          //return here: if selectedImage is same as image in iteration, then class names will be 'modal-image selected' so small image corresponding to the big one will have 'selected' class from css, giving the small higher opacity so it looks different from rest of small images. 
          return `<img src="${image.src}" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img' }"/>`;
        }).join('');
        //new class name is added to show modal
        this.modal.classList.add('open');
        this.modalImages.addEventListener('click', this.clickImage);

      }


      //set main image
      setMainShownImage(selectedImage){
         //main image source is changed to src of whichever image is clicked on
        this.modalImg.src = selectedImage.src;

        //image name, descrip text under image is changed to title of clicked image too
        this.imageName.textContent = selectedImage.title;
      }

      //close button. closing modal
      closeModal(){
           //class name 'open' is removed
            this.modal.classList.remove('open');

            //events are removed
            this.closeBtn.removeEventListener('click', this.closeButton)
            this.nextBtn.removeEventListener('click', this.nextButton);
            this.prevBtn.removeEventListener('click', this.prevButton);
            this.modalImages.removeEventListener('click', this.clickImage);
      }

      //next image button. using selected small image to change to next in both main image and small selected
      nextImage(){
          //create variable for selected image
            const selected = this.modalImages.querySelector('.selected');

            //variable next would next sibling element of selected image or for image in array map if last image is selected.
            const next = selected.nextElementSibling || this.modalImages.firstElementChild;

            //here 'selected' is flipped. variable selected loses the class name and variable next gains class name, this makes new selected image the main image aswell.
            selected.classList.remove('selected');
            next.classList.add('selected');

            //main image function is run with varible next as parameter. This changes new selected image to be the main image in modal.
            this.setMainShownImage(next);
      }

      //preview button function. works similr to next button
      prevImage(){
         //selected variable
        const selected = this.modalImages.querySelector('.selected');
        const prev = selected.previousElementSibling || this.modalImages.lastElementChild;
        selected.classList.remove('selected');
        prev.classList.add('selected');
        this.setMainShownImage(prev);
      }

      //select main image by clicking on modal images. Works similr to next and previous button functions
      clickImage(e){
        if(e.target.classList.contains('modal-img')){
            const selected = this.modalImages.querySelector('.selected');
            selected.classList.remove('selected');
            e.target.classList.add('selected');
            this.setMainShownImage(e.target);
          }
      }

  }

  //nature section instance
const nature = new Gallery(getElement('.nature'));

//city section instance
const city = new Gallery(getElement('.city'));