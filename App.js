const express=require("express");
const app=express();
const dotenv= require("dotenv");
const mongoose=require("mongoose");
const authRoute=require('./routes/auth');
const uploadRoute=require('./routes/upload');
const adminRoute=require('./routes/admin/auth');
const videoListRoute=require('./routes/videoList');
const productRoute=require('./routes/product');
const orderRoute=require('./routes/order');
// const videList=require('./routes/videoList');


const bodyParser = require('body-parser');




var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}




dotenv.config();
// app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(allowCrossDomain);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
.then(()=>console.log("connection successful..."))
.catch((err)=>console.log(err));




// app.use('/',(req,res)=>{
//     res.send("App is running now....");

// })

app.use('/api/videos', express.static('media/uploads'));
app.use('/ProductUploads', express.static('/ProductUploads'));
// app.use(express.static(__dirname));

app.use("/server/auth",authRoute);
app.use('/server/upload',uploadRoute);
app.use('/server/auth',adminRoute);
app.use('/server/videoList', videoListRoute);
app.use('/server',productRoute);
app.use('/server',orderRoute)
// app.use('/server',videList);


module.exports=app;
