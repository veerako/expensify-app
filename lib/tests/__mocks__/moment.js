'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var moment = require.requireActual('moment');

exports.default = function () {
    var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    return moment(timestamp);
};