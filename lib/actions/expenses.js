'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.editExpense = exports.removeExpense = exports.addExpense = undefined;

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//ADD_EXPENSE
var addExpense = exports.addExpense = function addExpense() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        _ref$note = _ref.note,
        note = _ref$note === undefined ? '' : _ref$note,
        _ref$amount = _ref.amount,
        amount = _ref$amount === undefined ? 0 : _ref$amount,
        _ref$createdAt = _ref.createdAt,
        createdAt = _ref$createdAt === undefined ? 0 : _ref$createdAt;

    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: (0, _uuid2.default)(),
            description: description, note: note, createdAt: createdAt, amount: amount
        }

    };
};

//REMOVE_EXPENSE
var removeExpense = exports.removeExpense = function removeExpense() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        id = _ref2.id;

    return {
        type: 'REMOVE_EXPENSE',
        id: id

    };
};

//EDIT_EXPENSE
var editExpense = exports.editExpense = function editExpense(id, updates) {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    };
};