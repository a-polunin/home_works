function range(start, end, step = 1) {
  if (start > end) {
    let reversStep = step - step * 2
    return [start].concat(range(start + reversStep, end))
  }
  if (end === undefined) {
    const end = start
    const newStart = 0
    return [newStart].concat(range(newStart + step, end))
  }
  if (start < end) {
    return [start].concat(range(start + step, end))
  }
  if (start === end) {
    return [end]
  }
}

module.exports = range