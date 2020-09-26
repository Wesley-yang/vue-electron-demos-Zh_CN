export function menu() {
    const { Menu } = window.require("electron").remote;
    const menu = Menu.buildFromTemplate([
        {
            label: "多级菜单",
            submenu: [
                {
                    label: "一级菜单",
                    submenu: [
                        { label: "二级菜单" }
                    ]
                },
                { label: "一级菜单" }
            ]
        },
        {
            label: "刷新",
            role: "reload"
        },
        {
            label: "开发者工具",
            role: "toggledevtools",
        },
        {
            type: "type设置",
            type: "separator"
        },
        {
            label: "触发事件",
            click() {
                alert("右键菜单事件");
            },
        },
    ]);
    window.oncontextmenu = function (e) {
        e.preventDefault();
        //  固定菜单默认显示在当前窗口所在位置。
        menu.popup();
    };
}