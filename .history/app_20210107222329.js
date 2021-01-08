const {
  app,
  BrowserWindow,
  Menu
} = require('electron')

let win
let url

if (process.env.NODE_ENV === 'DEV') {
  url = 'http://localhost:8080'
} else {
  url = `file://${process.cwd()}/dist/index.html`
}

// let mainWindow
// const Menu = electron.Menu
// function createWindow () {
// 　// 隐藏菜单栏
//   Menu.setApplicationMenu(null)
//   // Create the browser window.设置窗口宽高，最小宽高，图标等
//   mainWindow = new BrowserWindow({ width: 800, height: 600, minWidth: 1280, minHeight: 800, resizable: false, allowRunningInsecureContent: true, experimentalCanvasFeatures: true, icon: './favicon.ico'})
//   mainWindow.loadURL("http://www.nlfit.cn/saas/index.html#/login")
 
//   mainWindow.on('closed', function () {
//     mainWindow = null
//   })
// }

function createWindow() {
  Menu.setApplicationMenu(null)
  app.dock.hide();
  // Create the browser window.
  win = new BrowserWindow({
    width: 1100,
    height: 800,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'),
      nodeInteration: true
    }
  })

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