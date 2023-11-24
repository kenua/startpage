'use strict';

window.addEventListener('DOMContentLoaded', () => {
    let dayNode = document.getElementById('day');
    let monthYearNode = document.getElementById('month-year');
    let hourHandNode = document.getElementById('hour');
    let minuteHandNode = document.getElementById('minute');
    let secondHandNode = document.getElementById('second');
    let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    let date = new Date();

    updateClock();
    setInterval(updateClock, 1000);
    dayNode.textContent = `${days[date.getDay()]} ${date.getDate()}`;
    monthYearNode.textContent = `${months[date.getMonth()]} ${date.getFullYear()}`;

    function updateClock() {
        let currentTime = new Date();

        hourHandNode.style.transform = `translate(-50%) rotate(${(currentTime.getHours() * 30) + currentTime.getMinutes() / 2 }deg)`;
        minuteHandNode.style.transform = `translate(-50%) rotate(${currentTime.getMinutes() * 6}deg)`;
        secondHandNode.style.transform = `translate(-50%) rotate(${currentTime.getSeconds() * 6}deg)`;
    }
});
