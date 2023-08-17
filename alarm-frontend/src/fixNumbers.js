const minutesNumber = fixNumber(Array.from(Array(60).keys()))
const hourNumber = fixNumber(Array.from(Array(12).keys()))

function fixNumber(value) {
    value = value.map(hour => {
        hour = hour + 1
        if (hour < 10) {
            hour = "0" + hour
        }
        return hour
    })
    return value
}

export { minutesNumber, hourNumber }