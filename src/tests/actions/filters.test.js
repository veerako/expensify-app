import moment from 'moment';
import { setTextFilter , sortByDate , sortByAmount  , setStartDate , setEndDate } from '../../actions/filters';


//1a
test('test case for set text filter',()=>{
    const text = 'some text';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});
//1b
test('test case for set text filter with default values',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});
//2
test('test case for sort by amount',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});
//3
test('test case for sort by date',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE', 
    });
});
//4
test('test case for set start date',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});
//5
test('test case for set end date',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});