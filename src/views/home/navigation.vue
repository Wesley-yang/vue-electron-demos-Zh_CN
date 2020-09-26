<template>
  <div>
    <MenuGroup title="窗口配置">
    <MenuItem to="winconfig" name="1-1">
      <Icon type="md-document" />创建窗口
    </MenuItem>
  </MenuGroup>
  <MenuGroup title="系统相关">
    <MenuItem to="navigation" name="2-1">
      <Icon type="md-document" />导航菜单
    </MenuItem>
    <MenuItem to="rightclickmenu" name="2-2">
      <Icon type="md-document" />右键菜单
    </MenuItem>
    <MenuItem to="keyboard" name="2-3">
      <Icon type="md-document" />键盘快捷键
    </MenuItem>
    <MenuItem to="tray" name="2-4">
      <Icon type="md-document" />托盘菜单
    </MenuItem>
  </MenuGroup>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>