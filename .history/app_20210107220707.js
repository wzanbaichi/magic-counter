const {
  app,
  BowserWindow
} = require('electron');

let win;
let url;

if (process.env.NODE_ENV === 'DEV') {
  url = 'http://localhost:8080';
} else {
  url = `file://${process.cwd()}/dist/index.html`;
}

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}
