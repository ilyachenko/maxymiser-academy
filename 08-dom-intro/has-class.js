var node = document.getElementById("main1");
hasClass(node, 'classToCheck');
function hasClass(node, classToCheck) {
    var classes = [].slice.call(node.classList);
    debugger
    if (classes.indexOf(classToCheck) != -1){
        return true;
    }
}
