"use strict";

var ViteJS = require("vite.js");

var _ref = new ViteJS({
  name: "vitejs-template",
  port: 8080,
  log: true,
  mongo: "",
  viewsDir: "/Users/soham/Desktop/Vite/src/test/vitejs/views",
  publicDir: "/Users/soham/Desktop/Vite/src/test/vitejs/public"
}),
    app = _ref.app;