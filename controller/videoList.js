const videoDetails=require('../models/VideoDetailsSchema')

exports.getAllVideos=async(req,res)=>{

    try{
      let videos;
       videos =await videoDetails.find();

       res.status(200).json(videos)
    }catch(err){
        res.status(404).json(err);
    }
}