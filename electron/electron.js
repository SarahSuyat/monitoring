const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Usba ang Line 14 sa ingon ani:
win.loadFile(path.join(__dirname, 'dist/index.html'));
}

app.whenReady().then(createWindow);
win.setMenuBarVisibility(false); // Tangtangon ang menu bar sa taas

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});