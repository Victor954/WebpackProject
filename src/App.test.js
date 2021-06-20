import { App } from './App';
import React from 'react';
import ReactTestRenderer  from 'react-test-renderer';
import { MainShopCardsComponent } from './modules/ShopCards/components/MainShopCardsComponent'

let componentInstance;
let componentRenderer;

beforeEach(() => {

    componentRenderer  = ReactTestRenderer.create(<App />);
    componentInstance = componentRenderer.root;
});

afterEach(() => {
    componentRenderer.unmount(<App />);
})

describe('App main functional', () => {

    test('component is rendering' , () => {
        
        expect(componentInstance).not.toBeNull();
    });

    test('component is not contains void', () => {

        expect(componentInstance.children.length).not.toBe(0);
    });
});

describe('App div[class="app-container"] functional', () => {

    test('component contains main div block with attr class="app-container" ' , () => {
        
        expect(componentInstance.findByProps({class: "app-container"})).not.toBeNull();
    });
});

describe('App h1 functional', () => {

    let loaclInstance;

    beforeEach(() => {

        loaclInstance = componentInstance.findByType('h1');
    });
    
    test('component contains h1' , () => {
        
        expect(loaclInstance).not.toBeNull();
    });

    test('h1 contains inner text="Welcome to React"' , () => {
        
        expect(loaclInstance.props.children).toBe('Welcome to React');
    });
});

describe('App MainShopCardsComponent functional', () => {
    
    let loaclInstance;

    beforeEach(() => {

        loaclInstance = componentInstance.findByType(MainShopCardsComponent);
    });
    
    test('component contains MainShopCardsComponent' , () => {
        
        expect(loaclInstance).not.toBeNull();
    });

    test('props of component is not setting' , () => {

        expect(loaclInstance.props).toEqual({});
    });
});