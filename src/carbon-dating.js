const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity !== 'string'
    || /[a-zA-Z]/.test(sampleActivity)
    || !sampleActivity
    || (Number(sampleActivity) <= 0)
    || (Number(sampleActivity) > MODERN_ACTIVITY)
  )
    return false;

  const REACTION_RATE = 0.693 / HALF_LIFE_PERIOD;
  let sampleActivityNumber = parseFloat(sampleActivity, 10);
  let years = Math.log(MODERN_ACTIVITY / sampleActivityNumber) / REACTION_RATE;
  let date = Math.ceil(years);
  return date;

};
