import React from 'react';
import { MainShopCardsComponent } from './MainShopCardsComponent';

import {configure , shallow , mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

let component;
const setUp = (props) => shallow(<MainShopCardsComponent { ...props }/>);

const spy = jest.spyOn(MainShopCardsComponent.prototype, 'componentDidMount');

beforeEach(() => {
    component = setUp();
});

afterEach(() => {
    
    spy.mockClear();
    component.unmount();
})

describe('componentDidMount tests' , () => {

    test('componentDidMountSpy called once time' , () => {
        expect(spy).toBeCalledTimes(1);
    });
});


describe('handleLoadData tests' , () => {

    let instance;

    const setInstnceGetPostFn = (fn) =>  {

        const getPostDataFn = jest.fn().mockImplementation(fn);
        instance.getPostData = getPostDataFn
    
        return getPostDataFn;
    }

    beforeEach(() => {
        instance = component.instance();
    });

    test('componentDidMount called handleLoadData once time' , () => {

        const getPostDataFn = setInstnceGetPostFn(() => []);
        
        instance.componentDidMount();
        expect(getPostDataFn).toBeCalledTimes(1);
    });
    
    
    test('set void array at state when called componentDidMount' , () => {
    
        setInstnceGetPostFn(() => []);
        
        instance.componentDidMount();
        expect(instance.state.postData).toEqual([]);
    });
});