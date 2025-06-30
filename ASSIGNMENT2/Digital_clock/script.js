function updateLiveTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("liveTime").innerText = timeString;
}
setInterval(updateLiveTime, 1000);