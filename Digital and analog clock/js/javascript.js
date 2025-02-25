function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    document.getElementById('digital').innerText =
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6;
    document.getElementById('hour').style.transform = `translate(-50%) rotate(${hourDeg}deg)`;
    document.getElementById('minute').style.transform = `translate(-50%) rotate(${minuteDeg}deg)`;
    document.getElementById('second').style.transform = `translate(-50%) rotate(${secondDeg}deg)`;
}
setInterval(updateClock, 1000);
updateClock();