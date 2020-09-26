<template>
  <div>
    <Introduce :title="title" :content="content"></Introduce>
    <p class="code">具体内容可以<a target="_blank" href="https://www.electronjs.org/docs/api/browser-window#">查看完整api文档</a></p>
    
    <Collapse v-model="panelVal" accordion>
      <Panel name="1">
        <span>创建一个普通新窗口</span>
        <div slot="content">
          <Button @click="handleCreateWin">查看示列</Button>
          <p class="code">
            通过BrowserWindow模块可以在应用程序中创建新窗口,这个主进程模块可以和渲染器进程与
            remote 模块一起使用, 如本示例中所示.
          </p>
          
          <div id="codeView" v-highlight>
            <pre><code v-html="createWin"></code></pre>
          </div>
        </div>
      </Panel>

       <Panel name="2">
        <span>创建优雅窗口</span>
        <p class="code"></p>
        <div slot="content">
          <Button @click="handleCreateGraceWin">查看示列</Button>
          <p class="code">
            如果你仔细观察，你可能会发现，在启动这窗口的时候，是等待页面展示出来才会显示的，而其他的创建窗口是先显示白屏然后在显示内容。是因为我们这里是更加优雅的方式展示窗口，先默认窗口不显示，等页面回来之后在显示窗口，不会出现白屏的尴尬😅
          </p>
          <div id="codeView" v-highlight>
            <pre><code v-html="createGraceWin"></code></pre>
          </div>
        </div>
      </Panel>

      <Panel name="3">
        <span>创建一个无边框窗口</span>
        <p class="code"></p>
        <div slot="content">
          <Button @click="handleCreateNoBorderWin">查看示列</Button>
          <p>通过设置BrowserWindow模块的，frame属性可以是否显示边框</p>
          <div id="codeView" v-highlight>
            <pre><code v-html="createNoBorderWin"></code></pre>
          </div>
        </div>
      </Panel>

      <Panel name="4">
        <span>创建一个模态窗</span>
        <div slot="content">
           <Button @click="handleCreateModalWin">查看示列</Button>
          <p class="code">
            通过设置BrowserWindow模块的，moadl属性可以设置属性是否为模态窗口（模态窗口，子窗口不关闭无法操作父窗口）
          </p>
          <div id="codeView" v-highlight>
            <pre><code v-html="createModalWin"></code></pre>
          </div>
        </div>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
import { createWin } from "../../../public/renderer/win/create-win";
import { createNoBorderWin } from "../../../public/renderer/win/no-border-win";
import { createModalWin } from "../../../public/renderer/win/modal-win";
import { createGraceWin } from "../../../public/renderer/win/grace-win";
import Introduce from "@/components/Introduce";
export default {
  data: () => ({
    panelVal: null,
    createWin,
    createNoBorderWin,
    createModalWin,
    createGraceWin,
    title: "BrowserWindow",
    content:
      "Electron中BrowserWindow模块允许用户在主进程中创建一个新的浏览器窗口或管理现有的窗口。",
  }),
  components: {
    Introduce,
  },
  methods: {
    //  创建一个新的window窗口
    handleCreateWin() {
      createWin();
    },
    //  创建一个优雅窗口
    handleCreateGraceWin(){
      createGraceWin()
    },
    //  创建一个无边框窗口
    handleCreateNoBorderWin() {
      createNoBorderWin();
    },
    //  创建一个模态窗口
    handleCreateModalWin(){
      createModalWin()
    }
  },
};
</script>

<style>
</style>