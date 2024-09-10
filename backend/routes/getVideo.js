const router = require("express").Router();
const axios = require('axios');
const ErrorHandler = require("../utils/ErrorHandler");
const { isAuthenticated } = require("../middleware/auth");


router.get("/get-video/:id",isAuthenticated, async(req,res,next)=>{
    try{
      const options = {
        method: 'GET',
        url: `https://api.d-id.com/clips/${req.params.id}`,
        headers: {
          accept: 'application/json',
          authorization: `Basic ${process.env.D_ID_API}`
        }
      };
          
        //  const response = await axios.request(options);
        //  console.log(response.data.result_url);
         res.status(201).json({vid_url: "https://d-id-clips-prod.s3.us-west-2.amazonaws.com/google-oauth2%7C104644930475512533416/clp_G8WihC7znhpZV4GNszPKS/v2_public_alex%40qcvo4gupoy.mp4?AWSAccessKeyId=AKIA5CUMPJBIJ7CPKJNP&Expires=1725962087&Signature=6aae2c3IXSyUU13jk0QsR2%2BGcG4%3D"})
            
    }
    catch(err){
      return next(new ErrorHandler(err.message, 400));
    }
})

module.exports = router;
