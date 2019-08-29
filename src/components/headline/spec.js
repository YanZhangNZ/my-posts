import React from 'react'
import { shallow } from 'enzyme'
import HeadLine from './index'

import { findByTestAttr, checkProps } from '../../../Utils/index'

const setUp = (props = { }) => {
    const component = shallow(<HeadLine {...props} />);
    return component;
};

describe('Headline Component', () => {

    describe('Checking PropTypes', () => {

        it ('Should not throw a warning', () => {

            const expectedProps = {
                header:'Test Header',
                desc:'Test Desc',
                tempArr:[{
                    fName:'Test fName',
                    lName:'Test lName',
                    email:'test@email.com',
                    age:23,
                    onlineStatus:false
                }]
            };
            const propErr = checkProps(HeadLine,expectedProps);
            expect(propErr).toBeUndefined();
        });
    });


})