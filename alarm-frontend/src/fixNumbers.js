const minutesNumber = fixMinute(Array.from(Array(60).keys()))
const hourNumber = fixHour(Array.from(Array(12).keys()))

function fixHour(value) {
    value = value.map(hour => {
        hour = hour + 1
        if (hour < 10) {
            hour = "0" + hour
        }
        return hour
    })
    return value
}

function fixMinute(value) {
    value = value.map(minute => {
        if (minute < 10) {
            minute = "0" + minute
        }
        return minute
    })
    return value
}

export { minutesNumber, hourNumber }