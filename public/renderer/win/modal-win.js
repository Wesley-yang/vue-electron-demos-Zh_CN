/**
 * 创建一个模态窗口
 */
export function createModalWin(){
    const { BrowserWindow } = window.require('electron').remote;
    const path = window.require('path');
    const html = path.join('file://',__static,'/html/win/modal-win.html')
    let win = new BrowserWindow({
        width:400,
        height:300,
        //  创建模态窗口属性
        modal:true
    })
    win.on('close',()=> win = null);
    win.loadURL(html)
}