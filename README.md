AretusaFlashBundle
==================

A Symfony2 bundle to easily handle Ajax "flash messages" (those messages that show that everything went well when a form has been successfully submitted (success message), or conversely when the form was not valid (error message).

Symfony2 handles such Flash messages in the session out of the box so that they can be displayed after a redirection for instance.

With this bundle, if the request is an AJAX one (a form submitted in Javascript for instance), the flash messages will be automatically added to the JSON response and handled by a script file to be displayed to the user.

More information here: http://blog.michaelperrin.fr/2013/03/07/notification-flash-messages-for-json-responses-with-symfony2/


# Installation

Add AretusaFlashBundle in your `composer.json` file:

```js
{
    "require": {
        "aretusa/flash-bundle": "~1.0"
    }
}
```

Now tell Composer to download the bundle by running the command:

``` bash
php composer.phar update aretusa/flash-bundle
```

Composer will install the bundle to your project's `vendor/aretusa` directory.

### Step 2: Enable the bundle

Enable the bundle in the kernel:

``` php
<?php
// app/AppKernel.php

public function registerBundles()
{
    $bundles = array(
        // ...
        new Aretusa\Bundle\FlashBundle\AretusaFlashBundle(),
    );
}
```

### Step 3: Publish assets

``` bash
php app/console assets:install web --symlink --relative
```

### Step 4: Include the messages template

In layout file:

``` twig
{{ include('AretusaFlashBundle::flash-messages.html.twig') }}
```

### Step 5: add assets to your main layout file

Add jQuery as well if it's not already done.

``` twig
{% block javascripts %}
    // ...
    <script src="//code.jquery.com/jquery-2.1.3.min.js" type="text/javascript"></script>
    <script src="{{ asset('bundles/aretusaflash/js/flash-message.js') }}" type="text/javascript"></script>
{% endblock %}
```

``` twig
{% block stylesheets %}
    // ...
    <link href="{{ asset('bundles/aretusaflash/css/flash-message.css') }}" type="text/css" rel="stylesheet" />
{% endblock %}
```

# Usage

Add this call to a script block in your layout or to some of your templates:

```
<script>
$('#flash-messages').flashNotification('init');
</script>
```

