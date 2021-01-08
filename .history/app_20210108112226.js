const {
  app,
  BrowserWindow
} = require('electron')



function createWindow() {
  let win
  let url

  if (process.env.NODE_ENV === 'DEV') {
    url = 'http://localhost:8080'
  } else {
    url = `file://${process.cwd()}/dist/index.html`
  }¬
  // 隐藏菜单
  // Menu.setApplicationMenu(null)
  // app.dock.hide()
  // Create the browser window.
  win = new BrowserWindow({
    width: 1100,
    height: 800,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'),
      nodeInteration: true
    }
  })

  if
  win.webContents.openDevTools();

  // and load the index.html of the app.
  win.loadURL(url)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  win.on('close', () => {
    win = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

//for mac os 
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})