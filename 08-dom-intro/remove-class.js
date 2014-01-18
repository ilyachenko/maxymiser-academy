removeClass(document.querySelector('.main-column'), 'main');

function removeClass(node, classToRemove) {
    var classIndex = function(){
        var classes = [].slice.call(node.classList);
        return classes.indexOf(classToRemove)
    };

    while (classIndex() != -1){
        node.classList.remove(classToRemove);
    }
}