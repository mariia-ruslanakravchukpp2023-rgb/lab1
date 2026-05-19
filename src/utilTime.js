export function addMinutes(time, minutes) {
  const [h, m] = time.split(':').map(Number)

  let total = h * 60 + m + minutes
  total = total % (24 * 60)

  const newH = Math.floor(total / 60)
  const newM = total % 60

  return `${String(newH).padStart(2, '0')}:${String(newM).padStart(2, '0')}`
}

export function isMorning(time) {
  const hour = Number(time.split(':')[0])
  return hour >= 5 && hour < 12
}

export function isEvening(time) {
  const hour = Number(time.split(':')[0])
  return hour >= 18 && hour <= 23
}