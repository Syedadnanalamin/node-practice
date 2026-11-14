import { createServer, IncomingMessage, Server, ServerResponse } from "node:http";
const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {



    const { url, method } = req;


    if (url == "/" && method == "GET") {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: "this is the route page" }));
        console.log(url, method);

    }

    else if (url?.startsWith("/product")) {


        res.writeHead(200, { 'content-type': 'application/json' });

        res.end(JSON.stringify({ message: "This is product page" }));
    }

    else {
        res.end("router is not defined ");
        console.log(url);

    }




})

server.listen(3000, () => {

    console.log('server is running successfully');
})