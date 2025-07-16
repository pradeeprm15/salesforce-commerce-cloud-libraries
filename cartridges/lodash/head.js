'use strict';

/**
 * Gets the first element of `array`.
 *
 * @static
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * head([1, 2, 3]); => 1
 *
 * head([]); => undefined
 */
function head(array) {
    return (array && array.length) ? array[0] : undefined;
}

module.exports = head;
