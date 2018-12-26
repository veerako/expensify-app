import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDash from '../../components/ExpenseDash';


test('Should render header correctly',()=>{

    const wrapper = shallow(<ExpenseDash/>);
    expect(wrapper).toMatchSnapshot();
});