import { App } from './App';
import React from 'react';
import { MainShopCardsComponent } from './modules/ShopCards/components/MainShopCardsComponent'

import {configure , shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

let component;
const setUp = (props) => shallow(<App {...props}/>);

beforeEach(() => {

    component = setUp();
});

afterEach(() => {

    component.unmount();
})

describe('App main functional', () => {

    test('component is rendering' , () => {
        
        expect(component).toMatchSnapshot();
    });

    test('component is not contains void', () => {

        expect(component.children().length).not.toBe(0);
    });
});

describe('App div[class="app-container"] functional', () => {

    test('component contains main div block with attr class="app-container" ' , () => {
        
        expect(component.find('.app-container').length).toBe(1);
    });
});

describe('App h1 functional', () => {

    let loaclInstance;

    beforeEach(() => {

        loaclInstance = component.find('h1');
    });
    
    test('component contains h1' , () => {
        
        expect(loaclInstance.length).toBe(1);
    });

    test('h1 contains inner text="Welcome to React"' , () => {
        
        expect(loaclInstance.text()).toBe('Welcome to React');
    });
});

describe('App MainShopCardsComponent functional', () => {
    
    let loaclInstance;

    beforeEach(() => {

        loaclInstance = component.find(MainShopCardsComponent);
    });
    
    test('component contains MainShopCardsComponent' , () => {
        
        expect(loaclInstance.length).toBe(1);
    });

    test('props of component is not setting' , () => {

        expect(loaclInstance.props()).toEqual({});
    });
});