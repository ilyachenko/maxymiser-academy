var testDiv = document.getElementById('test');

console.log(
    closest(testDiv, function (node) {
        return node.className.indexOf('wrapper') !== -1
    }) // div.wrapper.inner
);

function closest(node, testFunc) {
    while (true){
        if (testFunc(node)){
            return node;
        }
        else {
            node = node.parentElement
            if(!node){
                return null;
            }

        }
    }
}