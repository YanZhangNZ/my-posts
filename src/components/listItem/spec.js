import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../../../Utils/index'
import ListItem from './index'
import { join } from 'path';

describe('ListItem Component', () => {

    describe('Checking PropTypes',()=>{

        it ('Should Not throw a warning', () => {
            const expectedProps = {
                title:'Test Title',
                desc:'Test Desc'
            };
            const propsErr = checkProps(ListItem,expectedProps);
            expect(propsErr).toBeUndefined();
        });

    });

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(()=>{
            const props={
                title:'Test Title',
                desc:'Test Desc'
            };
            wrapper = shallow(<ListItem {...props} />);
        });

        it('Should renders without error',()=>{
            const component = findByTestAttr(wrapper,'listItemComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a title',()=>{
            const title = findByTestAttr(wrapper,'title');
            expect(title.length).toBe(1);
        });

        it('Should render a desc', () => {
            const desc = findByTestAttr(wrapper,'desc');
            expect(desc.length).toBe(1);
        })
    });
    
    describe('Should Not Render', () => {
        let wrapper;
        beforeEach(()=>{
            const props = {
                desc:'Some Desc'
            };
            wrapper = shallow(<ListItem {...props} />)
        });

        it ('Component is not rendered', () => {
            const component = findByTestAttr(wrapper,'listItemComponent');
            expect(component.length).toBe(0)
        });
    });
})