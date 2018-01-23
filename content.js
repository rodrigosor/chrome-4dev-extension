!(function () {

    'use strict';

    var element;

    var RIGHT_MOUSE_BUTTON = 2;

    var set = function (element, original, value, replace) {

        if (!replace) {

            var ss = element.selectionStart,
                se = element.selectionEnd;

            return original.substr(0, ss) + value + original.substr(se, (original.length - 1));
        }

        return value;
    }

    document.addEventListener('mousedown', function (ev) {

        if (ev.button == RIGHT_MOUSE_BUTTON) element = ev.target;

    }, true);

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

        if (element.nodeName === "DIV") {

            element.innerHTML = set(element, element.innerHTML, request.value, request.replace);

        } else {

            element.value = set(element, element.value, request.value, request.replace);
        }

        element.blur();

        element.focus();

    });

})();