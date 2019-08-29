    
import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore} from './../Utils';
import React from 'react';

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper;
}

describe('App Component', () => {

    let wrapper;
    beforeEach(()=>{
        const initialState = {
            posts:[{
                title:'Test Title 1',
                body:'Some text 1'
            },{
                title:'Test Title 2',
                body:'Some text 2'
            },{
                title:'Test Title 3',
                body:'Some text 3'
            }]
        }
        wrapper = setUp(initialState);
    });

    it ('Should render without errors',()=>{
        const component = findByTestAttr(wrapper,'appComponent');
        expect(component.length).toBe(1);
    });

    // it('Should update state as expected', () => {
    //     const classInstance = wrapper.instance();
    //     classInstance.exampleMethod_updateState();
    //     const newState = classInstance.state.hideBtn;
    //     expect(newState).toBe(true);
    // });
})