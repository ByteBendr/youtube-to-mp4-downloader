function downloadVideo() {
    const videoId = document.getElementById('searchInput').value;
    window.location.href = `http://localhost:3000/download?url=${videoId}`;
}
