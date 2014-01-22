var emails = ['author@mail.com', 'foo@mail.com', 'tester@mail.com'];
var dom = {
    addEvent: function (obj, event_name, handler) {
        var handler_wrapper = function (event) {
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
    },
    addClass: function (node, classToAdd) {
        var classes = [].slice.call(node.classList);
        if (classes.indexOf(classToAdd) == -1) {
            node.className += " " + classToAdd;
        }
    },
    hasClass: function (node, classToCheck) {
        var classes = [].slice.call(node.classList);
        if (classes.indexOf(classToCheck) != -1) {
            return true;
        }
    },
    removeClass: function (node, classToRemove) {
        if (!dom.hasClass((node), classToRemove)) return;
        var classIndex = function () {
            var classes = [].slice.call(node.classList);
            return classes.indexOf(classToRemove)
        };

        while (classIndex() != -1) {
            node.classList.remove(classToRemove);
        }
    },
    insertAfter: function (referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
};

var validator = {
    form: {},
    init: function (form) {
        this.form = form;
        //var require_nodes = document.getElementsByClassName("required");
        var nodes = document.getElementsByClassName("required");
        for (var i = 0; i < nodes.length; i++) {
            var input = nodes[i].getElementsByTagName('input')[0];
            switch (input.type) { //email , password , checkbox
                case "email":
                    dom.addEvent(input, 'blur', validator.validateMail);
                    dom.addEvent(input, 'keydown', validator.checkInput);
                    break;
                case "password":
                    dom.addEvent(input, 'blur', validator.validatePassword);
                    dom.addEvent(input, 'keydown', validator.checkInput);
                    break;
                case "checkbox":
                    dom.addEvent(input, 'click', validator.validateCheckbox);
                    break;
            }
        }
    },
    checkInput: function(){
        var nodeDiv = this.parentElement;
        if (nodeDiv.getElementsByClassName("alert alert-danger").length > 0){
            if (this.type === "password"){
                validator.validatePassword.apply(this);
            }
            else if(this.type === "email"){
                validator.validateMail.apply(this);
            }
        }
    },
    validateMail: function () {
        validator.removeAlert(this);
        if (!/(^[a-zA-Z0-9\.\-\_]*).{1}@([a-zA-Z0-9\-\_]*).{1}\.([a-zA-Z0-9]*).{1}$/.test(this.value)) {
            var alert = validator.initAlert(this, "Введен неправильный email");
            dom.insertAfter(this, alert);
        }
        else if (emails.indexOf(this.value) !== -1) {
            var alert = validator.initAlert(this, "Пользователь с таким email уже существует");
            dom.insertAfter(this, alert);
        }
        validator.checkBtn(this);
    },
    validatePassword: function() {
        validator.removeAlert(this);
        if(!/(^[a-zA-Z0-9\-\_]*).{5}$/.test(this.value)){
            var alert = validator.initAlert(this, "Пароль содержит запрещенные символы (разрешенные - латинские буквы, цифры, подчеркивание, минус) или меньше пяти символов");
            dom.insertAfter(this, alert);
        }
        validator.checkBtn(this);
    },
    validateCheckbox: function() {
          validator.checkBtn(this);
    },
    initAlert: function (node, str) {
        dom.addClass(node.parentElement, "has-error");
        var div = document.createElement("div");
        div.className = "alert alert-danger";
        div.innerHTML = str;
        return div;
    },
    removeAlert: function (node) {
        dom.removeClass(node.parentElement, "has-error");
        if (node.nextSibling.className === "alert alert-danger") {
            var node_for_remove = node.nextSibling;
            node.parentNode.removeChild(node_for_remove);
        }
    },
    checkBtn: function(node) {
        var form = this.form;
        var btn = form.getElementsByClassName("btn btn-primary")[0];
        var checked = false;
        var nodes = form.getElementsByClassName("required");
        for(var i=0; i<nodes.length;i++){
            var node = nodes[i].getElementsByTagName("input")[0];
            if ((node.type === "password" || node.type === "email") && node.value.length === 0){
                break;
            }
            else if (node.type === "checkbox"){
                if (node.checked){
                    checked = true;
                    break;
                }
            }
        }

        if (form.getElementsByClassName("alert alert-danger").length>0 || !checked){
            dom.addClass(btn, "disabled");
        }
        else {
            dom.removeClass(btn, "disabled");
        }
    }
};

(function () {

    var form = document.getElementsByTagName("form")[0];
    validator.init(form);


})();
