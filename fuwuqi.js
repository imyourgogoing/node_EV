const http = require('http')

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('访问服务器成功')
    const str = `您请求的url地址是${req.url},您请求的方法是${req.method}`
    req.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(str)
    res.end('lishuai')
})

server.listen('80', () => {
    console.log('server is running');
})