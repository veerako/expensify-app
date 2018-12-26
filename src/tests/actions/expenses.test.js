import { addExpense , editExpense , removeExpense } from '../../actions/expenses';

test('should setup remove expense action object',()=>{
    const action = removeExpense({id:'kvk'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'kvk',

    });

});

test('should setup edit expense action object',()=>{
    const action = editExpense('veera', {note: 'Hi'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'veera',
        updates: {
        note: 'Hi'
        }
    });

});

test('should setup add expense action object',()=>{
    const expenseData = {
        description:'rent',
        note:'last month',
        amount: 1000,
        createdAt : 1000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }


    });

});

test('should setup add expense action object with default values',()=>{
    
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
        
            id: expect.any(String),
            description:'',
            note:'',
            amount: 0,
            createdAt: 0
        }

    });
    
});

//Objects arrays toEqual, numbers booleans strings toBe