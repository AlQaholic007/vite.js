# Vite.js

![](.gitbook/assets/banner.png)

![](https://img.shields.io/badge/dependencies-up%20to%20date-lime.svg) 
[![Build Status](https://travis-ci.com/AlQaholic007/vite.js.svg?branch=master)](https://travis-ci.com/AlQaholic007/vite.js)
![](https://img.shields.io/badge/Created%20by-und3fined-v01d-1abc9c.svg) [![Actions Status](https://github.com/AlQaholic007/vite.js/workflows/GitCI/badge.svg?cache=2)](https://github.com/AlQaholic007/vite.js/actions) ![NPM](https://img.shields.io/npm/l/vite.js)

## Welcome

Vite.js is the simplest way for nodejs developers to bootstrap a
web server and thus smoothen the process of project creation.   
Vite.js has a documentation that is super easy to follow

## Features
- Built-in CLI
- Optimized
- Body parsing and Cooky paring
- Built-in logging capabilities
- Session
- Helmet
- Trust proxy
- Plugin with a Mongo Database 
- Express connection
- Production ready

## Install

```bash
$ npm i -g --save vite.js
```

## Basic Use

```js
const ViteJS = require("vite.js");
const { app, database } = new ViteJS({ name: "test" });
```

## Documentation
* [Startup](#startup)
* [Options](#options)
  * [Name](#name)
  * [Port](#port)
  * [Log](#log)
  * [Mongo](#mongo)
  * [Routes](#routes)
  * [View directory](#views)
  * [Public directory](#public)
* [Express](#express)
* [Database](#database)
* [Advanced](#advanced)
  * [EJS](#ejs)
  * [Sessions](#sessions)

### <a name="startup">Startup</a>
```javascript
const ViteJS = require("vite.js");
new ViteJS({ name: "test" });
```

### <a name="options">Options</a>

#### <a name="name">Name</a>
- Kind: String
- Description: Used for logging purposes

```js
new ViteJS({ name: "test" });
```

#### <a name="port">Port</a>
- Kind: Integer (0-65536)
- Description: Port to run web server on
- Default: 8080

```js
new ViteJS({ 
  name: "test",
  port: 8080
});
```

#### <a name="log">Log</a>
- Kind: Boolean
- Description: If set to ```true```, logs path of request, speed and status code sent to the console

```js
new ViteJS({ 
  name: "test",
  port: 8080,
  log: true
});
```

#### <a name="mongo">Mongo</a>
- Kind: String
- Description: MongoDB connection string

```js
new ViteJS({ 
  name: "test",
  port: 8080,
  log: true,
  mongo: "mongodb://localhost:27017/"
});
```

#### <a name="routes">Routes</a>
- Kind: Array
- Description: Assigning routes to the application

```js
new ViteJS({ 
  name: "test",
  port: 8080,
  log: true,
  routes: [
    {
     url:'/route1',
     router: require('./router1.js')
    },
    {
     url:'/route2',
     router: require('./router2.js')
    }
  ],
  mongo: "mongodb://localhost:27017/"
});
```

#### <a name="views">Views Directory</a>
- Kind: String
- Description: Path to the views directory

```js
new ViteJS({ 
  name: "test",
  port: 8080,
  log: true,
  viewsDir: "./views",
  mongo: "mongodb://localhost:27017/"
});
```

#### <a name="public">Public Directory</a>
- Kind: String
- Description: Path to public directory for express for hosting static files

```js
new ViteJS({ 
  name: "test",
  port: 8080,
  log: true,
  publicDir: "./public",
  mongo: "mongodb://localhost:27017/"
});
```

### Express
Under the hood, Vite.js uses express with body parsing and cookie parsing capabilities to start a web server and control it. Additionally, it uses [Helmet](https://www.npmjs.com/package/helmet) to keep the server secure and functional so that you can focus on the development and leave these to Vite.js .
<hr>
There are primarily two methods to access the express server:<br>

- Method 1

```js
const app = require("vite.js").app;
```

- Method 2

```js
const ViteJS = require("vite.js");
const { app } = new ViteJS({ name: "test" });
```

#### Example usage

```js
const ViteJS = require("vite.js");
const { app } new ViteJS({ name: "test" });

app.use(function(req, res, next) {
    req.session.name = "AlQaholic007";
    console.log("Sample use of middlewares with vite.js");
    next();
});

app.get("/", function(req, res) {
    res.status(200).send("This works!");
});

app.post("/body", function(req, res) {
    res.status(200).send(req.body);
});

app.get("/session", function(req, res) {
    res.status(200).send(req.session.name)
});
```

### <a name="database">Database</a>
Vite.js leverages [enmap](https://enmap.evie.dev/v/3/) and enmap-mongo to connect to your mongo database in a fast and easy manner. 
<hr>
Accessing database also has two methods:  

- Method 1

```js
const database = require("vite.js").database;
```

- Method 2

```js
const ViteJS = require("vite.js")
const { database } = new ViteJS({ name: "test" });
```

#### Example usage

```js
const ViteJS = require("vite.js");
const { database } = new ViteJS({ name: "test" });

database.set("AlQaholic007", "Vite.js");

console.log("Welcome to " + database.get("AlQaholic007") + "!");
```

### <a name="advanced">Advanced uses</a>

#### <a name="ejs">EJS</a>

```js
const ViteJS = require("vite.js");
const { app, database } = new ViteJS({
  name: "ejs_setup",
  port: 8080,
  log: true,
  mongo: "mongodb://localhost:27017/",
  viewsDir: "./views",
  publicDir: "./public"
});

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index", { time: new Date() });
});
```

#### <a name="sessions">Sessions</a>

```js
const ViteJS = require("vite.js");
const { app, database } = new ViteJS({
  name: "session_setup",
  port: 8080,
  log: true,
  mongo: "mongodb://localhost:27017/",
  viewsDir: "./views",
  publicDir: "./public"
});

app.set("view engine", "ejs");
app.use(function(req, res, next) {
  req.session.username = "Tester";
  next();
});

app.get("/", function(req, res) {
  res.render("index", { name: req.session.username });
});
```

## Authors

- Soham Parekh <mail@sohamp.dev>

## License

\(The MIT License\)

Copyright \(c\) 2020 Soham Parekh [mail@sohamp.dev](mailto:mail@sohamp.dev)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files \(the 'Software'\), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
