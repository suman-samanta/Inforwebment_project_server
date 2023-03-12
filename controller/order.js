const Order=require("../models/Order");
const Product=require("../models/Product");
const User = require("../models/User");


exports.placeOrder=async (req,res)=>{

    const {
        Username,quantity,status
    }=req.body;

    const product=await Product.findById(req.params.productId);

    console.log(product.name);
    
    const order=new Order({
        Username:Username,
        Productname:product.name,
        quantity,
        status 
    })

    try{
        const order_status = await order.save();
        res.status(200).json(order_status);
    }catch(err){
        res.status(400).json(err);
    }

};


exports.getOrderDetailsById=async(req,res)=>{
    try{
        const user=await User.findById(req.params.userId);
        const order=await Order.find({Username:user.username})
        res.status(200).json(order);
    }catch(err){
        res.status(500).json(err);
    }
}

