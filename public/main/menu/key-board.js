/**
 * 键盘快捷键
 */
export function keyboard(win) {
    const { globalShortcut } = require('electron');
    //  CommandOrControl  兼容win和mac
    globalShortcut.register('CommandOrControl+K', () => {
        //  主进程给渲染进程发消息触发
        win.webContents.send('main-send-keyboard', 'CommandOrControl+K')
    })
}

// 主进程
export function main() {
    //  主进程 加载完成触发
    app.on('ready', async () => {
        keyboard(win)
    })
}