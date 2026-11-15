import { IncomingMessage, ServerResponse } from "http";
import productController from "../controllers/product.controller";

const router = (req: IncomingMessage, res: ServerResponse) => {

    const { url, method } = req;


    if (url == "/" && method == "GET") {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: "this is the route page" }));
        console.log(process.cwd());

    }

    else if (url?.startsWith("/product")) {


        productController(req, res);


    }

    else {
        res.end("router is not defined ");
        console.log(url);

    }





}

export default router; 