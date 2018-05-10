const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
<<<<<<< HEAD

=======
const formatTime2 = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-')
}
>>>>>>> e934ee26b5b5db6d328c1f41d719da32e4f8f450
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
<<<<<<< HEAD
  formatTime: formatTime
=======
  formatTime: formatTime,
  formatTime2: formatTime2
>>>>>>> e934ee26b5b5db6d328c1f41d719da32e4f8f450
}
