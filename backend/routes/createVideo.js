const router = require("express").Router();
const axios = require("axios");

router.post("/create-video", async (req, res) => {
  const { script } = req.body;

  if (!script) {
    return res.status(400).json({ error: "Script is required" });
  }

  try {
    const options = {
      method: "POST",
      url: "https://api.d-id.com/clips",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization:
          `Bearer ${process.env.D_ID_API}`,
      },
      data: {
        script: {
          type: "text",
          subtitles: "false",
          provider: { type: "microsoft", voice_id: "en-US-BrianMultilingualNeural" },
          ssml: "false",
          input: script,
        },
        config: { result_format: "mp4" },
        presenter_config: { crop: { type: "wide" } },
        presenter_id: "v2_public_alex@qcvo4gupoy",
      },
    };
    const response = await axios.request(options);
    console.log(response);
    res.status(200).json({ vid_id: response.data.id });
  } catch (error) {
    console.error(
      "Error creating video:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to create video" });
  }
});

module.exports = router;
