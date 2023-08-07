var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// //////////////////////////
var copy =document.querySelector("#copy")
var comment =document.querySelector("#comment")
copy.onclick =function(){
    confirm("copied")

}
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });