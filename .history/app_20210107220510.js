const {
  app,
  BowserWindow
} = require('electron');

let win;
let url;

if (process.env.NODE_ENV === 'DEV') {
  url = 'http://localhost:8080';
} else {
  url
}