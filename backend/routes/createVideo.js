const router = require("express").Router();
const axios = require("axios");
const { isAuthenticated } = require("../middleware/auth");
const ErrorHandler = require("../utils/ErrorHandler");

router.post("/create-video",isAuthenticated, async (req, res, next) => {
  const { script } = req.body;
  let short;
  if (!script) {
    return next(new ErrorHandler("Please provide the all fields!", 400));
  }
  short = script.slice(0,180);
  try {
    const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://api.d-id.com/clips',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik53ek53TmV1R3ptcFZTQjNVZ0J4ZyJ9.eyJodHRwczovL2QtaWQuY29tL2ZlYXR1cmVzIjoiIiwiaHR0cHM6Ly9kLWlkLmNvbS9zdHJpcGVfcHJvZHVjdF9pZCI6IiIsImh0dHBzOi8vZC1pZC5jb20vc3RyaXBlX2N1c3RvbWVyX2lkIjoiIiwiaHR0cHM6Ly9kLWlkLmNvbS9zdHJpcGVfcHJvZHVjdF9uYW1lIjoidHJpYWwiLCJodHRwczovL2QtaWQuY29tL3N0cmlwZV9zdWJzY3JpcHRpb25faWQiOiIiLCJodHRwczovL2QtaWQuY29tL3N0cmlwZV9iaWxsaW5nX2ludGVydmFsIjoibW9udGgiLCJodHRwczovL2QtaWQuY29tL3N0cmlwZV9wbGFuX2dyb3VwIjoiZGVpZC10cmlhbCIsImh0dHBzOi8vZC1pZC5jb20vc3RyaXBlX3ByaWNlX2lkIjoiIiwiaHR0cHM6Ly9kLWlkLmNvbS9zdHJpcGVfcHJpY2VfY3JlZGl0cyI6IiIsImh0dHBzOi8vZC1pZC5jb20vY2hhdF9zdHJpcGVfc3Vic2NyaXB0aW9uX2lkIjoiIiwiaHR0cHM6Ly9kLWlkLmNvbS9jaGF0X3N0cmlwZV9wcmljZV9jcmVkaXRzIjoiIiwiaHR0cHM6Ly9kLWlkLmNvbS9jaGF0X3N0cmlwZV9wcmljZV9pZCI6IiIsImh0dHBzOi8vZC1pZC5jb20vcHJvdmlkZXIiOiJnb29nbGUtb2F1dGgyIiwiaHR0cHM6Ly9kLWlkLmNvbS9pc19uZXciOmZhbHNlLCJodHRwczovL2QtaWQuY29tL2FwaV9rZXlfbW9kaWZpZWRfYXQiOiIyMDI0LTA5LTA4VDA1OjA5OjU0LjY5MFoiLCJodHRwczovL2QtaWQuY29tL29yZ19pZCI6IiIsImh0dHBzOi8vZC1pZC5jb20vYXBwc192aXNpdGVkIjpbIlN0dWRpbyJdLCJodHRwczovL2QtaWQuY29tL2N4X2xvZ2ljX2lkIjoiIiwiaHR0cHM6Ly9kLWlkLmNvbS9jcmVhdGlvbl90aW1lc3RhbXAiOiIyMDI0LTA5LTA4VDA1OjA4OjU0LjYzMFoiLCJodHRwczovL2QtaWQuY29tL2FwaV9nYXRld2F5X2tleV9pZCI6Imdtb3hzZnMyMzQiLCJodHRwczovL2QtaWQuY29tL3VzYWdlX2lkZW50aWZpZXJfa2V5IjoibHpOdGtFMWE2QmJzNzQySEt2VkVHIiwiaHR0cHM6Ly9kLWlkLmNvbS9oYXNoX2tleSI6ImxmS2owVi0tZVFMSHYtRy1YRDhGMSIsImh0dHBzOi8vZC1pZC5jb20vcHJpbWFyeSI6dHJ1ZSwiaHR0cHM6Ly9kLWlkLmNvbS9lbWFpbCI6ImFiaGl4eTY3QGdtYWlsLmNvbSIsImh0dHBzOi8vZC1pZC5jb20vcGF5bWVudF9wcm92aWRlciI6InN0cmlwZSIsImlzcyI6Imh0dHBzOi8vYXV0aC5kLWlkLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwNDY0NDkzMDQ3NTUxMjUzMzQxNiIsImF1ZCI6WyJodHRwczovL2QtaWQudXMuYXV0aDAuY29tL2FwaS92Mi8iLCJodHRwczovL2QtaWQudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTcyNTg2NDgxMiwiZXhwIjoxNzI1OTUxMjEyLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIHJlYWQ6Y3VycmVudF91c2VyIHVwZGF0ZTpjdXJyZW50X3VzZXJfbWV0YWRhdGEgb2ZmbGluZV9hY2Nlc3MiLCJhenAiOiJHenJOSTFPcmU5Rk0zRWVEUmYzbTN6M1RTdzBKbFJZcSJ9.u4_MuG-BHxqw3kdjYpsWuKjwgNi8QcLLX4jTLc-alKFc00HYpgKy5CRWk7nWWuROILr-MEpBLXMWalI5EMLqPpHNj7Zsy3Y6JPqn-BABsMx_SVBJFHPencYZ2yXVXLw4UlxqwsIcMywkGAf_-uqIR0lQ2wAWzPdunDYFtJpmCYt_pFWW2TWfkZ40OyjdxveBV5TmO9B6GjsJ0Sh_brmLrr0jaBv5lJUohdSL3X3d0WQRDS5cRpcQIckWEIrqWwPyFdKDU_7Rhc4oUiulSvUddMB03YbAiwqPCHr9ndHDM02dV_BaKw81qwpSVyoPrEaJHR8vAzCes7AkJ9T33gEhTQ'
  },
  data: {
    presenter_id: 'v2_public_alex@qcvo4gupoy',
    script: {
      type: 'text',
      subtitles: 'false',
      provider: {
        type: 'elevenlabs',
        voice_id: '29vD33N1CtxCmqQRPOHJ',
        voice_config: {similarity_boost: 0.5},
        model_id: 'eleven_multilingual_v2',
        shouldAddDefaultOutputFormat: true
      },
      input: script,
      ssml: false
    },
    config: {result_format: 'mp4'},
    presenter_config: {crop: {type: 'wide'}},
    background: {
      source_url: 'https://cdn.sanity.io/images/68lp9qid/production/224baff6663d45e470aebdf98a0591b66808cc2d-1520x1000.jpg'
    }
  }
};

    const response = await axios.request(options);
    console.log(response);
    res.status(200).json({ vid_id: response.data.id });
  } catch (error) {
    return next(new ErrorHandler(error.message,400));
  }
});

module.exports = router;
