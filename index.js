const server = require('./api/server');

const port = process.env.port || 9000;

server.listen(port, () => {
  console.log(`The Server is Alive at Port ${port}`);
});
