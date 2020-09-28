'use strict'

import { app, protocol, BrowserWindow, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
const { navigation } = require('../public/main/menu/navigation');
const { keyboard } = require('../public/main/menu/key-board')
const { openTray ,clearTray,openSwitchTray ,clearSwitchTray,trayMenu ,removeTaryMenu} = require('../public/main/menu/tray')
// import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1360,
    height: 750,
    //  隐藏菜单
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
    }
  })


  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
  // winEvent(win)
  win.on('closed', () => {
    win = null
  })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  // if (isDevelopment && !process.env.IS_TEST) {
  //   // Install Vue Devtools
  //   try {
  //     await installExtension(VUEJS_DEVTOOLS)
  //   } catch (e) {
  //     console.error('Vue Devtools failed to install:', e.toString())
  //   }
  // }
  createWindow()
  navigation(win)
  keyboard(win)
  // trayIcon()
  
  ipcMain.on('main-menu',(event,param)=>{
    console.log(param);
    if(param === 'ok'){
      trayMenu(win)
    }else if(param === 'no'){
      removeTaryMenu()
    }
  })
  
  ipcMain.on('opne-only-tray',(event,param)=>{
    if(param === 'open'){
      openTray()
    }
  })
  ipcMain.on('clear-onlu-tray',(event,param)=>{
    if(param === 'clear'){
      clearTray();
    }
  })
  ipcMain.on('send-tray',(event,parsm)=>{
    console.log('open');
    if(parsm === 'open'){
      openSwitchTray()
    }
  })
  ipcMain.on('clear-tray',(event,param)=>{
    console.log('clear');
    if(param === 'clear'){
      clearSwitchTray()
    }
  })
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
