
const convertNumberToTime = (number) => {
  if (parseInt(number, 0) >= 3600) {
    const hour = Math.ceil(number / 3600);
    if (hour > 12) {
      return `${hour - 12} PM`
    }
    if (hour === 12) {
      return `${hour} PM`
    }
    return `${hour} AM`

  }
  return ''
}

export const isToday = (day) => {
  const weekdays = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ]
  if (day && day.trim().toLowerCase() === weekdays[((new Date()).getDay())]) {
    return true
  }
  return false
}

export const chunkArray = (array, chunkSize = 2) => {
  let i, j = 0
  let tempArr = [];
  for (i = 0, j = array.length; i < j; i += chunkSize) {
    tempArr.push(array.slice(i, i + chunkSize));
  }
  return tempArr
}


export const getSchedule = (mockData) => {
  let schedule = [];
  const obj = Object.assign({}, mockData)
  Object.keys(obj).forEach((key, index) => {
    const day = {
      day: key,
      time: [],
      close: obj[key].length ? false : true
    }

    for (let i = 0; i < obj[key].length; i++) {
      if (obj[key][i].type === 'close' && i === 0) {
        // do nothing 
      } else if (obj[key][i].type === 'open' && i === obj[key].length - 1) {
        day.time.push(`${convertNumberToTime(obj[key][i].value)}`);
        day.time.push(`${convertNumberToTime(obj[Object.keys(obj)[index + 1]][0].value)}`)
      } else {
        day.time.push(`${convertNumberToTime(obj[key][i].value)}`)
      }
    }
    schedule.push(day)
  });

  return schedule;
}

