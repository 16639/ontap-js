import { Router } from "express";
import { create, Detail, list, remove, update } from "../controllers/Books";
const ProductRoute = Router()

ProductRoute.get('/products', list)
ProductRoute.get('/products/:id', Detail)
 ProductRoute.post('/products', create)
ProductRoute.delete('/products/:id', remove)
ProductRoute.put('/products/:id', update)

export default ProductRoute