import { createServer, IncomingMessage, Server, ServerResponse } from "node:http";
import router from "./routes/routes";
const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {

    router(req, res);



})

server.listen(3000, () => {

    console.log('server is running successfully');
})