import { app, BrowserWindow, screen } from "electron";

function createWindow() {
    const display = screen.getPrimaryDisplay();
    const { width } = display.workAreaSize;

    const widgetWidth = 270;
    const widgetHeight = 280;

    const margin = 20;

    const win = new BrowserWindow({
        width: widgetWidth,
        height: widgetHeight,

        frame: false,
        transparent: true,
        resizable: false,

        alwaysOnTop: false,

        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        }
    });

    // Position widget at top-right
    win.setPosition(
        width - widgetWidth - margin,
        margin
    );

    win.loadURL("http://localhost:5173");
}

app.whenReady().then(() => {
    createWindow();
});