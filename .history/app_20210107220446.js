const {
  app,
  BowserWindow
} = require('electron');

let win;
let url;

if (process.env.NODE_ENV === 'DEV') {
  url = 'local'
}