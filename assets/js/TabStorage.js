//TabStorage Class start
class TabStorage{

  constructor() {
    this.file = "fileTab9142018DEBX";
  }

  //Method setArrayToFileName
  setArrayToFileName(array){
  let myHomeJSON = JSON.stringify(array);
  localStorage.setItem(this.file, myHomeJSON);
}
//******************************************* */
  //Method add New Tab
  addNewTab(newTab){
  let array = this.getArrayFromFile(this.file);
  array.push(newTab);
  this.setArrayToFileName(array);
}

//****************************************** */
    // Method getArrayFromFile
    getArrayFromFile() {
      //Make a variable for array
      let array;
         // Read file 
        let textFromFile = localStorage.getItem(this.file);

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
//Method clearFileFromLocalStorage
    clearFileFromLocalStorage() {
    localStorage.removeItem(this.file);
 } //End clearFileFromLocalStorage method
//************************************************** */

// Method getTabArrayLength
  getTabArrayLength(){
  let array = this.getArrayFromFile();
  return array.length;
}
//*************************************************** */

// Method getTabNameWithIndex(index)
getTabNameWithIndex(index){
let array = this.getArrayFromFile();
let tabName;
for(var i= 0; i<array.length; i++){
   if(i === index){
     tabName = array[i].name;
     return tabName;
   }
}

}
//***************************************************** */


}// End of TabStorage Class