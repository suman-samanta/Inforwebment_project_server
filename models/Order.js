const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    Username: { 
        type: String, 
        required: true, 
        trim: true,
        // unique:true 
    },
    
    Productname: { 
        type: String, 
        required: true, 
        trim: true,
    },
   
    status:{
        type:String,
        enum:['Ordered','shipped','on the way','Delivered'],
        default:'Ordered'
    },
    
    quantity: {
        type: Number,
        required: true
    },
   
    updatedAt: Date,

}, { timestamps: true });


module.exports = mongoose.model('Order', OrderSchema);