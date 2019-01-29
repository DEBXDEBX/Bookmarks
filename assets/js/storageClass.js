//Storage Class start
class Storage {

  constructor() {
    this.maxNumber = 10;
    this.maxIndex = 9;
    this.myLimitNumber = 8;
    this.file0 = "fileZero9142018DEBX";
    this.file1 = "fileOne9142018DEBX";
    this.file2 = "fileTwo9142018DEBX";
    this.file3 = "fileThree9142018DEBX";
    this.file4 = "fileFour9142018DEBX";
    this.file5 = "fileFive9142018DEBX";
    this.file6 = "fileSix9142018DEBX";
    this.file7 = "fileSeven9142018DEBX";
    this.file8 = "fileEight9142018DEBX";
    this.file9 = "fileNine9142018DEBX";

    this.fileNameArray = [this.file0, this.file1, this.file2, this.file3, this.file4, this.file5, this.file6, this.file7, this.file8, this.file9];
  }

//*************************************************** */

  // Method
  addBookmark(bookmark) {
   
    // get fileName with index
    let fileName = this.getFileNameWithIndex(bookmark.index);
    
    // get array and push bookmark in array
    let array = this.getArrayFromFile(fileName);

    //check array for duplicate names, check if name is taken
       for(var i= 0; i<array.length; i++){
        if(array[i].name === bookmark.name){
            //if you find the name on file, alert and return
            warning2Audio.play();
            ui.showAlert('Please enter a new name, that name is taken!', 'error');
            // alert('Please pick a new name, that name is taken!');
            return;
    }   
  }

    //push bookmark to array
     array.push(bookmark);
    // set array to file
    this.setArrayToFileName(array, fileName);
  }// End addBookmark method

//******************************************** */

//Method
  setArrayToFileName(array, fileName){
    let myHomeJSON = JSON.stringify(array);
    localStorage.setItem(fileName, myHomeJSON);
  }

//****************************************** */

    // Method
    getArrayFromFile(fileName) {
      //Make a variable for array
      let array;
         // Read file 
        let textFromFile = localStorage.getItem(fileName);

    	if(textFromFile){
                   //parse file 
           array = JSON.parse(textFromFile); 
      }else{
        array = [];
      }
      // return array
      return array;
    } // End getArrayFromFile method

//************************************************ */

 // Method
       getFileNameWithIndex(index) {
         let fileName;
        switch (index) {
          case 0:
                   fileName = this.file0
                   break;
          case 1:
                   fileName = this.file1
                    break;
          case 2:
                    fileName = this.file2
                     break;
          case 3:
                     fileName = this.file3
                      break;
          case 4:
                      fileName = this.file4
                       break;
          case 5:
                       fileName = this.file5;
                        break;     
          case 6:
                        fileName = this.file6;
                         break; 
          case 7:
                         fileName = this.file7;
                          break;    
          case 8:
                          fileName = this.file8;
                           break; 
          case 9:
                           fileName = this.file9;
                            break;                                                                                              
          default:
            console.log('Sorry, no file name');
        }

        return fileName;
} // End getFileNameWithIndex

    //*************************************************** */

     // Method test method you do not need
     printToConsole(bookmark) {
      console.log('print called')
     console.log(`${bookmark.index} ${bookmark.catName} ${bookmark.name} ${bookmark.address}`);
    } //End printToConsole method

    //************************************************** */

    // Method test method you do not need
    clearFilesFromLocalStorage() {
          localStorage.removeItem(this.file0);
          localStorage.removeItem(this.file1);
          localStorage.removeItem(this.file2);
          localStorage.removeItem(this.file3);
          localStorage.removeItem(this.file4);
        } //End clearFilesFromLocalStorage method
    //************************************************** */

