function addEvent(obj, event_name, handler) {
    var handler_wrapper = function(event) {
        event = event || window.event;
        if (!event.target && event.srcElement) {
            event.target = event.srcElement;
        }
        return handler.call(obj, event);
    };

    if (obj.addEventListener) {
        obj.addEventListener(event_name, handler_wrapper, false);
    } else if (obj.attachEvent) {
        obj.attachEvent('on' + event_name, handler_wrapper);
    }
    return handler_wrapper;
}

function makeZoomable(node){

    if(!document.getElementById("popup_wrapper")){
        var popup_wrapper = document.createElement("div");
        popup_wrapper.id = "popup_wrapper";
        popup_wrapper.style.display = "none";
        popup_wrapper.innerHTML =
            '<div id="overlay"><div class="center">' +
                '<div id="popup">' +
                    '<div id="closeBtn"><b>X</b></div>' +
                    '<img id="popup_img" src="" />' +
                '</div>' +
            '</div></div>';
        var description = document.querySelectorAll('h1')[0];
        var parentDiv = description.parentNode;
        parentDiv.insertBefore(popup_wrapper, description);

        var closeBtn = document.getElementById("closeBtn");
        addEvent(closeBtn, 'click', closeDiv);
    }

    var imgs = node.getElementsByTagName('img');
    if (imgs.length == 0) return;
    for(var i=0; i<imgs.length; i++){
        var img = imgs[i];
        addEvent(img, 'click', showBigger);
    }
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        var wrapper = document.getElementById("popup_wrapper");
        if (wrapper.style.display === "block"){
            wrapper.style.display = "none";
        }
    }
};

//показать увеличенную картинку и затемнение
var showBigger = function (){
    var s = this.getAttribute('src');
    var re = /small/g;
    var result = s.replace(re, "large");
    document.getElementById("popup_img").src = result;
    document.getElementById("popup_wrapper").style.display = "block";
};

//удаляет DIV`ы с увеличенной картинкой и затемнением
var closeDiv = function (){
    document.getElementById("popup_wrapper").style.display = "none";
}
