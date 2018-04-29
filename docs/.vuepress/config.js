const fs = require('fs');
const path = require('path');

var dirpath = "./docs"
var dirs = fs.readdirSync(dirpath).filter((f) => {
  return fs.existsSync(dirpath + "/" + f) && fs.statSync(dirpath + "/" + f).isDirectory()
})

let sidebarItems = ((dirs) => {
  let items = ['/']
  dirs.forEach((d, index) => {
    if (d !== '.vuepress' && d !== 'admin') {
      items.push('/' + d + '/')
    }
  })
  return items
})(dirs)

module.exports = {
  title: 'Death March',
  description: '社内ドキュメントを管理',
  themeConfig: {
    sidebar: sidebarItems,
    nav: [
      {
        text: 'about',
        link: '/about/',
      },
      {
        text: 'admin',
        link: 'http://localhost:8888'
      }
    ],
  }
}