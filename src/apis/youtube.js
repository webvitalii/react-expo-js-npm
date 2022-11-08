import axios from 'axios';

const YOUTUBE_KEY = 'AIzaSyA_XO1ZM16gUL1ZDkMKUfuEl_HFFyseLZ4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 20,
        key: YOUTUBE_KEY
    }
});