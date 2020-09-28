/**
 * 原生h5的系统通知
 */
export function h5Notice() {
    Notification.requestPermission(function (status) {
        if (status === 'granted') {
            //  判断用户是否授权，electorn默认授权状态，所以这里判断是多余的
            let notification = new Notification(
                'title', {
                body: "HTML5系统通知 - 前端伪大叔报道！"

            })
        } else {
            console.log('用户拒绝');
        }
    })
}

/**
 * electron内置系统通知
 */

export function electronNotice(){
    const { Notification} = window.require('electron').remote;
    let notification = new Notification({
        title:"title",
        body:"Electron内置主进程系统通知 - 前端伪大叔报道！"
    })
    //  主进程的必须调用show才会执行
    //  或者把show才拆出去调用
    notification.show();
    notification.on('click',()=>{
        console.log('用户点了系统通知');
    })
 }