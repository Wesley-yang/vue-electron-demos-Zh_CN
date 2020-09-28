<template>
  <div>
    <Introduce :title="title" :content="content"></Introduce>
    <Collapse>
      <Panel name="1">
        <span>文件对话框</span>
        <div slot="content">
          <p class="code">
            注意：由于键盘事件只在该页面调用alery，所以只能在该页面「打开之后」才能生效
          </p>

          <Button @click="createFileDialog">创建文件对话框</Button>
           <p class="code">
             如果：properties属性设置为 multiSelectrons,允许多选，还可以设置是否允许选择文件夹，是否只允许单选等。
             showOpenDialog返回一个Promise对象，用户执行后返回一个Promise，这个对象包含两个属性：
             <ul>
               <li class="code">canceled：便是用户是否点击了取消按钮</li>
               <li class="code">filePath：里面指是用户选择的文件路径，拿到文件后就可以对文件进行读写了。</li>
             </ul>
           </p>
          <div v-highlight>
            <pre><code v-html="fileDialog"></code></pre>
          </div>
        </div>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
import Introduce from "@/components/Introduce";
import { fileDialog } from "../../../public/renderer/system/dialog";
export default {
  components: {
    Introduce,
  },
  data: () => ({
    title: "系统对话框",
    content:
      "在electron中，使用主进程中的dialog对象的showOpenDialog方法来显示此对话框。打开对话框，文件保存对话框，路径选择对话框，消息提示对话框，错误提示对话框都是通过dialog对象来管理。",
    fileDialog,
  }),
  methods: {
    createFileDialog() {
      fileDialog();
    },
  },
};
</script>
