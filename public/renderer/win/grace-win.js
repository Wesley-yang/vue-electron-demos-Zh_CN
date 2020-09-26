/**
 * 创建一个普通窗口
 */
export function createGraceWin() {
    const { BrowserWindow } = window.require('electron').remote;
    const path = window.require('path');
    const html = path.join('file://', __static, '/html/win/grace-win.html')
    let win = new BrowserWindow({
        width: 400,
        height: 300,
        //  先隐藏窗口
        show: false
    })
    win.on('close', () => win = null);
    win.loadURL(html)
    win.once('ready-to-show', () => {
        //  渲染完成后在显示窗口
        win.show()
    })
}