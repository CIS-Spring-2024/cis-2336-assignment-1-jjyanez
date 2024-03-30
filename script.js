function returnMessage() {
    alert("Thanks for your questions! I'll get back to you soon!");
}

//week 9 demo code:
class beachVaca {               //create a class
    //use the constructor to create and initialize objects that are created with the class.
    constructor(vacations) {
        this.vacations = vacations;
      }
    // add methods to the class which is generate HTML markup to display the images.  
    displayBeachImages() {
      const section = document.getElementById(`beach-images`); //select a section (div here) where the image will be displayed.
      this.vacations.forEach(vacation => { //go through each image source in the images array.
        const img = document.createElement('img'); //inside loop, create img element,
        img.src = vacation.src; //set image source.
        img.style.width = '200px'; // Set image width as needed
        img.style.margin = '10px';  // Add some space around images
        section.appendChild(img); //append to section.
      });
    }
  }
  
  // after class is decleared. We need to creat an instance of beachVace class by using new keyword.
const beachVacation = new beachVaca([
  { destination: 'Key West', year: 2024, src: 'images/beach1.jpg' },
  { destination: 'Hawaii', year: 2019, src: 'images/beach2.jpg' },
  { destination: 'Galveston', year: 2022, src: 'images/beach3.jpg' }
]);
console.log(beachVacation.vacations); //print out the array.
  
// Display images for the beach vacation when the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
  beachVacation.displayBeachImages();  //call displayBeachImages on the instance.  
});

//--------after-class practices 
// 1. sort vacations.
beachVacation.vacations.sort((a,b)=>a.year<b.year?-1:1); 

// 2. use the same logic to display 3 images for Mountain vacation?

  