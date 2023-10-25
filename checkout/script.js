document.getElementById('showPopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('goBack').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally
});
