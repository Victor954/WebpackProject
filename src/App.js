import React from 'react';
import { MainShopCardsComponent } from './modules/ShopCards/components/MainShopCardsComponent'

export class App extends React.Component {
    render(){
      return (
        <div className="app-container">
            <h1>Welcome to React</h1>
            <MainShopCardsComponent />
        </div>
      );
    }
  }
