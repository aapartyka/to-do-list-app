function newItem(){
  //Adding a new item to the list.
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  let list = $('#list');

  li.append(inputValue);

     if (inputValue === '') {
       alert("You must write down a to-do befor adding it!");
     } else {
      $('#list').append(li);
     }
  
   // Crossing out an item from the list of items.
  function crossOut(){
    li.toggleClass("strike");
  }

  li.on('dblclick', crossOut);
  
   //Adding the delete button "X": 
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);

  // removing item of the list.
  function deleteListItem(){
 		li.addClass("delete")
 	}

   $('#list').sortable();
}