'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.altFilters = exports.filters = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
var altFilters = {
    text: 'bills',
    sortBy: 'amount',
    startDate: (0, _moment2.default)(0),
    endDate: (0, _moment2.default)(0).add(3, 'days')
};
exports.filters = filters;
exports.altFilters = altFilters;