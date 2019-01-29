// Select div pointers
let div0 = document.querySelector('#div0');
let div1 = document.querySelector('#div1');
let div2 = document.querySelector('#div2');
let div3 = document.querySelector('#div3');
let div4 = document.querySelector('#div4');

let div5 = document.querySelector('#div5');
let div6 = document.querySelector('#div6');
let div7 = document.querySelector('#div7');
let div8 = document.querySelector('#div8');
let div9 = document.querySelector('#div9');

// Select h6 pointers

let h60 = document.querySelector('#h60');
let h61 = document.querySelector('#h61');
let h62 = document.querySelector('#h62');
let h63 = document.querySelector('#h63');
let h64 = document.querySelector('#h64');

let h65 = document.querySelector('#h65');
let h66 = document.querySelector('#h66');
let h67 = document.querySelector('#h67');
let h68 = document.querySelector('#h68');
let h69 = document.querySelector('#h69');

// Select Form Item's
let myAddBtn = document.querySelector('#addButton'); 
let myDeleteBtn = document.querySelector('#myDeleteBtn'); 
let nameInput = document.querySelector('#bName'); 
let addressInput = document.querySelector('#bAddress'); 
let typeInput = document.querySelector('#bType'); 
let mySpan = document.querySelectorAll('span');
let myAddTabBtn = document.querySelector('#myAddTabBtn');

//Select audio files
let warningAudio = document.querySelector('#warningAudio');
let deleteAudio= document.querySelector('#deleteAudio');
let warning2Audio = document.querySelector('#warning2Audio');
let addAudio = document.querySelector('#addAudio');
let moveTabAudio = document.querySelector('#moveTabAudio');
let moveUpDownAudio = document.querySelector('#moveUpDownAudio');
// Select Form
let myForm = document.querySelector('#myForm');

// Select myBody div for span event listener
let myBody = document.querySelector('#myBody');

//create global instance of UI
const ui = new UI(div0, div1, div2, div3, div4, div5, div6, div7, div8, div9);
//create global variables
const maxNumber = 10;
const maxIndex = 9;

//The start of program exicution.
window.onload = function() {
  startUp();
  // loadFakeData();
};


//*****************************************


function loadFakeData(){
const storage = new Storage();
//make tabs
let newTab0 = new Tab(0, "HOME");
let newTab1 = new Tab(1, "WEB");
let newTab2 = new Tab(2, "MUSIC");
let newTab3 = new Tab(3, "GUITAR");
let newTab4 = new Tab(4, "KEYBOARD");
let newTab5 = new Tab(5, "TAB6");
let newTab6 = new Tab(6, "TAB7");
let newTab7 = new Tab(7, "TAB8");
let newTab8 = new Tab(8, "TAB9");
let newTab9 = new Tab(9, "TAB10");

let tabStorage = new TabStorage();

//push in tabs
tabStorage.addNewTab(newTab0);
tabStorage.addNewTab(newTab1);
tabStorage.addNewTab(newTab2);
tabStorage.addNewTab(newTab3);
tabStorage.addNewTab(newTab4);
tabStorage.addNewTab(newTab5);
tabStorage.addNewTab(newTab6);
tabStorage.addNewTab(newTab7);
tabStorage.addNewTab(newTab8);
tabStorage.addNewTab(newTab9);

//add bookmarks
  storage.addBookmark(new Bookmark(0, "HOME", "BM100", "https://www.google.com/"));
  storage.addBookmark(new Bookmark(0, "HOME", "BM200", "https://www.google.com/"));

  storage.addBookmark(new Bookmark(1, "WEB", "BM300", "https://www.google.com/"));
  storage.addBookmark(new Bookmark(1, "WEB", "BM400", "https://www.google.com/"));

  storage.addBookmark(new Bookmark(2, "MUSIC", "BM500", "https://www.google.com/"));
  storage.addBookmark(new Bookmark(2, "MUSIC", "BM600", "https://www.google.com/"));

  storage.addBookmark(new Bookmark(3, "GUITAR", "BM700", "https://www.google.com/"));
  storage.addBookmark(new Bookmark(3, "GUITAR", "BM800", "https://www.google.com/"));

  storage.addBookmark(new Bookmark(4, "KEYBOARD", "Bm900", "https://www.google.com/"));
  storage.addBookmark(new Bookmark(4, "KEYBOARD", "BM1000", "https://www.google.com/"));

  storage.addBookmark(new Bookmark(5, "TAB6", "BM1000", "https://www.google.com/"));
  storage.addBookmark(new Bookmark(6, "TAB7", "BM1000", "https://www.google.com/"));
  storage.addBookmark(new Bookmark(7, "TAB8", "BM1000", "https://www.google.com/"));
  storage.addBookmark(new Bookmark(8, "TAB9", "BM1000", "https://www.google.com/"));
  storage.addBookmark(new Bookmark(9, "TAB10", "BM1000", "https://www.google.com/"));
 

  //This must be called to display data after a change, and on start up
  let tabArray = tabStorage.getArrayFromFile();
  //type input points to drop down box
  ui.displayTabsHtml(tabArray, typeInput);
  clearAllDivs();
  storage.sendDataToUi(ui);

  
}

