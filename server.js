const http=require("http");

const app=require('./App');

const config=require('./config/default');

const port=config.port;
const server=http.createServer(app);
server.listen(port);

console.log("server is running on port : "+port);