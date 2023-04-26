// // 获取站点图标并缓存
// function cacheSiteIcon(url) {
//   // 构造获取图标的URL
//   var iconUrl = "https://www.google.com/s2/favicons?domain=" + url;

//   // 创建一个Image对象来加载图标
//   var img = new Image();
//   img.src = iconUrl;

//   // 当图标加载完成时，将其存储到本地缓存中
//   img.onload = function () {
//     // 将图标转换为data URI格式的字符串
//     var canvas = document.createElement("canvas");
//     canvas.width = img.width;
//     canvas.height = img.height;
//     var ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0, img.width, img.height);
//     var dataUrl = canvas.toDataURL();

//     // 将data URI字符串保存到本地缓存中
//     localStorage.setItem(url, dataUrl);
//   };
// }

// // 获取站点图标
// function getSiteIcon(url) {
//   // 尝试从本地缓存中获取站点图标
//   var dataUrl = localStorage.getItem(url);
//   if (dataUrl) {
//     // 如果找到了缓存的图标，则返回它
//     return dataUrl;
//   } else {
//     // 如果没有找到缓存的图标，则获取它并缓存
//     cacheSiteIcon(url);
//     // 返回一个占位图像，表示正在加载站点图标
//     return "loading.gif";
//   }
// }

// // 获取当前页面的URL
// var url = window.location.href;

// // 向后台页面发送消息
// chrome.runtime.sendMessage({ type: "cacheIcon", url: url });
