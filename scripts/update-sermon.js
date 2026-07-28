const axios = require("axios");
const fs = require("fs");

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.CHANNEL_ID;

async function getUploadsPlaylist() {

    const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/channels",
        {
            params: {
                part: "contentDetails",
                id: CHANNEL_ID,
                key: API_KEY
            }
        }
    );

    return response.data.items[0]
        .contentDetails
        .relatedPlaylists
        .uploads;
}


async function getLatestVideo(playlistId) {

    const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/playlistItems",
        {
            params:{
                part:"snippet",
                playlistId: playlistId,
                maxResults:1,
                key:API_KEY
            }
        }
    );

    const videoId = response.data.items[0].snippet.resourceId.videoId;

    const videoResponse = await axios.get(
        "https://www.googleapis.com/youtube/v3/videos",
        {
            params:{
                part:"snippet",
                id: videoId,
                key: API_KEY
            }
        }
    );

    return videoResponse.data.items[0].snippet;
}

async function updateSermon(){

    const uploads = await getUploadsPlaylist();

    const video = await getLatestVideo(uploads);

    const descriptionLines = video.description
    .trim()
    .split("\n")
    .filter(line => line.trim() !== "");

const scripture = descriptionLines[descriptionLines.length - 1];


    const sermon = {

    title: video.title,

    url:
    `https://www.youtube.com/watch?v=${video.resourceId.videoId}`,

    thumbnail:
    video.thumbnails.high.url,

    published:
    new Date(video.publishedAt)
    .toLocaleDateString("en-US"),

    scripture: scripture

};

    fs.writeFileSync(
        "data/latest-sermon.json",
        JSON.stringify(sermon,null,2)
    );


    console.log("Latest sermon updated:", sermon);

}


updateSermon();
