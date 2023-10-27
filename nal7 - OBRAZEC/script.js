document.getElementById('showPopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('goBack').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally
});

var screenHeight = screen.height;
if (screenHeight < 800) {
  $('body').css('zoom', 0.75);
} else {
     $('body').css('zoom', 1);
}