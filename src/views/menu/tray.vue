<template>
  <div>
    <Introduce :title="title" :content="content"></Introduce>
    <p class="code">
      具体内容可以<a
        target="_blank"
        href="https://www.electronjs.org/docs/api/menu-item"
        >查看完整api文档</a
      >
    </p>
    <Collapse v-model="value" accordion>
      <Panel name="1">
        <span>托盘图标</span>
        <div slot="content">
          <Button @click="handleTray">{{ msg }}</Button>
          <p class="code">
            注意：该实例被复制给一个全局对象（避免被垃圾收集），这样就可以展示图标了～
          </p>
          <div v-highlight>
            <pre><code v-html="openTray"></code></pre>
          </div>
          <div v-highlight>
            <pre><code v-html="clearTray"></code></pre>
          </div>
          <div v-highlight>
            <pre><code v-html="ready"></code></pre>
          </div>
        </div>
      </Panel>

      <Panel name="2">
        <span>闪烁图标</span>
        <div slot="content">
          <Button @click="handleOpenOfClearTray">{{ showMsg }}</Button>
          <p class="code">
            还记得我们当前玩的qq吗？来消息之后图标是闪烁的，我们来实现一下，其实原来很简单就是来回切换图片～～
          </p>
          <div v-highlight>
            <pre><code v-html="openSwitchTray"></code></pre>
          </div>
          <div v-highlight>
            <pre><code v-html="readySwitchTray"></code></pre>
          </div>
          <div v-highlight>
            <pre><code v-html="clearSwitchTray"></code></pre>
          </div>
        </div>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
import Introduce from "@/components/Introduce";
const { ipcRenderer } = window.require("electron");
import {
  openTray,
  clearTray,
  ready,
  openSwitchTray,
  readySwitchTray,
  clearSwitchTray,
} from "../../../public/main/menu/tray";
export default {
  components: {
    Introduce,
  },
  data: () => ({
    title: "托盘图标",
    content:
      "在应用的ready事件新建一个Tray实例，并把图标文件的 路径地址 传递给实例，即可为自己项目中添加托盘图标。",
    openTray,
    clearTray,
    ready,
    openSwitchTray,
    readySwitchTray,
    clearSwitchTray,
    msg: "打开托盘",
    showMsg: "托盘闪烁",
    value: "1",
  }),
  methods: {
    //  打开关闭正常图标
    handleTray() {
      if (this.msg === "打开托盘") {
        this.msg = "关闭托盘";
        ipcRenderer.send("opne-only-tray", "open");
      } else {
        this.msg = "打开托盘";
        ipcRenderer.send("clear-onlu-tray", "clear");
      }
    },
    //  开启of关闭 闪烁图标
    handleOpenOfClearTray() {
      if (this.showMsg === "托盘闪烁") {
        ipcRenderer.send("send-tray", "open");
        this.showMsg = "关闭托盘";
      } else {
        ipcRenderer.send("clear-tray", "clear");
        this.showMsg = "托盘闪烁";
      }
    },
  },
};
</script>

<style>
</style>