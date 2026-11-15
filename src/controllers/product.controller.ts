import { IncomingMessage, ServerResponse } from "http";
import productService from "../service/product.service";
import { product } from "../types/types";

const productController = (req: IncomingMessage, res: ServerResponse) => {
    const { url, method } = req;

    const reqParams = url?.split("/");
    const productId = reqParams && Number(reqParams[2]) || null;
    console.log(url)
    // getting product route
    if (url == "/product" && method == "GET") {

        const products = productService();
        res.writeHead(200, { 'content-type': 'application/json' });

        res.end(JSON.stringify({ message: products }));

    }
    else if (productId && method == "GET") {

        const products = productService();
        const product = products.find((p: product) => p.id == productId);
        console.log("this is the single product console", product)

        res.writeHead(200, { 'content-type': 'application/json' });

        res.end(JSON.stringify({ message: product }));

    }




}

export default productController; 