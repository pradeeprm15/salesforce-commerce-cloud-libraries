'use strict';

var getTimezoneOffsetInMilliseconds = require('./_lib/getTimezoneOffsetInMilliseconds/index');
var startOfISOWeek = require('./startOfISOWeek');

var MILLISECONDS_IN_WEEK = 604800000;

/**
 * @name differenceInCalendarISOWeeks
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|number} dirtyDateLeft - the later date
 * @param {Date|number} dirtyDateRight - the earlier date
 * @returns {number} the number of calendar ISO weeks
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * var result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6)
 * )
 * //=> 3
 */
module.exports = function differenceInCalendarISOWeeks(
    dirtyDateLeft,
    dirtyDateRight
) {
    if (arguments.length < 2) {
        throw new TypeError(
            '2 arguments required, but only ' + arguments.length + ' present'
        );
    }

    var startOfISOWeekLeft = startOfISOWeek(dirtyDateLeft);
    var startOfISOWeekRight = startOfISOWeek(dirtyDateRight);

    var timestampLeft = startOfISOWeekLeft.getTime()
    - getTimezoneOffsetInMilliseconds(startOfISOWeekLeft);
    var timestampRight = startOfISOWeekRight.getTime()
    - getTimezoneOffsetInMilliseconds(startOfISOWeekRight);

    // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
};
