let deleteButtons = document.querySelectorAll('.delete');
deleteButtons.forEach(function(button) {
    button.onclick = function() {
        let row = this.parentNode.parentNode; 
        row.parentNode.removeChild(row);
    };
});