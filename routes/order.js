const express = require("express");

const {
  placeOrder,
  getOrderDetailsById
} = require("../controller/order");
const router = express.Router();



router.post(
  "/product/placeorder/:productId",
   
   placeOrder
);

router.get("/myorders/:userId", getOrderDetailsById);

module.exports = router;