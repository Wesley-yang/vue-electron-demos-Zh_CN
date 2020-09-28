/**
 * 托盘图标
 */
let showIcon = null;
let switchTrayIcon = null;
export function openTray() {
    const { Tray } = require('electron');
    const path = require('path');

    const iconPath = path.join(__static, 'images', 'tray', 'qq.png')   //  获取图标路径地址
    showIcon = new Tray(iconPath) //  把路径传入即可
}
/**
 * 关闭托盘
 */
export function clearTray() {
    // 关闭托盘
    showIcon.destroy();
}
export function ready() {
    //  需要在主进程 ready 之后调用
    app.on('ready', async () => {
        ipcMain.on('opne-only-tray', (event, param) => {
            if (param === 'open') {
                openTray()
            } else {
                clearTray()
            }
        })
    })
}

/**
 * 开启闪烁
 */
let setinter = null;
export function openSwitchTray() {
    let flag = true;
    const { Tray } = require('electron');
    const path = require('path');
    const icon0 = path.join(__static, 'images', 'tray', 'qq_0.png');
    const icon1 = path.join(__static, 'images', 'tray', 'qq_1.png');;
    switchTrayIcon = new Tray(icon0)
    setinter = setInterval(() => {
        if (flag) {
            switchTrayIcon.setImage(icon0);
            flag = false;
        } else {
            switchTrayIcon.setImage(icon1);
            flag = true;
        }
    }, 300)
}

export function readySwitchTray() {
    //  需要在主进程 ready 之后调用
    app.on('ready', async () => {
        ipcMain.on('send-tray', (event, parsm) => {
            console.log('open');
            if (parsm === 'open') {
                switchTray()
            }
        })
        ipcMain.on('clear-tray', (event, param) => {
            console.log('clear');
            if (param === 'clear') {
                caearTray()
            }
        })
    })
}
/**
 * 关闭闪烁
 */
export function clearSwitchTray() {
    //  关闭闪烁托盘
    switchTrayIcon.destroy();
    clearInterval(setinter)
}

let tray
export function trayMenu(win) {
    const { Tray, Menu ,app} = require('electron');
    console.log(Menu);
    const path = require('path');
    const iconPath = path.join(__static, 'images', 'tray', 'qq.png')   //  获取图标路径地址
    tray = new Tray(iconPath) //  把路径传入即可
    
    //  左键双击
    tray.on('double-click',()=>{
        win.webContents.send('main-tray-click','on')
    })

    //  右键菜单
    let menu = Menu.buildFromTemplate([
        {
            label: "显示界面",
            click() {
                win.show();
            }
        }, 
        {
            label: "退出",
            click() {
                app.quit();
            }
        }
    ])
    tray.setContextMenu(menu)
}

export function removeTaryMenu() {
    tray.destroy()
}