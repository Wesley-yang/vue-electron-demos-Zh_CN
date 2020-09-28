<template>
  <div>
    <Introduce :title="title" :content="content"></Introduce>
    <Collapse>
      <Panel name="1">
        <span>h5原生系统通知</span>
        <div slot="content">
          <Button @click="handleh5Notice">调用H5系统通知</Button>
          <p class="code">
            注意：Notfication是一个HTML5的API,在electron中的渲染进程中也可以自由的使用它，而不需要获取用户授权。
          </p>
          <div v-highlight>
            <pre><code v-html="h5Notice"></code></pre>
          </div>
        </div>
      </Panel>

      <Panel name="2">
        <span>内置主进程系统通知</span>
        <div slot="content">
          <Button @click="handleElectronNotice">调用主进程通知</Button>
          <p class="code">
            注意：使用electron内置的Notfication是需要使用show方法调用才能发送系统通知！。
          </p>
          <div v-highlight>
            <pre><code v-html="electronNotice"></code></pre>
          </div>
        </div>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
import Introduce from "../../components/Introduce";
import { h5Notice ,electronNotice} from "../../../public/renderer/system/h5Notice";
export default {
  components: {
    Introduce,
  },
  data: () => ({
    title: "系统通知",
    content:
      "在electron想要使用系统通知，首先可以使用html5中的Notfication来实现，不过需要用户授权（electron中不需要），或者使用主进程中的Notfication来实现系统通知。",
    h5Notice,
    electronNotice
  }),
  methods: {
    handleh5Notice() {
      h5Notice();
    },
    handleElectronNotice(){
        electronNotice()
    }
  },
};
</script>

<style>
</style>