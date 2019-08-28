import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
    const mockRemove= jest.fn();
    const id = 1;
    const props = {gift: { id }, removeGift: mockRemove };
    const gift = shallow(<Gift {...props}  />);
    
    it('renders properly', () => {
        expect(gift.debug()).toMatchSnapshot();
    })
    
    it('initializes a person and a present in `state`', () => {
        expect(gift.state()).toEqual({ person:'', present:'' });
    })

    describe('when typing into the person input', () => {
        const person = 'Mom';

        beforeEach(()=>{
            gift.find('.input-person').simulate('change', {target: { value: person}})
        })

        it('updates the person in `state`', () => {
            expect(gift.state().person).toEqual(person);
        })
    })

    describe('when typing into the present input', () => {
        const present = 'Cat';

        beforeEach (() => {
            gift.find('.input-present').simulate('change', { target: {value : present}})
        })

        it('updates the present in `state`', () => {
            expect(gift.state().present).toEqual(present)
        })
    })

    describe('when clicking the `remove gift`button', () => {
        beforeEach(()=>{
            gift.find('.btn-remove').simulate('click');
        })

        it('calls the removeGift callback', () => {
            expect(mockRemove).toHaveBeenCalledWith(id);
        })
    })
})