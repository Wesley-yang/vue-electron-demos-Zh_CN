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
        <span>右键菜单</span>
        <div slot="content">
          <p class="code">
            注意：如果用户需要频繁的使用系统右键菜单窗口，建议创建一个全局的菜单窗口，这样可以提升显示效率提升性能。
          </p>
          <div id="codeView" v-highlight>
            <pre><code v-html="menu"></code></pre>
          </div>
        </div>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
import { menu } from "../../../public/main/menu/menu";
import Introduce from '@/components/Introduce'
export default {
  data: () => ({
    title: "右键菜单",
    content:
      "创建菜单需要使用electron中的内置Menu模块，设置右键菜单，其api与导航菜单基本一致。",
    menu,
  }),
  components:{
      Introduce
  },
  mounted() {
    menu();
  },
};
</script>

<style>
</style>