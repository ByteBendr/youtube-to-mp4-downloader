function downloadVideo() {
    const videoId = document.getElementById('searchInput').value;
    window.location.href = `https://youtube-to-mp4-downloader.vercel.app/download?url=${videoId}`;
}
