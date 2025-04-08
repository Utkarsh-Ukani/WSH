import express from 'express';
import { addCategory, deleteCategory, getCategories, getCategoryById, updateCategory } from '../controllers/category.controller.js';
import { addMultipleProducts, addProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/product.controller.js';

const adminRouter = express.Router();

// category routes
adminRouter.post('/add-category',addCategory);
adminRouter.get('/get-categories', getCategories);
adminRouter.get('/get-category/:id', getCategoryById); 
adminRouter.put('/update-category/:id', updateCategory); 
adminRouter.delete('/delete-category/:id', deleteCategory); 

// product routes
adminRouter.post('/add-product', addProduct);
adminRouter.post('/add-multiple-products', addMultipleProducts);
adminRouter.get('/get-products', getProducts);
adminRouter.get('/get-product/:id', getProductById);
adminRouter.put('/update-product/:id', updateProduct);
adminRouter.delete('/delete-product/:id', deleteProduct);


export default adminRouter;