function startUp(){
  ui.setH6Pointers(h60, h61, h62, h63, h64, h65, h66, h67, h68, h69);
  //This must be called to display data after a change, and on statrup
  paintScreen();
}

function clearAllDivs(){
  //This must be called when there are changes made and before you call storage.sendDataToUi(ui)
    div0.innerHTML = '';
    div1.innerHTML = '';
    div2.innerHTML = '';
    div3.innerHTML = '';
    div4.innerHTML = '';
    div5.innerHTML = '';
    div6.innerHTML = '';
    div7.innerHTML = '';
    div8.innerHTML = '';
    div9.innerHTML = '';
    //clear headings
    h60.innerHTML = '';
    h61.innerHTML = '';
    h62.innerHTML = '';
    h63.innerHTML = '';
    h64.innerHTML = '';
    h65.innerHTML = '';
    h66.innerHTML = '';
    h67.innerHTML = '';
    h68.innerHTML = '';
    h69.innerHTML = '';
}

function paintScreen(){
  //This must be called to display data after a change, and on statrup
  let tabStorage = new TabStorage(); 
  let tabArray = tabStorage.getArrayFromFile();
  //type input points to drop down box
  ui.displayTabsHtml(tabArray, typeInput);
  let storage = new Storage();
  clearAllDivs();
  storage.sendDataToUi(ui);
}


function getIndexWithDivId(divId){
  let index;
  switch (divId) {
    
    case 'div0':
              index = 0;
              break;
    case 'div1':
              index = 1;
              break;
    case 'div2':
              index = 2;
              break;
    case 'div3':
              index = 3;
              break;
    case 'div4':
              index = 4;
              break;
    case 'div5':
              index = 5;
              break;
    case 'div6':
              index = 6;
              break; 
    case 'div7':
              index = 7;
              break; 
    case 'div8':
              index = 8;
              break;
    case 'div9':
              index = 9;
              break;                  
    default:
      console.log('Sorry, no index found');
  }

  return index;
}

//***************************************** 
//span  delete event listener
//**************************************** *

