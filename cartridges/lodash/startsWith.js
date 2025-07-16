'use strict';

var baseClamp = require('./internal/baseClamp');
var baseToString = require('./internal/baseToString');
var toInteger = require('./toInteger');
var toString = require('./toString');

/**
* Checks if `string` starts with the given target string.
*
* @static
* @since 3.0.0
* @category String
* @param {string} [string=''] The string to inspect.
* @param {string} [target] The string to search for.
* @param {number} [position=0] The position to search from.
* @returns {boolean} Returns `true` if `string` starts with `target`,
*  else `false`.
* @example
*
* startsWith('abc', 'a'); => true
*
* startsWith('abc', 'b'); => false
*
* startsWith('abc', 'b', 1); => true
*/
function startsWith(string, target, position) {
    string = toString(string);
    position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

    target = baseToString(target);
    return string.slice(position, position + target.length) == target;
}

module.exports = startsWith;
