/**
 * 导航菜单
 * win  是通过主进程穿进来的，是当前窗口的菜单
 */
export function navigation(win) {
    // 在主进程中设置
    const Menu = require('electron').Menu;
    let templateArr = [
        {
            label: '控制窗口',
            submenu: [
                {
                    label: "重置缩放",
                    role: "resetzoom"
                },
                {
                    label: '页面增大',
                    role: 'zoomin'
                },
                {
                    label: '页面减小',
                    role: 'zoomout'
                },
                {
                    label: "重新加载",
                    role: "reload"
                },
                {
                    label: "变成全屏",
                    role: "togglefullscreen"
                },
                {
                    label:"退出",
                    role:"quit"
                }
            ]
        },
        {
            label: "多级菜单",
            submenu: [
                {
                    label: '菜单1', submenu: [
                        { label: '菜单1-2' }
                    ]
                },

                { label: "菜单1-2" }
            ]
        },
        {
            label: "事件",
            submenu: [
                {
                    label: "点击触发", click() {
                        win.webContents.send('main-menu-click', '点击了主菜单事件')
                    }
                }
            ]
        }
    ]

    if (process.platform === 'darwin') {
        //  mac下 第一个菜单需要留出来，因为Mac会自动帮用户设置第一个菜单。
        //  通过判断是否为mac系统，来插入一个空的菜单
        templateArr.unshift({ label: "" })
    }
    let menu = Menu.buildFromTemplate(templateArr) ;  //  创建菜单对象
    Menu.setApplicationMenu(menu);//  设置系统菜单
}
export function menuMainConfig(){
    // 在主进程中设置
    win = new BrowserWindow({
        //  隐藏菜单
        autoHideMenuBar:true,
      })
}