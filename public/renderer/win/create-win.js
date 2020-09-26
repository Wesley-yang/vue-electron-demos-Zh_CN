/**
 * 创建一个普通窗口
 */
export function createWin(){
    const { BrowserWindow } = window.require('electron').remote;
    const path = window.require('path');
    const html = path.join('file://',__static,'/html/win/create-win.html')
    let win = new BrowserWindow({
        //  窗口的宽高
        width:400,
        height:300
    })
    win.on('close',()=> win = null);
    win.loadURL(html)
}