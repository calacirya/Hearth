const { app, BrowserWindow } = require('electron');

// Global reference of the window object.
let win;

function createWindow () {
  win = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Load main HTML.
  win.loadFile('index.html');
  // Remove menu bar.
  win.removeMenu();

  // When the window is closed.
  win.on('closed', () => {
    win = null
  });
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  // Fix for MacOS.
  if (win === null) {
    createWindow()
  }
});
