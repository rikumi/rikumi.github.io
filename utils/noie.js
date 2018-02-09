function noie() {
  document.body.innerHTML = '<p style="position:absolute;top:50%;left:0;right:0;margin-top:-1em;line-height:2em;font-family:sans-serif;color:#bbb;text-align:center">此站点不支持 IE 内核，请使用 Chrome 或 Safari 浏览器<br/>如果你使用双核浏览器，请切换到极速模式</p>'
}

if (!!window.ActiveXObject || "ActiveXObject" in window) {
  noie()
}
