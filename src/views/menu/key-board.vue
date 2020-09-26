<template>
  <div>
    <Introduce :title="title" :content="content"></Introduce>
    <p class="code">
      具体内容可以<a
        target="_blank"
        href="https://www.electronjs.org/docs/api/accelerator"
        >查看完整api文档</a
      >
    </p>
    <Collapse>
      <Panel name="1">
        <span>键盘快捷键</span>
        <div slot="content">
          <p class="code">注意：由于键盘事件只在该页面调用alery，所以只能在该页面「打开之后」才能生效</p>
          <p class="code">
            如果需要使用小键盘快捷键，应该在键码前加上munm字样，比如
            CommandOrControl+num8。如果你注册的快捷键已经被注册过，那么你将无法再次注册成功。可以通过
            globalShortcut,isRegistered() 来判断是否被注册过；
          </p>
          <p class="code">
            如果需要取消注册过的快捷键，可以使用 globalShortcut.unregister
            ,⚠注意：globalShortcut是一个主进程模块，在渲染进程可以通过remote访问。
          </p>
          <div v-highlight>
            <pre><code>//   引入方法
const { keyboard } = require('../public/main/menu/key-board')
//  主进程 加载完成触发
app.on('ready', async () => {
    keyboard(win)
})</code></pre>
          </div>
          <div v-highlight>
            <pre><code v-html="keyboard"></code></pre>
          </div>
        </div>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
const { ipcRenderer } = window.require("electron");
import Introduce from "../../components/Introduce";
import { keyboard, main } from "../../../public/main/menu/key-board.js";
export default {
  components: {
    Introduce,
  },
  data: () => ({
    title: "键盘事件",
    content: "在electron中，如果希望处于非激活状态时也能监听到用户的快捷键，应该使用electron中的 globalShortcut 模块定义！这样只要你的electron在处于运行状态，无论窗口是否激活状态，以下案例都能监听的到。",
    keyboard,
    main,
  }),
  mounted() {
    //  只能在这个页面才会触发
    ipcRenderer.on("main-send-keyboard", (event, param) => {
        console.log(param);
      alert(param);
    });
  },
};
</script>

<style>
</style>