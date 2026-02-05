import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api/playlist',
});

export const calculatePlaylist = (playlistUrl) => API.post('/calculate', { playlistUrl });
export const getHistory = () => API.get('/history');
