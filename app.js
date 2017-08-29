

function newItem() {
	var item = document.getElementById('input').value;
	var ul = document.getElementById("list");
  var li = document.createElement('li');
  
  // Creates the item and adds the -
  li.appendChild(document.createTextNode("- "+item));
  // Appends the item to the ul section
  ul.appendChild(li);
  // Resets the type field
  document.getElementById('input').value="";

  // A function to remove items on click
  li.onclick = removeItem;
}

// Run the whole above function when you press enter!
document.body.onkeyup = function(e){
      if(e.keyCode == 13){
        newItem();
      }
  }

  // The Actual function to remove items called earlier
function removeItem(e) {
  e.target.parentElement.removeChild(e.target);
}

