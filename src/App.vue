<script setup lang="ts">
import { onMounted, ref } from 'vue';
const list = ref<any[]>([{
  'url': 'https://cn.vuejs.org/guide/quick-start.html#using-vue-from-cdn',
  name: 'vue'
}])
chrome://favicon2/?size=24&scaleFactor=1x&showFallbackMonogram=&pageUrl=https%3A%2F%2Fchat.openai.com%2F
onMounted(() => {

  window.chrome.topSites.get(function(sites) {
    list.value = sites;
    console.log('sites', sites)
  });

})



</script>

<template>
    <!-- <el-input></el-input> -->
    <div class="sites" >
      <a class="link"  v-for="item in list" :key="item.url" :href="item.url">
        <img :src="`https://www.google.com/s2/favicons?domain=${item.url}`" class="logo" alt="Vite logo" width="20" height="20" />
        <div class="title">{{ item.title }}</div>
      </a>
    </div>
</template>

<style scoped>
.sites {
  display: flex;
  width: 1200px;
  justify-content: space-around;
}
.link {
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #f0f0f0;
  align-items: center;
  justify-content: center;

}
.link .title {
  width: 40px;
  white-space: nowrap;
      /* text-overflow: ; */
      overflow: hidden;

}
</style>
