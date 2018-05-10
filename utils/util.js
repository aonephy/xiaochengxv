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
<<<<<<< HEAD

=======
=======
>>>>>>> d130ede8b8591b228ebb9eba011f44362c184e10
const formatTime2 = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-')
}
<<<<<<< HEAD
>>>>>>> e934ee26b5b5db6d328c1f41d719da32e4f8f450
=======
>>>>>>> d130ede8b8591b228ebb9eba011f44362c184e10
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
  formatTime: formatTime
=======
  formatTime: formatTime,
  formatTime2: formatTime2
>>>>>>> e934ee26b5b5db6d328c1f41d719da32e4f8f450
=======
  formatTime: formatTime,
  formatTime2: formatTime2
>>>>>>> d130ede8b8591b228ebb9eba011f44362c184e10
}
