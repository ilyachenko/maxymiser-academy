'use strict';

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
            if (node.className.length === 0){
                node.className = classToAdd;
            }
            else {
                node.className += " " + classToAdd;
            }
        }
    },
    hasClass: function (node, classToCheck) {
        var classes = [].slice.call(node.classList);
        if (classes.indexOf(classToCheck) != -1) {
            return true;
        }
        else return false;
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
    },
    previousElementSibling: function( el ) {
        if( el.previousElementSibling ) {
            return el.previousElementSibling;
        } else {
            while( el = el.previousSibling ) {
                if( el.nodeType === 1 ) return el;
            }
        }
    }
};




/**
 * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
 * on host objects like NamedNodeMap, NodeList, and HTMLCollection
 * (technically, since host objects have been implementation-dependent,
 * at least before ES6, IE hasn't needed to work this way).
 * Also works on strings, fixes IE < 9 to allow an explicit undefined
 * for the 2nd argument (as in Firefox), and prevents errors when
 * called on other DOM objects.
 */
(function () {
    'use strict';
    var _slice = Array.prototype.slice;

    try {
        // Can't be used with DOM elements in IE < 9
        _slice.call(document.documentElement);
    }
    catch (e) { // Fails in IE < 9
        Array.prototype.slice = function (begin, end) {
            var i, arrl = this.length, a = [];
            // Although IE < 9 does not fail when applying Array.prototype.slice
            // to strings, here we do have to duck-type to avoid failing
            // with IE < 9's lack of support for string indexes
            if (this.charAt) {
                for (i = 0; i < arrl; i++) {
                    a.push(this.charAt(i));
                }
            }
            // This will work for genuine arrays, array-like objects,
            // NamedNodeMap (attributes, entities, notations),
            // NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
            // and will not fail on other DOM objects (as do DOM elements in IE < 9)
            else {
                // IE < 9 (at least IE < 9 mode in IE 10) does not work with
                // node.attributes (NamedNodeMap) without a dynamically checked length here
                for (i = 0; i < this.length; i++) {
                    a.push(this[i]);
                }
            }
            // IE < 9 gives errors here if end is allowed as undefined
            // (as opposed to just missing) so we default ourselves
            return _slice.call(a, begin, end || a.length);
        };
    }
}());

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
        if ( this === undefined || this === null ) {
            throw new TypeError( '"this" is null or not defined' );
        }

        var length = this.length >>> 0; // Hack to convert object.length to a UInt32

        fromIndex = +fromIndex || 0;

        if (Math.abs(fromIndex) === Infinity) {
            fromIndex = 0;
        }

        if (fromIndex < 0) {
            fromIndex += length;
            if (fromIndex < 0) {
                fromIndex = 0;
            }
        }

        for (;fromIndex < length; fromIndex++) {
            if (this[fromIndex] === searchElement) {
                return fromIndex;
            }
        }

        return -1;
    };
}