# InztaCatz

- A simple photo app clone for 😻 enthusiasts.

## Let's create a rock solid server

Create two files inside the server folder:

`server.js`

```javascript
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/gimmieCats', (req, res) => {
    res.json([
      'cat-0.jpg',
      'cat-1.jpg',
      'cat-2.jpg',
      'cat-3.jpg',
      'cat-4.jpg'
    ]);
});
module.exports = app;
```

`index.js`

```javascript
const server = require('./server');

server.listen(3030, () => console.log('Server is listening on port 3030!'));

```

## Let's create an Awesome website

We are going to do some test driven development (TDD).  There are some tests that have been written that will pass when we have written the correct code.

Start by running the tests:

At the command line enter the following command:

```
$ ./node_modules/.bin/cypress open
```

You should see a browser open and the tests will start running. They will all fail since we have not written code to make the site yet.

### Next, we'll get the first test passing

Start with adding HTML to our page.

```html
<body>
    <div class="container">
        <header class="text-center"><h1></h1></header>
        <div class="content"></div>
    </div>
</body>
```

Add a title to the page by typing the title between the `h1` tags. Let's make it say "Hello World".

#### Test that your website is working.

1. Check that the page is working correctly in your browser.

1. Check that our end to end tests are passing.

Observe the tests running 🤞

You should have many failing tests. This is ok, don't be sad. It means we still have some work to do. Make changes to your site so that you can get the first test passing. Don't worry about the rest of the test. Just do the first one.

### PASS TEST #2 & #3

Let's get this thing looking more special. Add HTML to display a single cat photo and the input fields in side the `div` that has a class `content`:

```html
<div>
    <img src="cat-images/cat-01.jpg" />
    <button class="unlike" id="hide-0">Unlike</button>
    <button class="like" id="show-0">Like! </button>
    <div class="comment">
        <input id="comment-0"/>
        <button id="add-comment-0">add</button>
    </div>
    <ul id="list-comments-0"></ul>
</div>
```

Add the following **_inside_** the like `button` tags:

```html
<span id="cat-0" style="display:none">❤️</span>
```

Add the code that makes the like buttons interactive in a `script` tag:

```javascript
<script>
$(document).ready(function() {
    $(`#hide-0`).click(function() {
        $(`#cat-0`).hide();
    });

    $(`#show-0`).click(function() {
        $(`#cat-0`).show();
    });
});
</script>
```

Add the code for the comment box:

```javascript
$(`#add-comment-${i}`).click(function() {
    const text = $(this).prev().val();
    $(`#list-comments-${i}`).append(`<li>${text}</li>`);
    $(this).prev().val('');
});
```

1. Check that the page is working correctly in your browser.

1. Check that our end to end tests are passing.

### PASS TEST #4

Inside our document read we want to loop over all the cats and replace the html programatically.

We need to relocate the code between: `<div class="content"></div>` and place it inside of our script.

Add the following to our `script`:

```javascript
$(document).ready(function() {
    $.get('/gimmieCats', cats => {
        cats.map((cat, i) => {
        $('.content').append(`
            <div>
                <img src="cat-images/cat-0.jpg" />
                <button class="unlike" id="hide-0">Unlike</button>
                <button class="like" id="show-0">Like! </button>
                <div class="comment">
                    <input id="comment-0"/>
                    <button id="add-comment-0">add</button>
                </div>
                <ul id="list-comments-0"></ul>
            </div>`
        );
    
        $(`#hide-0`).click(function() {
            $(`#cat-0`).hide();
        });
    
        $(`#show-0`).click(function() {
            $(`#cat-0`).show();
        });

        $(`#add-comment-0`).click(function() {
            const text = $(this).prev().val();
            $(`#list-comments-0`).append(`<li>${text}</li>`);
            $(this).prev().val('');
        });
        });
    });
});
```
Now figure out how to make it dynamic so that it displays the different cats.

1. Check that the page is working correctly in your browser.

1. Check that our end to end tests are passing.

## Add some more Catz

What do you need to do to add more cats?

Add at least 5 more cats to the app.

## Deploy the Website

Update your server file so that the port is passed dynamically.

Adding:
```javascript
const PORT = process.env.PORT || 3030;
```
and replacing the port number with the variable `PORT` should do the trick.

```
$ heroku create app
```

```
$ git push heroku master
```

## Create more End to End Tests

Edit the `cypress/integration/cat.spec.js` and add a few more tests.

## Create a Database

1. Install loopback
1. Create a single model
1. Setup in memory data source
1. Add Persistance with a data file