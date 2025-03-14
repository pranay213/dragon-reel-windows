const { app, BrowserWindow } = require('electron');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1920, // Full HD width
        height: 1080, // Full HD height
        fullscreen: true, // Start in full-screen mode
        autoHideMenuBar: true, // Hide menu bar
        kiosk: true, // Prevent user from exiting full-screen mode
        webPreferences: {
            nodeIntegration: false, // Disable Node.js in renderer for security
            contextIsolation: true, // Improve security
            enableRemoteModule: false,
            hardwareAcceleration: true, // Improve performance
        },
    });

    mainWindow.loadURL('https://dragonsreel.com/store/?partnerId=86F988'); // Change to your URL

    mainWindow.webContents.on('did-fail-load', () => {
        mainWindow.reload(); // Reload on failure
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
