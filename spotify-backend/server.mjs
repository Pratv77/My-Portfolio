import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

let accessToken = null; // Cache the access token
let accessTokenExpiry = 0; // Store expiry time for the token

const getAccessToken = async () => {
  // Refresh token if no token or token is expired
  if (!accessToken || Date.now() >= accessTokenExpiry) {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN,
      }),
    });

    const data = await response.json();
    if (data.access_token) {
      accessToken = data.access_token;
      accessTokenExpiry = Date.now() + (data.expires_in * 1000); // Expires in typically 3600 seconds (1 hour)
      console.log('New access token obtained:', accessToken);
    } else {
      throw new Error('Failed to refresh access token');
    }
  }

  return accessToken;
};

// Route to fetch now-playing
app.get('/api/spotify/now-playing', async (req, res) => {
  try {
    const accessToken = await getAccessToken();
    const nowPlayingResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (nowPlayingResponse.status === 204 || nowPlayingResponse.status > 400) {
      return res.status(200).json({ isPlaying: false });
    }

    const nowPlaying = await nowPlayingResponse.json();
    res.status(200).json({
      isPlaying: true,
      title: nowPlaying.item.name,
      artist: nowPlaying.item.artists.map((artist) => artist.name).join(', '),
    });
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
