'use strict';

var baseIteratee = require('./internal/baseIteratee');
var baseSortedUniq = require('./internal/baseSortedUniq');

/**
 * This method is like `uniqBy` except that it's designed and optimized
 * for sorted arrays.
 *
 * @static
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor); => [1.1, 2.3]
 */
function sortedUniqBy(array, iteratee) {
    return (array && array.length)
        ? baseSortedUniq(array, baseIteratee(iteratee, 2))
        : [];
}

module.exports = sortedUniqBy;
