FlashMessage = (function () {
    var hideDelay = 4500;

    function init() {
        $(document).ready(function($) {
            setTimeout(function() { $('.alert').show('slow').delay(hideDelay).hide('fast'); }, 500);

            listenIncomingMessages();
        });
    }

    /**
     * Listen to AJAX responses and display messages if they contain some
     */
    function listenIncomingMessages() {
        $(document).ajaxComplete(function(event, xhr, settings) {
            var data = $.parseJSON(xhr.responseText);

            if (data.messages) {
                var messages = data.messages;

                var i;

                if (messages.error) {
                    for (i = 0; i < messages.error.length; i++) {
                        addError(messages.error[i]);
                    }
                }

                if (messages.success) {
                    for (i = 0; i < messages.success.length; i++) {
                        addSuccess(messages.success[i]);
                    }
                }
            }
        });
    }

    function addSuccess(message) {
        var flashMessageElt = getBasicFlash(message).addClass('alert-success');

        addToList(flashMessageElt);
        display(flashMessageElt);
    }

    function addError(message) {
        var flashMessageElt = getBasicFlash(message).addClass('alert-error');

        addToList(flashMessageElt);
        display(flashMessageElt);
    }

    function addInfo(message) {
        var flashMessageElt = getBasicFlash(message).addClass('alert-info');

        addToList(flashMessageElt);
        display(flashMessageElt);
    }

    function getBasicFlash(message) {
        var flashMessageElt = $('<div></div>')
            .hide()
            .addClass('alert')
            .append(getCloseButton())
            .append($('<div></div>').html(message))
        ;

        return flashMessageElt;
    }

    function getCloseButton() {
        var closeButtonElt = $('<button></button>')
            .addClass('close')
            .attr('data-dismiss', 'alert')
            .html('&times')
        ;

        return closeButtonElt;
    }

    function addToList(flashMessageElt) {
        flashMessageElt.appendTo($('#flash-messages'));
    }

    function display(flashMessageElt) {
        setTimeout(
            function() {
                flashMessageElt
                    .show('slow')
                    .delay(hideDelay)
                    .hide('fast', function() { $(this).remove(); } )
                ;
            },
            500
        );
    }

    return {
        init: init,
        addSuccess: addSuccess
    };
})();
