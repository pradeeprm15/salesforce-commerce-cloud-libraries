'use strict';

var baseIteratee = require('./internal/baseIteratee');
var baseSum = require('./internal/baseSum');

/**
 * This method is like `sum` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be summed.
 * The iteratee is invoked with one argument: (value).
 *
 * @static
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=identity] The iteratee invoked per element.
 * @returns {number} Returns the sum.
 * @example
 *
 * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 *
 * sumBy(objects, function(o) { return o.n; }); => 20
 *
 * * The `property` iteratee shorthand. *
 * sumBy(objects, 'n'); => 20
 */
function sumBy(array, iteratee) {
    return (array && array.length)
        ? baseSum(array, baseIteratee(iteratee, 2))
        : 0;
}

module.exports = sumBy;
