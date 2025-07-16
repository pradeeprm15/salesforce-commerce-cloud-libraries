'use strict';

var baseTimes = require('./baseTimes');
var isArguments = require('../isArguments');
var isArray = require('../isArray');
var isBuffer = require('../isBuffer');
var isIndex = require('./isIndex');
var isTypedArray = require('../isTypedArray');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value);
    var isArg = !isArr && isArguments(value);
    var isBuff = !isArr && !isArg && isBuffer(value);
    var isType = !isArr && !isArg && !isBuff && isTypedArray(value);
    var skipIndexes = isArr || isArg || isBuff || isType;
    var result = skipIndexes ? baseTimes(value.length, String) : [];
    var length = result.length;

    for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key))
            && !(skipIndexes && (
                // Safari 9 has enumerable `arguments.length` in strict mode.
                key == 'length'
                // Node.js 0.10 has enumerable non-index properties on buffers.
                || (isBuff && (key == 'offset' || key == 'parent'))
                // PhantomJS 2 has enumerable non-index properties on typed arrays.
                || (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset'))
                // Skip index properties.
                || isIndex(key, length)
            ))) {
            result.push(key);
        }
    }
    return result;
}

module.exports = arrayLikeKeys;
