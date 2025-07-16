'use strict';

var baseFlatten = require('./internal/baseFlatten');
var toInteger = require('./toInteger');

/**
 * Recursively flatten `array` up to `depth` times.
 *
 * @static
 * @since 4.4.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @param {number} [depth=1] The maximum recursion depth.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * var array = [1, [2, [3, [4]], 5]];
 *
 * flattenDepth(array, 1); => [1, 2, [3, [4]], 5]
 *
 * flattenDepth(array, 2); => [1, 2, 3, [4], 5]
 */
function flattenDepth(array, depth) {
    var length = array == null ? 0 : array.length;
    if (!length) {
        return [];
    }
    depth = depth === undefined ? 1 : toInteger(depth);
    return baseFlatten(array, depth);
}

module.exports = flattenDepth;
