function updateNewYearCountdown() {
  const now = new Date();
  const nextYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
  const diff = nextYear - now;

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const format = (n) => n.toString().padStart(2, '0');

  document.getElementById("newYearCountdown").innerHTML =
    `Days: ${days}, Hours: ${format(hours)}, Minutes: ${format(minutes)}, Seconds: ${format(seconds)}`;
}

setInterval(updateNewYearCountdown, 1000);
