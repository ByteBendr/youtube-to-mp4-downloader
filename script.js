function downloadVideo() {
    const videoId = document.getElementById('searchInput').value;
    window.location.href = `https://youtubetomp4.onrender.com/download?url=${videoId}`;
}
