module.exports = function getSeason(date) {

  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date && !isNaN(date.valueOf()))) throw new Error();

  try {
    date.valueOf()
  } catch {
    throw new Error();
  }

  let month = date.getMonth();

  if (month === 0 || month === 1 || month === 11) return "winter";  // 0: 'winter', 1: 'winter', 11: 'winter'
  else if (month >= 2 && month <= 4) return "spring";               // 2: 'spring', 3: 'spring', 4: 'spring'
  else if (month >= 5 && month <= 7) return "summer";               // 5: 'summer', 6: 'summer', 7: 'summer',
  else if (month >= 8 && month <= 10) return "autumn";              // 8: 'autumn', 9: 'autumn', 10: 'autumn'

};
