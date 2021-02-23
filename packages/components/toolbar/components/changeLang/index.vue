<template>
  <div class="nm-toolbar-item">
    <el-dropdown trigger="click">
      <nm-button class="nm-toolbar-button" type="text">
        <nm-icon name="font" />
      </nm-button>

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="toggleLang('zh')" :disabled="$i18n.locale == 'zh'">中文</el-dropdown-item>
        <el-dropdown-item @click.native="toggleLang('en')" :disabled="$i18n.locale == 'en'">English</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  methods: {
    toggleLang(lang) {
      if (lang == 'zh') {
        localStorage.setItem('locale', 'zh')
      } else if (lang == 'en') {
        localStorage.setItem('locale', 'en')
      }
        this.$i18n.locale = localStorage.getItem('locale')
    }
  }
}
</script>
