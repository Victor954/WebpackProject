import React from 'react';
import { MainShopCardsComponent } from './MainShopCardsComponent';

import {configure , shallow , mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

let component;
const setUp = (props) => shallow(<MainShopCardsComponent { ...props }/>);

beforeEach(() => {

    component = setUp();
});

afterEach(() => {

    component.unmount();
})

describe('MainShopCardsComponent main functional', () => {

    test('component is rendering' , () => {
        
        expect(component).toMatchSnapshot();
    });

    test('component is not contains void', () => {

        expect(component.children().length).not.toBe(0);
    });
});

describe('MainShopCardsComponent instance functional' , () => {

    let instance;
    const componentDidMountSpy = jest.spyOn(MainShopCardsComponent.prototype, 'componentDidMount')

    beforeEach(() => {

        instance = component.instance();
    });
    
    afterEach(() => {
        componentDidMountSpy.mockReset();
    })

    test('handleLoadData is changing state.postData' , () => {
        const data = [1, 2, 3, 4, 5];

        instance.handleLoadData(data);
        expect(component.state().postData).toEqual(data);
    });

    test('componentDidMountSpy called once time' , () => {
        expect(componentDidMountSpy).toBeCalledTimes(1);
    });

    test('when call componentDidMountSpy called handleLoadData once time' , () => {

        const handleLoadDataSpy = jest.spyOn(instance, 'handleLoadData');
        instance.handleLoadData([]);

        component.update();

        expect(handleLoadDataSpy).toHaveBeenCalledTimes(1);
    });
});