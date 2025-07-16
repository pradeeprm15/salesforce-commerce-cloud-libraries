'use strict';

var getTag = require('./internal/getTag');
var isObjectLike = require('./isObjectLike');

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * isBoolean(false) => true
 *
 * isBoolean(null) => false
 */
function isBoolean(value) {
    return value === true || value === false
    || (isObjectLike(value) && getTag(value) === '[object Boolean]');
}

module.exports = isBoolean;
