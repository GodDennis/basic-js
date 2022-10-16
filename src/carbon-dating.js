const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof (+sampleActivity) === "number" && typeof (sampleActivity) !== "number") {
    let a = MODERN_ACTIVITY / sampleActivity
    let result = Math.log(a) / (0.69297 / HALF_LIFE_PERIOD)
    if (isNaN(result) || isFinite(result) === false || Math.sign(result) === -1 || Array.isArray(sampleActivity) === true) {
      return false
    }
    else {
      return Math.round(result)
    }
  }
  else {
    return false

  }
}

module.exports = {
  dateSample
};
