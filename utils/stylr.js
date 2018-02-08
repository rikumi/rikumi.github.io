window.stylr = (style) => {
  stylus.render(style.trim(), (err, css) => {
    if (err) throw err
    let node = document.createTextNode(css)
    let ele = document.createElement('style')
    ele.appendChild(node)
    document.body.appendChild(ele)
  })
}
