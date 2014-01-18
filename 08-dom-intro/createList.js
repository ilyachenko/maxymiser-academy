console.log(createList(['мясо', 'рыба'],"ol"));
console.log(createList(['мясо', ['яблоки', ['бананы', 'кокосы']]], "div", "section"));

function createList(listData, listContainer, itemContainer){
    var listContainer = listContainer || "ul";
    var itemContainer = itemContainer || "li";
    var res = document.createElement(listContainer);
    function nodeWrapper(res, listData){
        for(var i=0;i<listData.length;i++){
            if (listData[i] instanceof Array){
                var r = document.createElement(listContainer);
                var newNode = nodeWrapper(r,listData[i]);
                res.appendChild(newNode);
            }
            else {
                var li = document.createElement(itemContainer);
                var txt = document.createTextNode(listData[i]);
                li.appendChild(txt);
                res.appendChild(li);
            }
        }
        return res;
    }
    return nodeWrapper(res, listData);
}