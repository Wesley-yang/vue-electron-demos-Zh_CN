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

    <Collapse>
      <Panel name="1">
        <span>导航菜单</span>
        <div slot="content">
          <p class="code">
            注意：1.在mac下需要额外的创建一个空的菜单，因为mac中默认会帮用户创建第一个菜单。2.在mac中设置菜单需要嵌套一层，否则菜单不会渲染成功！
          </p>
          <p class="code">
            在设置导航菜单的时候，需要先在main渲染进程里面，先设置隐藏创建的系统菜单
          </p>
          <div id="codeView" v-highlight>
            <pre><code v-html="menuMainConfig"></code></pre>
          </div>
          <div id="codeView" v-highlight>
            <pre><code v-html="navigation"></code></pre>
          </div>
        </div>
      </Panel>
    </Collapse>
  </div>
</template>


<script>
const { ipcRenderer } = window.require("electron");
import Introduce from "@/components/Introduce";
import {
  navigation,
  menuMainConfig,
} from "../../../public/main/menu/navigation";
export default {
  components: {
    Introduce,
  },
  data: () => ({
    title: "顶部导航菜单",
    content:
      "创建菜单需要使用electron中的内置Menu模块，通过Menu.buildFromTemplate()来创建菜单对象，通过Menu.setApplicationMenu()来为窗口设置系统菜单。",
    navigation,
    menuMainConfig,
  }),
  mounted() {
    ipcRenderer.on("main-menu-click", (event, parsm) => {
      alert(parsm);
    });
  },
};
</script>
<style>
</style>