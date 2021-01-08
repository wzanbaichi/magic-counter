const {
  app,
  BowserWindow
} = require('electron')

let win
let url

if (process.env.NODE_ENV === 'DEV') {
  url = 'http://localhost:8080'
} else {
  url = `file://${process.cwd()}/dist/index.html`
}

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'),
      nodeInteration: true
    }
  })

  // and load the index.html of the app.
  win.loadUrl(url)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  win.on('close')
}