myBody.addEventListener('click', function(e){
  
  //look for the span with a class of 'delete-item' 
  if(e.target.classList.contains('delete-item')) {
  // See if the control key is true or false
  let ctrlVar = e.ctrlKey;
  if(!ctrlVar){
    //play sound
    warning2Audio.play();
    // If the control Key is not Held Down return to program
    ui.showAlert('Please hold down the  ctrl Key and click  the red X to delete a bookmark!', 'error');
    // alert('Please hold down the  ctrl Key and click  the red X to delete a bookmark!');
    return;
  }
// get the text to delete from e.target
var textToDelete = e.target.parentElement.parentElement.textContent;
//My span puts an x at the end of the text, the following takes that x off the end, it is now taking three char of the end
textToDelete = textToDelete.substring(0, textToDelete.length - 3);

// Find the targets id to filter out which file to load and save && the div pointer to clear the bookmark div before loading
let divId = e.target.parentElement.parentElement.parentElement.parentElement.id;

// find the index Number with the divID
let index = getIndexWithDivId(divId);
//copy from delete function
if(!confirm("Are You sure you want to delete: " + textToDelete)){
  warning2Audio.play();
  return;
}
//play sound
deleteAudio.play();
// create storage varaible
let storage = new Storage();
let tabStorage = new TabStorage();
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// put in super if statement
// 1: get array and check if array length === 1
//    A: Get tab array, remove tab with index and change tab index's set array to file name
//    B: redisplay tabs
// 2: change all files indexes that are higher than the indexx index -1
// 3: shift all remaining arrays down one file
// 4: redisplay all bookmarks with=> storage.sendDataToUi(ui);
// 5: return

//get array 
let fileName = storage.getFileNameWithIndex(index);
let array = storage.getArrayFromFile(fileName);

// 1: super if statement
if(array.length === 1){
  //delete file
  let storage = new Storage();
  storage.deleteItem(index, textToDelete);
  // storage.removeFileNameLS(fileName);
  //get tab arrray
  let tabArray = tabStorage.getArrayFromFile();

  // remove tab with index
  //delete item
  tabArray.splice(index, 1);
  tabStorage.setArrayToFileName(tabArray);

if(tabArray.length === 0){
  tabStorage.clearFileFromLocalStorage();
}

//%%%%%%%%%%%%%%%%%%%%%%%%%
//the html gets the right index but the tab object needs its index -1
//run through the array of tabs and -1 from index
tabArray = tabStorage.getArrayFromFile();
tabArray.forEach(element => {
  if(element.index > index){
    element.index = element.index -1;
  }
  
});

   tabStorage.setArrayToFileName(tabArray);
   // 2: 
   storage.changeRemaingIndexes(index);

   storage.changeRemainingFilesDownOne(index);
   // 4: redisplay all bookmark
   paintScreen();

}else{
//call storageClass to delete from index file, with textToDelete
storage.deleteItem(index, textToDelete);
 // 4: redisplay all bookmarks
paintScreen();

}
  
    
}


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//look for the span with a class of 'moveUp'
  if(e.target.classList.contains('moveUp')) {
    moveUpDownAudio.play();
// Find the targets id to filter out which file to load and save 
let divId = e.target.parentElement.parentElement.parentElement.parentElement.id;

// find the index Number with the divID
let index = getIndexWithDivId(divId);

//Get the text from the current item
let textToMove = e.target.parentElement.parentElement.textContent;

//take three caharaters of the end for x and arrows
textToMove = textToMove.substring(0, textToMove.length - 3);
// moveUp(e);

//call storageClass to move up the item with an index and text to move
const storage = new Storage();
storage.moveUp(index, textToMove);

//clear all div's and update screen
paintScreen();
  
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  //look for the span with a class of 'moveDown'
  if(e.target.classList.contains('moveDown')) {
    moveUpDownAudio.play();
  // Find the targets id to filter out which file to load 
  let divId = e.target.parentElement.parentElement.parentElement.parentElement.id;
  // find the index Number with the divID
  let index = getIndexWithDivId(divId);

  //Get the text from the current item
  let textToMove = e.target.parentElement.parentElement.textContent;

  //take three caharaters of the end for x and arrows
  textToMove = textToMove.substring(0, textToMove.length - 3);

  //call storageClass to move down the item with an index and text to move
  const storage = new Storage();
  storage.moveDown(index, textToMove);



  //clear all div's and update screen
  paintScreen();

}

});//callback end

//************************************** */
//End span delete event listener
//*************************************** */

// Add new tab event listener
myAddTabBtn.addEventListener('click', (e)=>{
    // Get form information
    // Get input from form
	  let newTabName = nameInput.value.trim().toUpperCase();
    // Check if they entered a name, if not return.
  if(!newTabName){
    //play sound
    warning2Audio.play();
    ui.showAlert('Please enter a name for the new Tab!', 'error');
    // alert("Please enter a name for the new Tab");
    return;
  }
    //get array from storage
    let tabStorage = new TabStorage();

    let array = tabStorage.getArrayFromFile(); 

    //run through array and see if name is take
    //check if name is taken
        for(var i= 0; i<array.length; i++){
          if(array[i].name === newTabName){
            //if you find the name on file, alert and return
            //play sound
            warningAudio.play();
            ui.showAlert('Please pick a new name, that name is taken!', 'error');
            // alert('Please pick a new name, that name is taken!');
            return;
      }   
    }

if(array.length === maxNumber){
  // alert('You have reached the maximuim number of tabs!');
  ui.showAlert('You have reached the maximuim number of tabs!', 'error');
  warning2Audio.play();
  myForm.reset();
  return;
}

    addAudio.play();
        // Show success
        ui.showAlert('New Tab Added!', 'success');
    //set the index for the new tab and create it
    let index = array.length;
    let newTab = new Tab(index, newTabName);
    //push new tab into array
    array.push(newTab);
    //save the array to file
    tabStorage.setArrayToFileName(array);

       // Show loader
       document.getElementById('loading').style.display = 'block';

       // Hide loader after a timeout
       setTimeout(function(){   
       // Hide loader
       document.getElementById('loading').style.display = 'none'; }, 2000);
         
         let testArray = tabStorage.getArrayFromFile();

         //create bookmark for tab
         let storage = new Storage();
         storage.addBookmark(new Bookmark(index, newTabName, "GOOGLE", "https://www.google.com/"));
         myForm.reset();
 
         //This must be called to display data after a change, and on statrup
         paintScreen();
});

//************************************** */
//End myAdd tab.addEventListener
//*************************************** */

// Add new bookmark event listener
myAddBtn.addEventListener('click', (e)=>{
  // Get form information
  let newName = nameInput.value.trim().toUpperCase();
  let newAddress = addressInput.value.trim();
  let newType = typeInput.value.trim().toUpperCase();

 //check if tab array is === 0, if so alert and return
// create tabStorage object
let tabStorage = new TabStorage();
 let testArray = tabStorage.getArrayFromFile();
 if(testArray.length === 0){
  warningAudio.play();
  // alert("Please enter an address for the bookmark!");
  ui.showAlert('Please create a Tab first', 'error');
  return;
 }

  // Check if they entered a name, if not return.
if(!newName){
  warning2Audio.play();
  // alert("Please enter a name for the bookmark!");
  ui.showAlert('Please enter a name for the bookmark!', 'error');
  return;
}
  // Check if they entered an address, if not return.
if(!newAddress){
  warningAudio.play();
  // alert("Please enter an address for the bookmark!");
  ui.showAlert('Please enter an address for the bookmark!', 'error');
  return;
}


  // Show loader
  addAudio.play();
  document.getElementById('loading').style.display = 'block';

  // Hide loader after a timeout
  setTimeout(function(){   
  // Hide loader
  document.getElementById('loading').style.display = 'none'; }, 2000);

  let index = Number(newType);



// get the tab name for the new bookmark
let tabName = tabStorage.getTabNameWithIndex(index);

//create storage object
let storage = new Storage();
// add new bookmark
// storage.addBookmark(new Bookmark(index, tabName, newName, newAddress));
//***************************************************************** */
// create bookmark
let newBookmark = new Bookmark(index, tabName, newName, newAddress);
    // get fileName with index
    let fileName = storage.getFileNameWithIndex(index);
    
    // get array and push bookmark in array
    let array = storage.getArrayFromFile(fileName);

    //check array for duplicate names, check if name is taken
       for(var i= 0; i<array.length; i++){
        if(array[i].name === newName){
            //if you find the name on file, alert and return
            warningAudio.play();
            ui.showAlert('Please enter a new name, that name is taken!', 'error');
            // alert('Please pick a new name, that name is taken!');
            return;
    }   
  }

    //push bookmark to array
     array.push(newBookmark);
    // set array to file
    storage.setArrayToFileName(array, fileName);

//************************************************************** */
// alert
ui.showAlert('New Bookmark Added!', 'success');
// reset the form
myForm.reset();
    //This must be called to display data after a change, and on statrup
paintScreen();
});

//************************************** */
//End myAddBtn.addEventListener
//*************************************** */


// heading add event listeners
// h61span
document.querySelector('#h61span').addEventListener('click', e => {
moveTabAudio.play();
let tabStorage = new TabStorage();
let storage = new Storage();
//grab tab array
let tabArray = tabStorage.getArrayFromFile();
//change tab indexes
tabArray[1].index = 0;
tabArray[0].index = 1;
//move tabs
let newTabArray = move(tabArray, 1, 0);
//set tabArray back to storage
tabStorage.setArrayToFileName(newTabArray);
//grab clicked file array and swap file array
let fileNameClickedArray = storage.getFileNameWithIndex(1);
let clickedArray = storage.getArrayFromFile(fileNameClickedArray);

let fileNameSwapArray = storage.getFileNameWithIndex(0);
let swapArray = storage.getArrayFromFile(fileNameSwapArray);
//change index's
console.log(clickedArray);
// run through clicked array and change index to 0
clickedArray.forEach(item => {
item.index = 0;
});
// run through swap array and change index to 1
swapArray.forEach(item => {
  item.index = 1;
})
//swap arrays back to file
storage.setArrayToFileName(clickedArray, fileNameSwapArray);
storage.setArrayToFileName(swapArray, fileNameClickedArray);
//update screen
paintScreen();
});//End h6 add event listener


// h62span
document.querySelector('#h62span').addEventListener('click', e => {
  moveTabAudio.play();
  let tabStorage = new TabStorage();
  let storage = new Storage();
  //grab tab array
  let tabArray = tabStorage.getArrayFromFile();
  //change tab indexes
  tabArray[2].index = 1;
  tabArray[1].index = 2;
  //move tabs
  let newTabArray = move(tabArray, 2, 1);
  //set tabArray back to storage
  tabStorage.setArrayToFileName(newTabArray);
  //grab clicked file array and swap file array
  let fileNameClickedArray = storage.getFileNameWithIndex(2);
  let clickedArray = storage.getArrayFromFile(fileNameClickedArray);
  
  let fileNameSwapArray = storage.getFileNameWithIndex(1);
  let swapArray = storage.getArrayFromFile(fileNameSwapArray);
  //change index's
  // run through clicked array and change index to 
  clickedArray.forEach(item => {
  item.index = 1;
  });
  // run through swap array and change index to 
  swapArray.forEach(item => {
    item.index = 2;
  })
  //swap arrays back to file
  storage.setArrayToFileName(clickedArray, fileNameSwapArray);
  storage.setArrayToFileName(swapArray, fileNameClickedArray);
  //update screen
  paintScreen();
  });//End h6 add event listener

// h63span
document.querySelector('#h63span').addEventListener('click', e => {
  moveTabAudio.play();
  let tabStorage = new TabStorage();
  let storage = new Storage();
  //grab tab array
  let tabArray = tabStorage.getArrayFromFile();
  //change tab indexes
  tabArray[3].index = 2;
  tabArray[2].index = 3;
  //move tabs
  let newTabArray = move(tabArray, 3, 2);
  //set tabArray back to storage
  tabStorage.setArrayToFileName(newTabArray);
  //grab clicked file array and swap file array
  let fileNameClickedArray = storage.getFileNameWithIndex(3);
  let clickedArray = storage.getArrayFromFile(fileNameClickedArray);
  
  let fileNameSwapArray = storage.getFileNameWithIndex(2);
  let swapArray = storage.getArrayFromFile(fileNameSwapArray);
  //change index's
  // run through clicked array and change index to 
  clickedArray.forEach(item => {
  item.index = 2;
  });
  // run through swap array and change index to 
  swapArray.forEach(item => {
    item.index = 3;
  })
  //swap arrays back to file
  storage.setArrayToFileName(clickedArray, fileNameSwapArray);
  storage.setArrayToFileName(swapArray, fileNameClickedArray);
  //update screen
  paintScreen();
  });//End h6 add event listener

// h64span
document.querySelector('#h64span').addEventListener('click', e => {
  moveTabAudio.play();
  let tabStorage = new TabStorage();
  let storage = new Storage();
  //grab tab array
  let tabArray = tabStorage.getArrayFromFile();
  //change tab indexes
  tabArray[4].index = 3;
  tabArray[3].index = 4;
  //move tabs
  let newTabArray = move(tabArray, 4, 3);
  //set tabArray back to storage
  tabStorage.setArrayToFileName(newTabArray);
  //grab clicked file array and swap file array
  let fileNameClickedArray = storage.getFileNameWithIndex(4);
  let clickedArray = storage.getArrayFromFile(fileNameClickedArray);
  
  let fileNameSwapArray = storage.getFileNameWithIndex(3);
  let swapArray = storage.getArrayFromFile(fileNameSwapArray);
  //change index's
  // run through clicked array and change index to 
  clickedArray.forEach(item => {
  item.index = 3;
  });
  // run through swap array and change index to 
  swapArray.forEach(item => {
    item.index = 4;
  })
  //swap arrays back to file
  storage.setArrayToFileName(clickedArray, fileNameSwapArray);
  storage.setArrayToFileName(swapArray, fileNameClickedArray);
  //update screen
  paintScreen();
  });//End h6 add event listener

// h65span
document.querySelector('#h65span').addEventListener('click', e => {
  moveTabAudio.play();
  let tabStorage = new TabStorage();
  let storage = new Storage();
  //grab tab array
  let tabArray = tabStorage.getArrayFromFile();
  //change tab indexes
  tabArray[5].index = 4;
  tabArray[4].index = 5;
  //move tabs
  let newTabArray = move(tabArray, 5, 4);
  //set tabArray back to storage
  tabStorage.setArrayToFileName(newTabArray);
  //grab clicked file array and swap file array
  let fileNameClickedArray = storage.getFileNameWithIndex(5);
  let clickedArray = storage.getArrayFromFile(fileNameClickedArray);
  
  let fileNameSwapArray = storage.getFileNameWithIndex(4);
  let swapArray = storage.getArrayFromFile(fileNameSwapArray);
  //change index's
  // run through clicked array and change index to 
  clickedArray.forEach(item => {
  item.index = 4;
  });
  // run through swap array and change index to 
  swapArray.forEach(item => {
    item.index = 5;
  })
  //swap arrays back to file
  storage.setArrayToFileName(clickedArray, fileNameSwapArray);
  storage.setArrayToFileName(swapArray, fileNameClickedArray);
  //update screen
  paintScreen();
  });//End h6 add event listener

// h66span
document.querySelector('#h66span').addEventListener('click', e => {
  moveTabAudio.play();
  let tabStorage = new TabStorage();
  let storage = new Storage();
  //grab tab array
  let tabArray = tabStorage.getArrayFromFile();
  //change tab indexes
  tabArray[6].index = 5;
  tabArray[5].index = 6;
  //move tabs
  let newTabArray = move(tabArray, 6, 5);
  //set tabArray back to storage
  tabStorage.setArrayToFileName(newTabArray);
  //grab clicked file array and swap file array
  let fileNameClickedArray = storage.getFileNameWithIndex(6);
  let clickedArray = storage.getArrayFromFile(fileNameClickedArray);
  
  let fileNameSwapArray = storage.getFileNameWithIndex(5);
  let swapArray = storage.getArrayFromFile(fileNameSwapArray);
  //change index's
  // run through clicked array and change index to 
  clickedArray.forEach(item => {
  item.index = 5;
  });
  // run through swap array and change index to 
  swapArray.forEach(item => {
    item.index = 6;
  })
  //swap arrays back to file
  storage.setArrayToFileName(clickedArray, fileNameSwapArray);
  storage.setArrayToFileName(swapArray, fileNameClickedArray);
  //update screen
  paintScreen();
  });//End h6 add event listener

// h67span
document.querySelector('#h67span').addEventListener('click', e => {
  moveTabAudio.play();
  let tabStorage = new TabStorage();
  let storage = new Storage();
  //grab tab array
  let tabArray = tabStorage.getArrayFromFile();
  //change tab indexes
  tabArray[7].index = 6;
  tabArray[6].index = 7;
  //move tabs
  let newTabArray = move(tabArray, 7, 6);
  //set tabArray back to storage
  tabStorage.setArrayToFileName(newTabArray);
  //grab clicked file array and swap file array
  let fileNameClickedArray = storage.getFileNameWithIndex(7);
  let clickedArray = storage.getArrayFromFile(fileNameClickedArray);
  
  let fileNameSwapArray = storage.getFileNameWithIndex(6);
  let swapArray = storage.getArrayFromFile(fileNameSwapArray);
  //change index's
  // run through clicked array and change index to 
  clickedArray.forEach(item => {
  item.index = 6;
  });
  // run through swap array and change index to 
  swapArray.forEach(item => {
    item.index = 7;
  })
  //swap arrays back to file
  storage.setArrayToFileName(clickedArray, fileNameSwapArray);
  storage.setArrayToFileName(swapArray, fileNameClickedArray);
  //update screen
  paintScreen();
  });//End h6 add event listener

// h68span
document.querySelector('#h68span').addEventListener('click', e => {
  moveTabAudio.play();
  let tabStorage = new TabStorage();
  let storage = new Storage();
  //grab tab array
  let tabArray = tabStorage.getArrayFromFile();
  //change tab indexes
  tabArray[8].index = 7;
  tabArray[7].index = 8;
  //move tabs
  let newTabArray = move(tabArray, 8, 7);
  //set tabArray back to storage
  tabStorage.setArrayToFileName(newTabArray);
  //grab clicked file array and swap file array
  let fileNameClickedArray = storage.getFileNameWithIndex(8);
  let clickedArray = storage.getArrayFromFile(fileNameClickedArray);
  
  let fileNameSwapArray = storage.getFileNameWithIndex(7);
  let swapArray = storage.getArrayFromFile(fileNameSwapArray);
  //change index's
  // run through clicked array and change index to 
  clickedArray.forEach(item => {
  item.index = 7;
  });
  // run through swap array and change index to 
  swapArray.forEach(item => {
    item.index = 8;
  })
  //swap arrays back to file
  storage.setArrayToFileName(clickedArray, fileNameSwapArray);
  storage.setArrayToFileName(swapArray, fileNameClickedArray);
  //update screen
  paintScreen();
  });//End h6 add event listener

// h69span
document.querySelector('#h69span').addEventListener('click', e => {
  moveTabAudio.play();
  let tabStorage = new TabStorage();
  let storage = new Storage();
  //grab tab array
  let tabArray = tabStorage.getArrayFromFile();
  //change tab indexes
  tabArray[9].index = 8;
  tabArray[8].index = 9;
  //move tabs
  let newTabArray = move(tabArray, 9, 8);
  //set tabArray back to storage
  tabStorage.setArrayToFileName(newTabArray);
  //grab clicked file array and swap file array
  let fileNameClickedArray = storage.getFileNameWithIndex(9);
  let clickedArray = storage.getArrayFromFile(fileNameClickedArray);
  
  let fileNameSwapArray = storage.getFileNameWithIndex(8);
  let swapArray = storage.getArrayFromFile(fileNameSwapArray);
  //change index's
  // run through clicked array and change index to 
  clickedArray.forEach(item => {
  item.index = 8;
  });
  // run through swap array and change index to 
  swapArray.forEach(item => {
    item.index = 9;
  })
  //swap arrays back to file
  storage.setArrayToFileName(clickedArray, fileNameSwapArray);
  storage.setArrayToFileName(swapArray, fileNameClickedArray);
  //update screen
  paintScreen();
  });//End h6 add event listener


//single functions

//This function moves one object to a new index and returns the array
function move(array, from, to) {
  if( to === from ) return array;

  var target = array[from];                         
  var increment = to < from ? -1 : 1;

  for(var k = from; k != to; k += increment){
    array[k] = array[k + increment];
  }
  array[to] = target;
  return array;
}
//End of move Functioon
//***************************************************************** */