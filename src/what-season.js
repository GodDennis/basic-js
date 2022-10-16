const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let time = date
  if (time instanceof Date) {
    if (2 <= time.getMonth() && time.getMonth() <= 4) {
      return ("spring");
    }
    else if (5 <= time.getMonth() && time.getMonth() <= 7) {
      return ("summer");
    }
    else if (8 <= time.getMonth() && time.getMonth() <= 10) {
      return ("autumn");
    }
    else if (0 <= time.getMonth() && time.getMonth() <= 1 || time.getMonth() == 11) {
      return ("winter");
    }
  }
  else { throw new Error('Invalid date!') }
  // else { return 'Unable to determine the time of year!' }
}


module.exports = {
  getSeason
};
