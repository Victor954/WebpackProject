import React from 'react';
import ReactTestRenderer  from 'react-test-renderer';
import { MainShopCardsComponent } from './MainShopCardsComponent';

let componentInstance;
let componentRenderer;

beforeEach(() => {

    componentRenderer  = ReactTestRenderer.create(<MainShopCardsComponent />);
    componentInstance = componentRenderer.root;
});

afterEach(() => {
    componentRenderer.unmount(<MainShopCardsComponent />);
})


describe('MainShopCardsComponent main functional', () => {

    test('component is rendering' , () => {
        
        expect(componentInstance).not.toBeNull();
    });

    test('component is not contains void', () => {

        expect(componentInstance.children.length).not.toBe(0);
    });

    test('test' , () => {

        const changeSize = jest.fn();
        const handleClick = jest.spyOn(React, "useState");
        handleClick.mockImplementation((size => [size, changeSize]));

        expect(changeSize).toBeTruthy();
    });
});