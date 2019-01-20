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

Marvel in the glory of your server by running it from the command line:
```
node server
```
It will display a message that confirms it is running and then point your browser to: [localhost:3030](http://localhost:3030)

🙌 You should see your page load

Let's add a logger to the server so we can see the activity as requests are made:

```sh
$ npm i morgan
```

Add the following to the `server.js` file:

```javascript
const morgan = require('morgan');

app.use(morgan('dev'));
```

Now when you run your server you should see each request in your terminal and some statistics about how well your server is performing.

## Let's create an AWESOME 💪 website 

We are going to do some test driven development (TDD).  There are some tests that have been written that will pass when we have written the correct code.

1. Check that the page is working correctly in your browser.

1. Check that our end to end tests are passing.

At the command line run:
```
$ ./node_modules/.bin/cypress open
```

Observe the tests running 🤞

OH NOOOOooooo!!  You might have ☔️ failing tests. This is ok, don't be too sad. It just means we still have some work to do to make it ✨.  

We are going to need to add some code so that we can get the first test passing. Don't worry about the rest of the test. We will just work on a few tests at a time.

### Get the first test passing

Start with adding HTML to our page in `index.html`.

```html
<body>
    <div class="container">
        <header class="text-center"><h1></h1></header>
        <div class="content"></div>
    </div>
</body>
```

Add a title to the page by typing the title between the `h1` tags. Let's make it say "Hello World".

1. Check that the page is working correctly in your browser.

1. Check that our end to end tests are passing.

At the command line run:
```
$ ./node_modules/.bin/cypress open
```

Observe the tests running, we should now have the first test passing 👏👏👏👏

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
$(`#add-comment-0`).click(function() {
    const text = $(this).prev().val();
    $(`#list-comments-0`).append(`<li>${text}</li>`);
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
    
      ['cat-0.jpg','cat-1.jpg'].map((cat, i) => {
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
```
Now figure out how to make it dynamic so that it displays the different cats.

1. Check that the page is working correctly in your browser.

1. Check that our end to end tests are passing.

## Add some more Catz

There are a bunch of cats on our server. Make a request to the server to get them:

```javascript
$.get('/gimmieCats', cats => {
    // now we can iterate over our cats and show them...
});
```

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


## Add a more robust API

We are going to build out an API that will allow CRUD operations for Images and Comments, and query for comments that belong to images.


## Getting Started
---

Your system already has a tool installed (Loopback) that will let you build Loopback APIs from the command line. We are going to add a loopback project to our project to make it easier for us to build a more robust back end. Scaffold out the files for a loopback API using:

**WARNING: MAKE SURE YOU ARE INSIDE YOUR PROJECT FOLDER WHEN YOU RUN THIS COMMAND!!**

```bash
$ lb
```

Choose the arrow and enter keys to select the following options:

#### What's the name of your application? (select the default)
* <<YOUR APP NAME>>
#### Enter name of the directory to contain the project:
* <<CURRENT FOLDER>>
#### Which version of LoopBack would you like to use? (select the default)
* 3.x (current)
#### What kind of application do you have in mind?
* empty-server (An empty LoopBack API, without any configured models or datasources)

It will start working really hard building files and setting things up. When it gets done you DO NOT need to do any of the on screen additional next steps. We know what we are doing and we just need to review some of the files and make a few adjustments.

## Summary of New Files Created
---

The main files that have been created include some that you should already be familiar with:
```javascript
.editorconfig
.eslintignore
.eslintrc
README.md
.gitignore
```
And then a few that require a brief introduction to usage:

* `server/boot/root.js` - this is the first file Loopback will run.  It is the entry point if you would like to trace applications code runs. It will boot up the server application.
* `server/middleware.development.json` - this will be used to define/configure the middleware that should be used on each request.
* `server/middleware.json` - this is an alternate file that will be used to configure the middleware when the application is running in production mode. You may want to turn off things like debug logs in production.
* `server/server.js` - this contains the main server logic for the Express app and wires up the routing.
* `server/boot/authentication.js` - this contains the authentication mechanisms, and can help secure access to endpoints.

## Files over written

When we ran the tool it over wrote some files. That includes our `server.js`, `index.js` and `.gitignore`.  It's going to be fine to use the new `server.js` but we will want to make a few adjustments to our server. In the `.gitignore` file let's add:

.gitignore
```bash
cypress/screenshots/
cypress/videos/
examples
data.json
```

Making this change will allow us to only keep files we want under version control and not have a bunch of files that we don't want tracked. Don't worry about what it is doing, just trust this change will make our lives easier in the long run.

## Authentication

Loopback has mechanisms to authenticate users, but we will want to disable this so that we will not have to log in (with a username and password) to work with our API. To disable authentication in a Loopback application you can comment out the enableAuth method in `server/boot/authentication.js`. Comment out the line below to turn authentication off.

```javascript
// server.enableAuth();
```

## Progress Check

You can run your application using:

```bash
$ npm start
```

Then in your browser navigate to: [http://localhost:3000](http://localhost:3000)

You will see a status message telling you the uptime of the application. We've lost our cats. No worries, we will get them back.

Next, checkout the [Swagger](https://swagger.io/) interface here: [http://localhost:3000/explorer](http://localhost:3000/explorer)

The Loopback Explorer has not yet created any models, but it has provided an interface that documents our api, and will allow us to do some CRUD operations.

## Middleware
---

Loopback makes it easy to add middleware without touching code. You add middleware modules in a two step process.  First you need to install the package using npm, then you configure the middleware in a json object in `server/middleware.json`.

### Add Morgan

Install Morgan using `npm install --save-dev morgan`

Add the following to `server/middleware.json` in the `initial` section of the JSON structure.
```javascript
"morgan": {
   "params": ["dev", { "buffer": true } ]
 }
```

## Serve Static

It is common to serve both your website and an API on the same server. Rather than have to make any special routes or use templates, the fastest way to do this with Loopback is to add middleware to serve up static content. This is similar to how we had it in our basic Express server. All we need to do is add our public folder and fix one of the routes and we will get our cats back. HURAAAY!

This does not even require adding a package, it simply requires setting up a configuration for middleware, and Loopback will wire up Express serve static for us.

Update the `files` part of the JSON structure in `server/middleware.json` to have the following value:

```javascript
"files": {
  "loopback#static": [{
    "params": "$!../client"
  },
  {
    "params": "$!../public"
  }]
}
```

The `$!..` in this case, is Loopback syntax to map the root folder of the project. Now any files that you add to the client folder, will be served at the `/` path of your server.

Add a simple `index.html` page to the `client` folder so something will be displayed when users navigate to the base url.

Comment out the route handler that is showing the status message when we go to `/` in our browser. Since this is happening before our static middleware it is causing our traffic to get redirected to the status message, instead of serving up the `index.html` in our public folder.

server/root.js
```
// router.get('/', server.loopback.status());
```

Test your site in the browser and ensure you can see your cats again.

## Add a datasource

Let's add a way for us to store our data. Loopback calls this a `DataSource`. We will keep ours simple and use an in memory datasource that requires very little configuration. It will however "forget" data if we restart our server. So we will use a small trick to make it save our data to disk.

#### Enter the datasource name: 
* memory
#### Select the connector for memory: (Use arrow keys)
* In-memory db (supported by StrongLoop)
#### window.localStorage key to use for persistence (browser only): (leave empty)
<<PRESS ENTER>>
#### Full path to file for persistence (server only):
* data.json

Our server is now fully configured to have a the ability to store data peristently. This is a light weight and easy setup, but it is not designed for production use. We will need to add a real database later when we are ready to deploy to the web.

## Adding Models
---

Models are used to define data objects for our API to store and retrieve. Here, we'll be adding two models: `Image` and `Comment`.

Add a model using 
```bash
$ lb model
```

...with the following options:

#### Select the data-source to attach `Comment` to:
* memory (memory)
#### Select model's base class
* PersistedModel
#### Expose `Comment` via the REST API
* Yes
#### Custom plural form
* Press Enter and Accept Default
#### Common model or server only
* Common

Then, enter the properties and types as follows:

Note: they do not need to be required or have default values

```
name: text, type: string
name: username, type: string
```

When you have added the last one hit enter at the name prompt and it will exit out of the CLI.

Use that same process to add a new model called `Image` with the following schema:
```
name: fileName, type: string
name: description, type: string
name: featured, type: boolean
```

Then, return to the Loopback Explorer and check out the new API endpoints you have created and have documented.

Test adding some values using the Loopback Explorer (try the POST and DELETE methods). Make sure once you have added data you can also do a GET and see your data.

Also, be sure that you can turn off the server, start it again and see your data persist.

## Insert Images using the Explorer
---

Using the POST method in the Loopback Explorer create the Image records in our database we will need to display 4-5 cats in our app. It's ok to guess here!! This data will eventually allow us to replace our `gimmieCatz` endpoint with our new model.

## Create Relationships
---

There are many types of relationships provided by Loopback. The most common is a one-to-many, which loopback calls a [HasMany](https://loopback.io/doc/en/lb3/HasMany-relations.html) relationship. It is described this way, but it is also attainable by using [BelongsTo](https://loopback.io/doc/en/lb3/BelongsTo-relations.html) or defining the many-to-one side. Review the documentation [here](https://loopback.io/doc/en/lb3/Creating-model-relations.html) to see more examples.


Let's add a relation between the images and comments by using the following command in the CLI:
```bash
$ lb relation
```

#### Select the model to create the relationship from:
* `image`
#### Relation type:
* has many
#### Choose a model to create a relationship with: 
* `comment`
#### Enter the property name for the relation:
* Press Enter to accept the default comments
### Optionally enter a custom foreign key:
* Press Enter to accept none
### Require a through model?
* No
Enter through the remaining options to accept all defaults

Note: Through models are useful when you have a many-to-many relationships.  Loopback has a [HasManyThrough](https://loopback.io/doc/en/lb3/HasManyThrough-relations.html) relation type that makes it simple to achieve many-to-many and expose the correct endpoints auto-magically.

Next, using the Loopback Explorer review the new API endpoints. You should now see that you can add comments through an `image` endpoint [http://localhost:3000/explorer/#!/image/image_prototype_create_comments](http://localhost:3000/explorer/#!/image/image_prototype_create_comments)

Also look at the POST (/comment) and note that the schema changed. Without any intervention on our end the Loopback CLI has added a `imageId` field for us. WOW!

## Insert Comments using the explorer
---

Using the explorer use the `image` id to insert a few comments onto any of the images:

Now, use the GET (GET /images/{id}/comments) to query for all the comments on one of the images.

Next, try deleting a `images` that has comments, what happens?

## Hook up the front end to the backend

Now that you have the backend working. Let's update our website. We will want it to load images and comments.  Also it should  post any new comments when a user clicks on the add button.

**NOTE: you may need to do some refactoring of your app to make sure you have UNIQUE ids for comments (and images possibly).**

### Change way we get data
At a high level you will want to do the following:
1. When the user loads the page you will need to fetch all the images and comments
1. Programatically insert them onto the page

### Post new data

At a high level you will want to do the following:
1. When the user clicks the add button POST the data to your backend
1. Refresh the page
1. Load images and comments from the server

Once those steps are done, test your server.

## Adding MongoDB

Quickly review the docs here for [MongoDB connector](http://loopback.io/doc/en/lb3/MongoDB-connector.html) and then let's add MongoDB as a datasource so that our application will persist data to a database instead of the memory and file. At the command line let's start adding a new datasource using:

```bash
$ lb datasource
```

#### Enter the data-source name: 
* MongoDB
#### Select the connector for MongoDB:
* MongoDB (supported by StrongLoop)
#### All the other options
Enter through the remaining options to accept all defaults

Note: The last thing Loopback did for us was install the loopback-connector-mongodb package from npm (this is the system Loopback will use as a "plugin" and translate between Looback and the database driver)

Finally, we will need to update our models to use our new connector name: `MongoDB` in the `model-config.json`.  Note that this is needed because we originally chose the option of in memory. Update it to replace `db` with `MongoDB` to match the new datasource.

```javascript
"image": {
  "dataSource": "MongoDB",
  "public": true
},
"comment": {
  "dataSource": "MongoDB",
  "public": true
}
```
Note: Once this is setup, be sure you have an instance of MongoDB running when your app starts or it will crash.

Now you should be able to stop and start the server, and the data should persist. Give it a try.

Another way to test it out is to add a new `image` using the Loopback Explorer, and then do a GET (/images) look a the `id` Loopback creates by default.  It should look like a MongoDB ObjectID ie. 59b9a3aa474ecd50f081578f


## Configuring
---

By default we have mainly been assuming that development and production modes are the same, however in the real world, you may have separate databases, or configurations used when you run your app in production vs. in development. Another neat feature of Loopback is that it assumes file names will follow patterns.  So for example if you want to setup a configuration to only apply when the environment is development you could add the contents of the JSON file to `config.development.js` like this:

```javascript
module.exports = {
  "restApiRoot": "/api",
  "host": "0.0.0.0",
  "port": 3000
}
```
Loopback will look for this file, and use it (if it detects you are running in the default development mode). Then you could dynamically set the port, or host values like this:
```javascript
{
  "restApiRoot": "/api",
  "host": process.env.HOST,
  "port": process.env.PORT
}
```

This will come in really handy if you deploy your application and need to set the port and host name dynamically. Be cautious, you may still need to keep a config.json file around, even though the settings will be overridden by either a `config.development.js` or `config.production.js`.

### Configure DataSources

Notice that Loopback previously created a file for us called `datasources.json`. If you open the file, there should be two datasources listed, one for in memory storage called `db` and one that you created called `MongoDB`. This will work fine locally, but how about if you want to deploy your app to production?

You will need to create two files in the `/server` directory: `datasources.local.js` and `datasources.production.js`.

Move the contents of your `datasources.json` file to your `datasources.local.js` file and export them like this:

```javascript
module.exports = {
  "db": {
    "name": "db",
    "connector": "memory"
  },
  "MongoDB": {
    "url": "mongodb://localhost:27017",
    "name": "MongoDB",
    "connector": "mongodb"
  }
}
```
Your `datasources.json` file should contain an empty object like this:
```javascript
{}
```
You can leave your `datasources.production.js` file empty for now, we will need it when we deploy our applicaton to Heroku later in the lesson.

Note: you still need to keep a datasources.json file around, even though the settings will be overridden by either a `datasources.local.js` or `datasources.production.js`.

## Deploy your app to Heroku

Using what you have learned earlier push your app to Heroku and see what happens.

Here are some helpful hints for deploying a Loopback app to Heroku with mongoDB:

* You will need to create a configuration variable in Heroku to let Loopback know that it's running in a production environment. The Heroku dashboard makes it easy to add and remove [config vars](https://devcenter.heroku.com/articles/config-vars). Find your config vars and add this one: `ENV=production`.

* Since we are using mongoDB as our database for this application, we need to have an instance of mongoDB running on our production server. We can accomplish this using the Heroku add-on for [mLab](https://www.mlab.com). Have an instructor help you find your add-ons through the Heroku dashboard, and add mLab. Make sure you provision a free (sandbox) plan.

Earlier in the lesson, you created a `datasources.production.js` file. Open it up and insert the following code:

```javascript
module.exports = {
  "MongoDB": {
    "name": "MongoDB",
    "connector": "mongodb",
    "url": process.env.MONGODB_URI
  }
}
```

Note: the `MONGODB_URI` config variable was created auto-magically when we added mLab. Go look at your config vars in Heroku to see the magic!

Once you have made this change, push your project to the Github master branch, let CircleCI run your tests, and then it should automatically deploy to Heroku. Check out your Loopback API explorer at your-app-name.herokuapp.com/explorer.
