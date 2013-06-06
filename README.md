AretusaFlashBundle
==================

A Symfony2 bundle to easily handle Ajax "flash messages" (those messages that show that everything went well when a form has been successfully submitted (success message), or conversely when the form was not valid (error message).

Symfony2 handles such Flash messages in the session out of the box so that they can be displayed after a redirection for instance.

With this bundle, if the request is an AJAX one (a form submitted in Javascript for instance), the flash messages will be automatically added to the JSON response and handled by a script file to be displayed to the user.

More information here: http://blog.michaelperrin.fr/2013/03/07/notification-flash-messages-for-json-responses-with-symfony2/
