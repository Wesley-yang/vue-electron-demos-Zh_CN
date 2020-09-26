/**
 * 创建一个无边框窗口
 */
let win = null;
export function createNoBorderWin(){
    const { BrowserWindow } = window.require('electron').remote;
    const path = window.require('path');
    const html = path.join('file://',__static,'/html/win/no-border-win.html')
    win = new BrowserWindow({
        width:400,
        height:300,
        //  是否有边框属性
        frame:false
    })
    win.on('close',()=> win = null);
    win.loadURL(html)
}
