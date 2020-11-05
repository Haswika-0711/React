import React from 'react'
import {shallow,mount,render} from 'enzyme'
import OrderedList from '../components/OrderedList';

describe('Out test suites', () => {
    it('render all the mocked options', () => {
        const names=['Eshan','Tanish','manish']
        const wrapper=render(<OrderedList options={name}/>)
        
        expect(wrapper.find('options')).toBeDefined();
        expect(wrapper.find('.value')).toHaveLength(names.length)
        
    });
});

