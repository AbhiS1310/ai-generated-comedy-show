const router = require("express").Router();
const axios = require('axios');


router.get("/get-video/:id", async(req,res)=>{
    try{
        const options = {
            method: 'GET',
            url: `https://api.d-id.com/clips/${req.params.id}`,
            headers: {
              accept: 'application/json',
              authorization: `Bearer ${process.env.D_ID_API}`
            }
          };
          
         const response = await axios.request(options);
         res.status(201).json({vid_url: response.data.result_url})
            
    }
    catch(err){
        res.send(err);
    }
})

module.exports = router;
