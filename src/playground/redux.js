import { createStore } from 'redux';

//Action generators
const incrementCount = ({incrementBy = 1 } ={}) => ({
    type: 'INCREMENT',
    incrementBy
    
});
const decrementCount = ({decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = ({count}={}) => ({
    type: 'RESET',
    count 
});

const setCount = ({count}={}) => ({
    type: 'SET',
    count

});

const countReducer = (state = {count: 0 }, action)=> {

    switch(action.type){
        case 'INCREMENT':
    
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return{
            count: state.count - action.decrementBy
        };
        case 'SET':
        return{
            count: action.count
        };
        case 'RESET':
        return{
            count: 0
        };
        default: return state;
    }

}
const store = createStore(countReducer);
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});



/*store.dispatch ({
    type: 'INCREMENT',
    incrementBy: 5
});*/
store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(incrementCount({decrementBy:10}));
store.dispatch(resetCount({count:0}));
store.dispatch(setCount({count:500}));




unsubscribe();
