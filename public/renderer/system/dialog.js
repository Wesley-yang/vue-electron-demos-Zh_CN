/**
 * 系统对话框
 */

 export async function fileDialog() {
     const {dialog,app} = window.require('electron').remote;
     const file =  dialog.showOpenDialog({
        title: "我是标题title", //  标题
        buttonLabel: "点击这里选择", //
        defaultPath: app.getPath("pictures"), //  默认打开地址
        //  特别坑 这里首字母必须大写
        Properties: "multiSelections", //  允许多选  还能设置单选 不能选文件夹
        filters: [
          { name: "图片", extensions: ["jpg", "png", "gif"] },
          { name: "视频", extensions: ["mkv", "avi", "mp4"] },
        ],
      });
      console.log(file);
      console.log(file.canceled);   //  是否取消
      console.log(file.filePaths);  //  文件内容 数组
 }