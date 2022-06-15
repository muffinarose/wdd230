//Create three variables that hold references to the input, button, 
    //and list elements using const.
const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const listEl = document.querySelector('ul');

//Create a click event listener for the Add Chapter button using 
    //addEventListener and an anonymous function.  
buttonEl.addEventListener('click', function() {
  
//In the function block for adding a chapter, make sure the input is not blank.
    if (inputEl.value != '') {
        //do the following:
        //create an li element
        let listItem = document.createElement('li');

        //create a delete button
        let deleteBtn = document.createElement('button');

        //populate the li elements textContent or innerHTML with the input
        listItem.textContent = inputEl.value;

        //populate the button textContent with an ❌
        deleteBtn.textContent = '❌';

        //append the li element with the delete button
        listItem.appendChild(deleteBtn);
        

        //append the list element with the li element just created and appended 
            //with text and the delete button
        listEl.appendChild(listItem);

        //add an event listener to the delete button that removes the li element 
            //when clicked
        deleteBtn.addEventListener('click', function(){
            listEl.removeChild(listItem);
        });
        
        //send the focus to the input element
        inputEl.focus();

        //clean up the successful add of a chapter by changing the input to nothing 
            //or the empty string and setting the focus to the input.
        inputEl.value = '';
        // listItem.textContent = '';
    }
});