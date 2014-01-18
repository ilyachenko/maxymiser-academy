addClass(document.querySelector('.main-column'), 'main');

function addClass(node, classToAdd) {
    var classes = [].slice.call(node.classList);
    if (classes.indexOf(classToAdd) == -1){
        node.className += " " + classToAdd;
    }
}