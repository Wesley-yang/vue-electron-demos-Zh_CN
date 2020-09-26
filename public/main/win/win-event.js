/**
 * win窗口事件
 */
export function winEvent(win){
    win.on('close',()=>{
        console.log('not');
    })
}