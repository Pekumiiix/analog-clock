const seconds = document.getElementById('seconds')
const minutes = document.getElementById('minutes')
const hour = document.getElementById('hour')

function getTime() {
    const now = new Date()

    const secondsTime = now.getSeconds()
    const minutesTime = now.getMinutes()
    const hourTime = now.getHours()

    const timeInterval = 6

    seconds.style.transform = 'rotate(' + (secondsTime * timeInterval) + 'deg)'
    minutes.style.transform = 'rotate(' + (minutesTime * timeInterval + secondsTime / 10) + 'deg)'
    hour.style.transform = 'rotate(' + (hourTime * 30 + minutesTime / 2) + 'deg)'
}

setInterval(getTime, 100)