        // Method
        sendDataToUi(uiObj) {

          if(localStorage.getItem(this.file0)){
            let array = this.getArrayFromFile(this.file0);
            if(array.length >= 1){
              uiObj.DisplayData(array);
            }
           
          }
          if(localStorage.getItem(this.file1)){
           let array = this.getArrayFromFile(this.file1);
           if(array.length >= 1){
            uiObj.DisplayData(array);
          }
         }
         if(localStorage.getItem(this.file2)){
           let array = this.getArrayFromFile(this.file2);
           if(array.length >= 1){
            uiObj.DisplayData(array);
          }
         }
         if(localStorage.getItem(this.file3)){
           let array = this.getArrayFromFile(this.file3);
           if(array.length >= 1){
            uiObj.DisplayData(array);
          }
         }
         if(localStorage.getItem(this.file4)){
           let array = this.getArrayFromFile(this.file4);
           if(array.length >= 1){
            uiObj.DisplayData(array);
          }
         }

         if(localStorage.getItem(this.file5)){
          let array = this.getArrayFromFile(this.file5);
          if(array.length >= 1){
           uiObj.DisplayData(array);
         }
        }
        if(localStorage.getItem(this.file6)){
          let array = this.getArrayFromFile(this.file6);
          if(array.length >= 1){
           uiObj.DisplayData(array);
         }
        }
        if(localStorage.getItem(this.file7)){
          let array = this.getArrayFromFile(this.file7);
          if(array.length >= 1){
           uiObj.DisplayData(array);
         }
        }
        if(localStorage.getItem(this.file8)){
          let array = this.getArrayFromFile(this.file8);
          if(array.length >= 1){
           uiObj.DisplayData(array);
         }
        }
        if(localStorage.getItem(this.file9)){
          let array = this.getArrayFromFile(this.file9);
          if(array.length >= 1){
           uiObj.DisplayData(array);
         }
        }
     } //End sendDataToUi method
 //************************************************** */

//method
deleteItem(index, textToDelete){
      // get fileName with index
      let fileName = this.getFileNameWithIndex(index);
      // get array 
      let array = this.getArrayFromFile(fileName);

            //delete bookmark from array
            // run through array to match the name

            for(var i= 0; i<array.length; i++){
              if(array[i].name === textToDelete){
                //delete item
                 array.splice(i, 1);
                 continue;
          }   
        }
       //save the array to file
     this.setArrayToFileName(array, fileName);

} //End deleteItem method
//***************************************************** */

//Method
moveUp(index, textToMove){
// get fileName with index
let fileName = this.getFileNameWithIndex(index);
// get array 
let array = this.getArrayFromFile(fileName);

let deleteIndex;
//run through array to get delete index
for(var i= 0; i<array.length; i++){
  if(array[i].name === textToMove){
      deleteIndex = i;
}
}
//If index is zero. You can't move it any more so return
if(deleteIndex === 0){
  return;
}
  //call move pass in array and index from and to 
  let moveTo = deleteIndex - 1;
  
  let arrayToSetToFile = this.move(array, deleteIndex, moveTo);
  this.setArrayToFileName(arrayToSetToFile, fileName);

}//End moveUp method
//********************************************************** */

//method
//This function moves one object to a new index and returns the array
 move(array, from, to) {
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

//method 
moveDown(index, textToMove){
// get fileName with index
let fileName = this.getFileNameWithIndex(index);
// get array 
let array = this.getArrayFromFile(fileName);
let deleteIndex;
let arrayLength;

  arrayLength = array.length;
  for(var i= 0; i<array.length; i++){
    if(array[i].name === textToMove){
        deleteIndex = i;   
  }
}

    arrayLength = arrayLength - 1;
    //If index is equal to length - 1. You can't move it any more so return
    if(deleteIndex === arrayLength){
      return;
    }

  //call move pass in array and index from and to 
  let moveTo = deleteIndex + 1;
  let arrayToSetToFile = this.move(array, deleteIndex, moveTo);
  this.setArrayToFileName(arrayToSetToFile, fileName);
 
} //End of moveDown Method
//*********************************************************** */

//metohd
printFileNames(){
    this.fileNameArray.forEach((element, index) => {
    console.log(`${element} the index is: ${index}`);
  });
}
//************************************************************ */
//Method 
changeRemaingIndexes(startIndex){
  //loop through files filesArray is an array of file names

  for(let i=0; i<this.fileNameArray.length; i++){
   
    let fileToWorkWith = this.fileNameArray[i];
  
    //get array with file name
    let bookmarkArray = this.getArrayFromFile(fileToWorkWith);

   if(bookmarkArray){
   //loopthrough bookmark array and minus index
   bookmarkArray.forEach(element=>{
  if(element.index > startIndex){
    element.index = element.index -1;
  }

});
  //set bookmarkArray back to file
  this.setArrayToFileName(bookmarkArray, fileToWorkWith);
    }
  }

} //End changeRemaingIndexes

//************************************************************** */
//Method
changeRemainingFilesDownOneHIDE(deleteIndex){
  console.log('change remaining files down one method');
  //set up a variable
  let lastValidFileName= this.file0;
  
  // loop through array of files
   
  for(let i=deleteIndex; i<this.myLimitNumber; i++){
      //Grab array
      let array1 = this.getArrayFromFile(this.fileNameArray[i+1]);
    
      //if array length is valid, save to file
      if(array1.length >= 1){
        this.setArrayToFileName(array1, this.fileNameArray[i]);
        lastValidFileName = this.fileNameArray[i+1];
        this.removeFileNameLS(this.fileNameArray[i +1]);
      }

  }
  
}

//Method 
removeFileNameLS(fileName){
  localStorage.removeItem(fileName);
} // End Method



//Method
changeRemainingFilesDownOne(deleteIndex){
  let lastValidFileName;
  switch (deleteIndex) {
    case 0:  lastValidFileName = this.file0;
             //Grab array
             let array1 = this.getArrayFromFile(this.file1);
             
             //if array length is valid, save to file
             if(array1.length >= 1){
               this.setArrayToFileName(array1, this.file0);
               lastValidFileName = this.file1;
               this.removeFileNameLS(lastValidFileName);
             }
             //********************************************** */
             //Grab array 
             let array2 = this.getArrayFromFile(this.file2);
       
             //if array length is valid, save to file
             if(array2.length >=  1){
               this.setArrayToFileName(array2, this.file1);
               lastValidFileName = this.file2;
               this.removeFileNameLS(lastValidFileName);
             }
             //*********************************************** */
             //Grab array 
             let array3 = this.getArrayFromFile(this.file3);
             
              //if array length is valid, save to file
              if(array3.length >=  1){
                 this.setArrayToFileName(array3, this.file2);
                 lastValidFileName = this.file3;
                 this.removeFileNameLS(lastValidFileName);
               }
               //*********************************************** */
                //Grab array 
               let array4 = this.getArrayFromFile(this.file4);
               //if array length is valid, save to file
               if(array4.length >=  1){
                 this.setArrayToFileName(array4, this.file3)
                 lastValidFileName = this.file4;
                 this.removeFileNameLS(lastValidFileName);
               }
              //  //*********************************************** */
              //Grab array
              let array5 = this.getArrayFromFile(this.file5);
              //if array length is valid, save it to file
              if(array5.length >= 1){
                this.setArrayToFileName(array5, this.file4);
                lastValidFileName = this.file5;
                this.removeFileNameLS(lastValidFileName);
              }
             //*********************************************** */
              //Grab array
               let array6 = this.getArrayFromFile(this.file6);
                //if array length is valid, save it to file
                if(array6.length >= 1){
                  this.setArrayToFileName(array6, this.file5);
                  lastValidFileName = this.file6;
                  this.removeFileNameLS(lastValidFileName);
                }
                  //  //*********************************************** */
              //Grab array
              let array7 = this.getArrayFromFile(this.file7);
               //if array length is valid, save it to file
               if(array7.length >= 1){
                 this.setArrayToFileName(array7, this.file6);
                 lastValidFileName = this.file7;
                 this.removeFileNameLS(lastValidFileName);
               }
              //*********************************************** */
              //Grab array
              let array8 = this.getArrayFromFile(this.file8);
               //if array length is valid, save it to file
               if(array8.length >= 1){
                 this.setArrayToFileName(array8, this.file7);
                 lastValidFileName = this.file8;
                 this.removeFileNameLS(lastValidFileName);
               }
               //*********************************************** */
              //Grab array
              let array9 = this.getArrayFromFile(this.file9);
              //if array length is valid, save it to file
              if(array9.length >= 1){
                this.setArrayToFileName(array9, this.file8);
                lastValidFileName = this.file9;
                this.removeFileNameLS(lastValidFileName);
              }
              // this is the last line in case 0:
              this.removeFileNameLS(lastValidFileName);
         
             break;
    case 1:
            //********************************************** */
            lastValidFileName = this.file1;
             //Grab array 
             let array2C1 = this.getArrayFromFile(this.file2);
          
             //if array length is valid, save to file
             if(array2C1.length >=  1){
               this.setArrayToFileName(array2C1, this.file1);
               lastValidFileName = this.file2;
               this.removeFileNameLS(lastValidFileName);
             }
                          //*********************************************** */
               //Grab array 
               let array3C1 = this.getArrayFromFile(this.file3);
             
               //if array length is valid, save to file
               if(array3C1.length >=  1){
                 this.setArrayToFileName(array3C1, this.file2);
                 lastValidFileName = this.file3;
                 this.removeFileNameLS(lastValidFileName);
               }
            //*********************************************** */
            //Grab array 
            let array4C1 = this.getArrayFromFile(this.file4);
            //if array length is valid, save to file
            if(array4C1.length >=  1){
              this.setArrayToFileName(array4C1, this.file3)
              lastValidFileName = this.file4;
              this.removeFileNameLS(lastValidFileName);
              }
            //*********************************************** */
            //Grab array 
            let array5C1 = this.getArrayFromFile(this.file5);
            //if array length is valid, save to file
            if(array5C1.length >= 1){
              this.setArrayToFileName(array5C1, this.file4);
              lastValidFileName = this.file5;
              this.removeFileNameLS(lastValidFileName);
            }
            //*********************************************** */
            //Grab array 
            let array6C1 = this.getArrayFromFile(this.file6);
            //if array length is valid, save to file
            if(array6C1.length >= 1){
              this.setArrayToFileName(array6C1, this.file5);
              lastValidFileName = this.file6;
              this.removeFileNameLS(lastValidFileName);
            }
            //*********************************************** */
            //Grab array 
            let array7C1 = this.getArrayFromFile(this.file7);
            //if array length is valid, save to file
            if(array7C1.length >= 1){
              this.setArrayToFileName(array7C1, this.file6);
              lastValidFileName = this.file7;
              this.removeFileNameLS(lastValidFileName);
            }
            //*********************************************** */
            //Grab array 
            let array8C1 = this.getArrayFromFile(this.file8);
            //if array length is valid, save to file
            if(array8C1.length >= 1){
              this.setArrayToFileName(array8C1, this.file7);
              lastValidFileName = this.file8;
              this.removeFileNameLS(lastValidFileName);
            }
            //*********************************************** */
            //Grab array 
            let array9C1 = this.getArrayFromFile(this.file9);
            //if array length is valid, save to file
            if(array9C1.length >= 1){
              this.setArrayToFileName(array9C1, this.file8);
              lastValidFileName = this.file9;
              this.removeFileNameLS(lastValidFileName);
            }
            //this is the last line in case 1:
              this.removeFileNameLS(lastValidFileName);
              break;
    case 2:
              //*********************************************** */
              lastValidFileName = this.file2;
               //Grab array 
               let array3C2 = this.getArrayFromFile(this.file3);
             
               //if array length is valid, save to file
               if(array3C2.length >=  1){
                 this.setArrayToFileName(array3C2, this.file2);
                 lastValidFileName = this.file3;
                 this.removeFileNameLS(lastValidFileName);
               }
             //*********************************************** */
            //Grab array 
            let array4C2 = this.getArrayFromFile(this.file4);
            //if array length is valid, save to file
            if(array4C2.length >=  1){
              this.setArrayToFileName(array4C2, this.file3)
              lastValidFileName = this.file4;
              this.removeFileNameLS(lastValidFileName);
              }
             //*********************************************** */
            //Grab array 
            let array5C2 = this.getArrayFromFile(this.file5);
             //if array length is valid, save to file
            if(array5C2.length >= 1){
              this.setArrayToFileName(array5C2, this.file4);
              lastValidFileName = this.file5;
              this.removeFileNameLS(lastValidFileName);
            }
             //*********************************************** */
            //Grab array  
           let array6C2 = this.getArrayFromFile(this.file6);
           //if array length is valid, save to file
           if(array6C2.length >= 1){
             this.setArrayToFileName(array6C2, this.file5);
             lastValidFileName = this.file6;
             this.removeFileNameLS(lastValidFileName);
           }
             //*********************************************** */
            //Grab array  
            let array7C2 = this.getArrayFromFile(this.file7);
               //if array length is valid, save to file
               if(array7C2.length >= 1){
                 this.setArrayToFileName(array7C2, this.file6);
                 lastValidFileName = this.file7;
                 this.removeFileNameLS(lastValidFileName);
               }
             //*********************************************** */
            //Grab array  
            let array8C2 = this.getArrayFromFile(this.file8);
               //if array length is valid, save to file
               if(array8C2.length >= 1){
                 this.setArrayToFileName(array8C2, this.file7);
                 lastValidFileName - this.file8;
                 this.removeFileNameLS(lastValidFileName);
               }
             //*********************************************** */
            //Grab array  
            let array9C2 = this.getArrayFromFile(this.file9);
            //if array length is valid, save to file
            if(array9C2.length >= 1){
              this.setArrayToFileName(array9C2, this.file8);
              lastValidFileName = this.file9;
              this.removeFileNameLS(lastValidFileName);
            }

            //*********************************************** */
            //This is the last line in case 2:
              this.removeFileNameLS(lastValidFileName);              
               break;
    case 3:
            //*********************************************** */
            lastValidFileName = this.file3;
            //Grab array 
            let array4C3 = this.getArrayFromFile(this.file4);
            //if array length is valid, save to file
            if(array4C3.length >=  1){
              this.setArrayToFileName(array4C3, this.file3)
              lastValidFileName = this.file4;
              this.removeFileNameLS(lastValidFileName);
              }
            //*********************************************** */
            //Grab array 
            let array5C3 = this.getArrayFromFile(this.file5);
            //if array length is valid, save to file
              if(array5C3.length >= 1){
                this.setArrayToFileName(array5C3, this.file4);
                lastValidFileName = this.file5;
                this.removeFileNameLS(lastValidFileName);
              }
               //*********************************************** */
            //Grab array
            let array6C3 = this.getArrayFromFile(this.file6);
             //if array length is valid, save to file
             if(array6C3.length >= 1){
               this.setArrayToFileName(array6C3, this.file5);
               lastValidFileName = this.file6;
               this.removeFileNameLS(lastValidFileName);
             }
               //*********************************************** */
            //Grab array
            let array7C3 = this.getArrayFromFile(this.file7);
             //if array length is valid, save to file
             if(array7C3.length >= 1){
               this.setArrayToFileName(array7C3, this.file6);
               lastValidFileName = this.file7;
               this.removeFileNameLS(lastValidFileName);
             }
               //*********************************************** */
            //Grab array
            let array8C3 = this.getArrayFromFile(this.file8);
            //if array length is valid, save to file
            if(array8C3.length >= 1){
              this.setArrayToFileName(array8C3, this.file7);
              lastValidFileName = this.file8;
              this.removeFileNameLS(lastValidFileName);
            }
               //*********************************************** */
            //Grab array
            let array9C3 = this.getArrayFromFile(this.file9);
            //if array length is valid, save to file
            if(array9C3.length >= 1){
              this.setArrayToFileName(array9C3, this.file8);
              lastValidFileName = this.file9;
              this.removeFileNameLS(lastValidFileName);
            }
            //this is the last line in case 3:
              this.removeFileNameLS(lastValidFileName);     
                break;
    case 4:
                //*********************************************** */
                lastValidFileName = this.file4;
            //Grab array               
            let array5C4 = this.getArrayFromFile(this.file5);
                   //if array length is valid, save to file
                   if(array5C4.length >= 1){
                     this.setArrayToFileName(array5C4, this.file4);
                     lastValidFileName = this.file5;
                     this.removeFileNameLS(lastValidFileName);
                   }
                //*********************************************** */
            //Grab array 
            let array6C4 = this.getArrayFromFile(this.file6);
            //if array length is valid, save to file
            if(array6C4.length >= 1){
              this.setArrayToFileName(array6C4, this.file5);
              lastValidFileName = this.file6;
              this.removeFileNameLS(lastValidFileName);
            }
                 //*********************************************** */
            //Grab array 
            let array7C4 = this.getArrayFromFile(this.file7);
              //if array length is valid, save to file
              if(array7C4.length >= 1){
                this.setArrayToFileName(array7C4, this.file6);
                lastValidFileName = this.file7;
                this.removeFileNameLS(lastValidFileName);
              }     
                 //*********************************************** */
            //Grab array 
            let array8C4 = this.getArrayFromFile(this.file8);
             //if array length is valid, save to file
             if(array8C4.length >= 1){
               this.setArrayToFileName(array8C4, this.file7);
               lastValidFileName = this.file8;
               this.removeFileNameLS(lastValidFileName);
             }      
                               //*********************************************** */
            //Grab array 
              let array9C4 = this.getArrayFromFile(this.file9);
              //if array length is valid, save to file
              if(array9C4.length >= 1){
                this.setArrayToFileName(array9C4, this.file8);
                lastValidFileName = this.file9;
                this.removeFileNameLS(lastValidFileName);
              }
            //this is the last line in case 4:
                this.removeFileNameLS(lastValidFileName); 
                
                 break;
    case 5:  //*********************************************** */
    lastValidFileName = this.file5;
             //Grab array
             let array6C5 = this.getArrayFromFile(this.file6);
              //if array length is valid, save to file
              if(array6C5.length >= 1){
                this.setArrayToFileName(array6C5, this.file5);
                lastValidFileName = this.file6;
                this.removeFileNameLS(lastValidFileName);
              }
 //*********************************************** */
             //Grab array
             let array7C5 = this.getArrayFromFile(this.file7);
             //if array length is valid, save to file
             if(array7C5.length >= 1){
                 this.setArrayToFileName(array7C5, this.file6);
                 lastValidFileName = this.file7;
                 this.removeFileNameLS(lastValidFileName);
               }
       //*********************************************** */
             //Grab array
             let array8C5 = this.getArrayFromFile(this.file8);
              //if array length is valid, save to file
              if(array8C5.length >= 1){
                this.setArrayToFileName(array8C5, this.file7);
                lastValidFileName = this.file8;
                this.removeFileNameLS(lastValidFileName);
              }    
         //*********************************************** */
             //Grab array
             let array9C5 = this.getArrayFromFile(this.file9);
                    //if array length is valid, save to file
                if(array9C5.length >= 1){
                  this.setArrayToFileName(array9C5,this.file8);
                  lastValidFileName = this.file9;
                  this.removeFileNameLS(lastValidFileName);
                }           
                              //this is the last line in case 5:
                              this.removeFileNameLS(lastValidFileName);
                 break;
    case 6: 
             //*********************************************** */
             this.lastValidFileName = this.file6;
             //Grab array
             let array7C6 = this.getArrayFromFile(this.file7);
             //if array length is valid, save to file
             if(array7C6.length >= 1){
               this.setArrayToFileName(array7C6, this.file6);
               lastValidFileName = this.file7;
               this.removeFileNameLS(lastValidFileName);
             }
                   //*********************************************** */
             //Grab array
             let array8C6 = this.getArrayFromFile(this.file8);
                  //if array length is valid, save to file
                  if(array8C6.length >= 1){
                    this.setArrayToFileName(array8C6, this.file7);
                    lastValidFileName = this.file8;
                    this.removeFileNameLS(lastValidFileName);
                  }     
                                   //*********************************************** */
             //Grab array
             let array9C6 = this.getArrayFromFile(this.file9);
                      //if array length is valid, save to file
                      if(array9C6.length >= 1){
                        this.setArrayToFileName(array9C6, this.file8);
                        lastValidFileName = this.file9;
                        this.removeFileNameLS(lastValidFileName);
                      }
                //this is the last line in case 6:
                this.removeFileNameLS(lastValidFileName);
                 break;
    case 7:
                                       //*********************************************** */
              lastValidFileName = this.file7;
             //Grab array
             let array8C7 = this.getArrayFromFile(this.file8);
                  //if array length is valid, save to file
                if(array8C7.length >= 1){
                  this.setArrayToFileName(array8C7, this.file7);
                  lastValidFileName = this.file8;
                  this.removeFileNameLS(lastValidFileName);
                }
                                              //*********************************************** */
             //Grab array
             let array9C7 = this.getArrayFromFile(this.file9);
                   //if array length is valid, save to file
                   if(array9C7.length >= 1){
                     this.setArrayToFileName(array9C7, this.file8);
                     lastValidFileName = this.file9;
                     this.removeFileNameLS(lastValidFileName);
                   }    
                //this is the last line in case 7:
                this.removeFileNameLS(lastValidFileName);
                 break;
    case 8:
                                                  //*********************************************** */
             lastValidFileName = this.file8;
             //Grab array
             let array9C8 = this.getArrayFromFile(this.file9);
             //if array length is valid, save to file
             if(array9C8.length >= 1){
               this.setArrayToFileName(array9C8, this.file8);
               lastValidFileName = this.file9;
               this.removeFileNameLS(lastValidFileName);
             }
                //this is the last line in case 8
                this.removeFileNameLS(lastValidFileName);
                 break;
    case 9:
           lastValidFileName = this.file9;
            this.removeFileNameLS(lastValidFileName); 
                 break;
    default:
      console.log('Sorry, something went wrong');
  }
} // End of method

//Method
//loop
loopLoopHIDE(lastValidFileName){
  switch (lastValidFileName) {
    case this.file4:
            alert("this is from the looploop"); 
            this.removeFileNameLS(lastValidFileName);
           break;
    case this.file1:
           break;
    default:
      console.log('Sorry, something went wrong');
  }

  
}//end method



}// End Storage class


