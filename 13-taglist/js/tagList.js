



var tagList = {
    generalNode: null,
    init: function(node, tags){
        this.generalNode = node;
        var a = document.createElement("a");
        var linkText = document.createTextNode("Редактировать теги");
        a.appendChild(linkText);
        a.href = "#";
        dom.addEvent(a, 'click', this.onClickEdit);
        node.appendChild(a);

        var div = document.createElement("div");
        dom.addClass(div, "tags");
        div.style.paddingBottom = '10px';
        node.appendChild(div);

        var div = document.createElement("div");

        var inputWrapper = document.createElement("div");
        inputWrapper.style.display = 'none';
        dom.addClass(inputWrapper, 'inputWrapper');
        var input = document.createElement("input");
        var btn = document.createElement("button");
        btn.appendChild(document.createTextNode('Добавить'));
        dom.addEvent(btn, 'click', this.onClickAddTag);
        inputWrapper.appendChild(input);
        inputWrapper.appendChild(btn);
        node.appendChild(inputWrapper);
    },
    onClickEdit: function(){
        var inputWrapper = this.parentElement.querySelector('.inputWrapper');
        var tags = this.parentElement.querySelectorAll('.badge');
        if (this.className === "finish"){
            this.innerHTML = "Редактировать теги";
            this.className = "";
            inputWrapper.style.display = 'none';
            for (var i=0; i<tags.length; i++){
                tags[i].style.display = 'none';
            }
        }
        else {
            this.innerHTML = "Завершить редактирование";
            dom.addClass(this, 'finish');
            inputWrapper.style.display = 'block';
            for (var i=0; i<tags.length; i++){
                tags[i].style.display = 'inline-block';
            }
        }
    },
    onClickAddTag: function(){
       if (dom.previousElementSibling(this).value.length != 0){
           var tags = this.parentElement.parentElement.querySelector('.tags');
           var tag = document.createElement("div");
           var span = document.createElement("span");
           dom.addClass(span, 'label label-primary');
           span.appendChild(document.createTextNode(dom.previousElementSibling(this).value));
           var close = document.createElement("a");
           var icon = document.createElement('span');
           icon.appendChild(document.createTextNode('x'));
           dom.addClass(icon, 'badge');
           close.appendChild(icon);
           //close.appendChild(document.createTextNode('<span class="glyphicon glyphicon-search"></span>'));
           close.href = "#";
           dom.addEvent(close, 'click', tagList.removeTag);

           tag.appendChild(span);
           tag.appendChild(close);
           tags.appendChild(tag);
           dom.previousElementSibling(this).value = "";
       }
    },
    removeTag: function(){
        var tag = this.parentElement;
        tag.parentNode.removeChild(tag);
    }

}

var node = document.getElementById("firstTagList");
var myFirstTagList = tagList;
myFirstTagList.init(node);

var node = document.getElementById("secondTagList");
var mySecondTagList = tagList;
mySecondTagList.init(node);
