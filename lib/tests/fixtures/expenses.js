'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    id: '1',
    description: 'gum',
    note: '',
    amount: 200,
    createdAt: 0

}, {
    id: '2',
    description: 'rent',
    note: '',
    amount: 2000,
    createdAt: (0, _moment2.default)(0).subtract(4, 'days').valueOf()

}, {
    id: '3',
    description: 'credit card',
    note: '',
    amount: 4000,
    createdAt: (0, _moment2.default)(0).add(4, 'days').valueOf()

}];