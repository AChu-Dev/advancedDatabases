const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  const { method, url, headers } = req;

    /*const joe = {
        location: "Brighton",
        houseNumber: 80,
        name: { first: "joe", last : "Appleton"},
    };
    const { location } = joe;
    */

  console.log(method);
  console.log(url);
  console.log(headers);

  res.end("hello world");
});

/*const main =() => {
    replaces function main()}{}
}*/
 
server.listen(8080);

//server.listen(20000)
//console.log('Listening on Port 20000')
