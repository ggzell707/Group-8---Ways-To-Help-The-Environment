document.getElementById('recycleButton').addEventListener('click', function() {
    var paragraph = document.getElementById('recycleText');
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
    } else {
        paragraph.style.display = 'none';
    }
});