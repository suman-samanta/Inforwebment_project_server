const express = require('express');
const router = express.Router();
const {getAllVideos}=require('../controller/videoList')

const VideoDetails = require('../models/VideoDetailsSchema');

router.get('/getvideolist',getAllVideos)

module.exports = router;