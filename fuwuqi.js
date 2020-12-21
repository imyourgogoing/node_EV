const http = require('http')

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('访问服务器成功')
})

server.listen('80', () => {
    console.log('server is running');
})