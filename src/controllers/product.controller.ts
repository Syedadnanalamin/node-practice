import { IncomingMessage, ServerResponse } from "http";
import productService from "../service/product.service";

const productController = (req: IncomingMessage, res: ServerResponse) => {
    const { method } = req;

    if (method == "GET") {

        const data = productService();
        res.writeHead(200, { 'content-type': 'application/json' });

        res.end(JSON.stringify({ message: data }));

    }



}

export default productController; 