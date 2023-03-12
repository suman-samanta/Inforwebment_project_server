const  router=require("express").Router();
const User=require("../../models/User");
const bcrypt = require('bcrypt');


// REGISTER
router.post("/admin/register",async(req,res)=>{
    try{

        // console.log(req.body.email);

       const searchuser= await User.findOne({email:req.body.email});
        if(searchuser){
            return res.status(400).json("Already registered Admin" )
        }else{

            const salt=await bcrypt.genSalt(10);
            // console.log(salt);
            // console.log(req.body.username);
            const hashedPass=await bcrypt.hash(req.body.password,salt) 
            const newUser= new User({
            username:req.body.username,
            email:req.body.email,
            mobile:req.body.mobile,
            password:hashedPass,
            role:"admin"
        })



       const user=await newUser.save();
       const {password,...others}=user._doc

       res.status(200).json(others);
       console.log("New Admin Has Been created")

        }
       
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
})


// LOGIN 

router.post("/admin/login",async(req,res)=>{
    try{
        const user= await User.findOne({email:req.body.email},
            // {username:req.body.username}
            );
        
        if(!user){
            res.status(400).json("Wrong Credentials !")
            }
        else{
            const validated=await bcrypt.compare(req.body.password,user.password);

            if( !validated && user.role!=='admin'){
                res.status(400).json("Wrong Credentials !")
                }else{
                    const {password,...others}=user._doc;
                    res.status(200).json(others);
                    console.log(others);
                }
            }
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports=router;