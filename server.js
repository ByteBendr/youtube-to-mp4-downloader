const express = require('express');
const ytdl = require('ytdl-core');
const app = express();

function sanitizeFilename(filename) {
    return filename.replace(/[^\w\s.-]/g, '_');
}

app.get('/download', async (req, res) => {
    try {
        const videoUrl = req.query.url;
        const info = await ytdl.getInfo(videoUrl);
        const format = ytdl.chooseFormat(info.formats, { quality: 'highest', filter: 'audioandvideo' });

        const sanitizedTitle = sanitizeFilename(info.videoDetails.title);
        res.header('Content-Disposition', `attachment; filename="${sanitizedTitle}.mp4"`);
        ytdl(videoUrl, { format }).pipe(res);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
