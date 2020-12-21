const http = require('http')

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('访问服务器成功')
    const url = req.url
    let content = '<h4>404,404了,not found啥也没找到</h4>'
    if (url === '/index.html' || url === '/') {
        content = '<h1>首页</h1>'
    }
    req.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(content)
})

server.listen('80', () => {
    console.log('server is running');
})