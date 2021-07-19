const express = require('express');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const { createProduct } = require('../controller/product');

//const { addCategory, getCategories } = require('../controller/category');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });



router.post('/product/create', requireSignin, adminMiddleware, upload.single('productPicture'), createProduct);
//router.get('/category/getcategory', getCategories);


module.exports = router;