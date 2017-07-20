// Basic init
const electron = require('electron');
const { app, BrowserWindow } = electron;
const path = require('path');

// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname);

// To avoid being garbage collected
let mainWindow;

app.on('ready', () => {
  let mainWindow = new BrowserWindow({
  	width: 800,
  	height: 200,
  	backgroundColor: '#312450'
  });
  mainWindow.webContents.openDevTools();
  mainWindow.loadURL(`file://${__dirname}/build/index.html`);
})