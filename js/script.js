// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("deleteBtn");


// Get the button that opens the modal
let btnUpdate = document.getElementById("updateBtn");


// Get the button that opens the modal
let btnCancel = document.getElementById("cancel");


// Get the button that opens the modal
let btnDelete = document.getElementById("delete");



// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = () => {
  modal.style.display = "block";
};

// When the user clicks the button, open the modal 
btnDelete.onclick = function() {
  confirm("Success");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};
// When the user clicks on <span> (x), close the modal
btnCancel.onclick = function() {
  modal.style.display = "none";
};


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
