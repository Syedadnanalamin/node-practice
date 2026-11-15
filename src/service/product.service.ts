import path from "path";
import fs from 'fs';
import { json } from "stream/consumers";
const productService = () => {


    const dbPath = path.join(process.cwd(), "src", "database", "product.json");
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);

}


export default productService; 