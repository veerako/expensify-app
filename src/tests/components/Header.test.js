// react-test-renderer
//shallow rendering only renders  given component
//full dom rendering renders child components too
//snapshot allows us to keep a track of changes to data over time

import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';


test('Should render header correctly',()=>{

    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
});

 //expect(wrapper.find('h1').text()).toEqual('Expensify');
    //const renderer = new ReactShallowRenderer();
    //renderer.render(<Header/>);
    //expect(renderer.getRenderOutput()).toMatchSnapshot();