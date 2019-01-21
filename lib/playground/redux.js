'use strict';

var _redux = require('redux');

//Action generators
var incrementCount = function incrementCount() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$incrementBy = _ref.incrementBy,
        incrementBy = _ref$incrementBy === undefined ? 1 : _ref$incrementBy;

    return {
        type: 'INCREMENT',
        incrementBy: incrementBy

    };
};
var decrementCount = function decrementCount() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$decrementBy = _ref2.decrementBy,
        decrementBy = _ref2$decrementBy === undefined ? 1 : _ref2$decrementBy;

    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    };
};

var resetCount = function resetCount() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        count = _ref3.count;

    return {
        type: 'RESET',
        count: count
    };
};

var setCount = function setCount() {
    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        count = _ref4.count;

    return {
        type: 'SET',
        count: count

    };
};

var countReducer = function countReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { count: 0 };
    var action = arguments[1];


    switch (action.type) {
        case 'INCREMENT':

            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};
var store = (0, _redux.createStore)(countReducer);
var unsubscribe = store.subscribe(function () {
    console.log(store.getState());
});

/*store.dispatch ({
    type: 'INCREMENT',
    incrementBy: 5
});*/
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount({ decrementBy: 10 }));
store.dispatch(resetCount({ count: 0 }));
store.dispatch(setCount({ count: 500 }));

unsubscribe();