//UI Class start
class UI {
  constructor(div0, div1, div2, div3, div4, div5, div6, div7, div8, div9) {
        this.div0 = div0;
        this.div1 = div1;
        this.div2 = div2;
        this.div3 = div3;
        this.div4 = div4;
        this.div5 = div5;
        this.div6 = div6;
        this.div7 = div7;
        this.div8 = div8;
        this.div9 = div9;
  }
  
  //***************************************************** */

// Method
setH6Pointers(h60, h61, h62, h63, h64, h65, h66, h67, h68, h69){
  this.h60 = h60;
  this.h61 = h61;
  this.h62 = h62;
  this.h63 = h63;
  this.h64 = h64;
  this.h65 = h65;
  this.h66 = h66;
  this.h67 = h67;
  this.h68 = h68;
  this.h69 = h69;
} // End setH6Pointers

//****************************************************** */

  // Method
  DisplayData(array) {
         //find the div pointer and h6 pointer with bookmark.index
         let index = array[0].index;
         //get pointer obj
         let pointerObj = this.getPointerObject(index);

         //create an h6 element
         let newH6Element = document.createElement("h6");
         //create a text node for h6 based on catName
         var t = document.createTextNode(array[0].catName); 
         //append text node to h6    
         newH6Element.appendChild(t);     
         pointerObj.h6Pointer.appendChild(newH6Element);
     
          //build bookmark div
          array.forEach(bm => {
          // createNewBookMarkDiv(bm.name, bm.address, pointerObj.divPointer);
           this.createNewBookMarkDiv(bm.name, bm.address, pointerObj.divPointer);
          //create a new div for each bookmark
    });
  } // End of DisplayData Method

  //************************************************** */

  //Method 
  createNewBookMarkDiv(name, address, divPointer){
         // This function creates the div and append's it to the div. 
         let newElement = document.createElement("div");
         //add a title with the web address
         newElement.innerHTML = "<div class='myFlexItem'>" + "<a class='shrink' href=\"" + address + " \">"  + name + "</a><div class='spanDiv'><span title='Move Left' class='moveUp'>&lArr;</span><span title='Delete' class='delete-item'>x</span><span title='Move Right' class='moveDown'>&rArr;</span></div>";
         divPointer.appendChild(newElement);
  }

//******************************************** */

//Method
getPointerObject(index){
  
  let h6Pointer;
  let divPointer;
  switch (index) {
    case 0:
            h6Pointer = this.h60;
            divPointer = this.div0;
             
            break;
    case 1:
            h6Pointer = this.h61;
            divPointer = this.div1;
          
            break;
    case 2:
            h6Pointer = this.h62;
            divPointer = this.div2;
              
            break;
    case 3:
            h6Pointer = this.h63;
            divPointer = this.div3;
              
            break;
    case 4:
            h6Pointer = this.h64;
            divPointer = this.div4;
                
            break;
    case 5:
            h6Pointer = this.h65;
            divPointer = this.div5;
                   
            break;
    case 6:
            h6Pointer = this.h66
            divPointer = this.div6;
                      
            break;
    case 7:
            h6Pointer = this.h67;
            divPointer = this.div7;
                         
            break;
    case 8:
            h6Pointer = this.h68;
            divPointer = this.div8;
                            
            break;   
    case 9:
            h6Pointer = this.h69;
            divPointer = this.div9;
                               
            break;                  
    default:
      console.log('Sorry, no pointer found');
  }

  return {h6Pointer: h6Pointer, divPointer: divPointer};
} // End getPointerObject

//******************************************************* */
//method
displayTabsHtml(array, dropDownPointer){
  let output;
  
  array.forEach((item, index) => {
  output+=`<option value="${index}">${item.name}</option>`;
  });

  dropDownPointer.innerHTML = output;
}// End displayTabsHtml

//********************************************************************* */
// Method
showAlert(message, className) {
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('#myBody');
        // Get form
        const h60 = document.querySelector('#h60');
        // Insert alert
        container.insertBefore(div, h60);
    
        // Timeout after 3 sec
        setTimeout(function(){
          document.querySelector('.alert').remove();
        }, 4000);
      }

}// End Bookmark class 