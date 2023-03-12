const express = require("express");
// const {
//   requireSignin,
//   adminMiddleware,
//   uploadS3,
// } = require("../common-middleware");
const {
  createProduct,
  
  getProductDetailsById,
//   deleteProductById,
  getProducts,
} = require("../controller/product");
const multer = require("multer");
const router = express.Router();
const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 
      ( __dirname)
        // path.join(path.dirname(__dirname), '/PrductUploads')
        );
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/product/create",
  upload.array('productPicture'),
  createProduct
);

router.get("/product/:productId", getProductDetailsById);
// router.delete(
//   "/product/deleteProductById",
  
//   deleteProductById
// );
router.get(
  "/allproduct/getProducts",
 
  getProducts
);

module.exports = router;