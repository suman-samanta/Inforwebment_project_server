const Product=require("../models/Product");
const shortid=require('shortid');


exports.createProduct=async (req,res)=>{

    const {
        name,price,description,quantity
    }=req.body;

    // let productPictures=[];

    // console.log(req.file)
    
    // console.log(req);
    // try{
    
    //     productPictures= await req.body.files.map(file=>{
    //         return{img: file.filename}
    //     });


    const product=new Product({
        name:name,
        price,
        description,
        quantity,
        // productPictures,
    })

    // product.save(((error,product)=>{
    //     if(error) return res.status(400).json({error});
    //     if(product){
    //         res.status(201).json({product});
    //     }
    // }));
    const product_status = await product.save();

    // res.status(200).json()
    
    // }  catch(err){
    // // if(product_status )
    // console.log(err);
};



exports.getProducts=async(req,res)=>{

    try{
      let products;
       products =await Product.find();

       res.status(200).json(products)
    }catch(err){
        res.status(404).json(err);
    }
}


exports.getProductDetailsById=async(req,res)=>{

    try{
        const product=await Product.findById(req.params.productId);
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err);
    }
}


