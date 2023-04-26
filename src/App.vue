<script setup lang="ts">
import { onMounted, ref } from "vue";
import errorImg from "/vite.svg";
interface ListItem {
  url: string;
  title: string;
  faviconUrl: string;
}
const list = ref<ListItem[]>([]);
onMounted(() => {
  list.value = [];
  window.chrome.topSites.get(function (sites) {
    sites.forEach((el) => {
      const listItem: ListItem = {
        url: el.url,
        title: el.title,
        faviconUrl: new URL(el.url).origin + "/favicon.ico",
      };
      list.value.push(listItem);
    });
    console.log("sites", sites);
  });
});
const onerror = (e: any, val: any) => {
  val.faviconUrl = errorImg;
  console.log("val", val);
  console.log("e", e);
};
const goto = () => {
  window.location.href = `https://www.baidu.com/s?wd=${encodeURIComponent(
    "query"
  )}`;
};
</script>

<template>
  <el-button @click="goto()">搜索</el-button>
  <!-- <el-input></el-input> -->
  <div class="sites">
    <a class="link" v-for="item in list" :key="item.url" :href="item.url">
      <img
        :src="item.faviconUrl"
        :onerror="($event:any) => onerror($event, item)"
        class="logo"
        alt="Vite logo"
        width="24"
        height="24"
      />
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
