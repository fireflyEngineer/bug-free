const express = require('express')
const next = require('next')

const app = next({ dev: false })
const handle = app.getRequestHandler()

async function creatServer() {
  await app.prepare()
  const server = express()

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  // 定义是否返回 base64 编码的文件 mime 类型。默认是所有文件，因为 next.js 默认 build 开启 gzip.
  // 如果需要修改，请先理解 gzip 的文件编码方式。
  server.binaryTypes = ['*/*']

  return server
}

module.exports = creatServer
