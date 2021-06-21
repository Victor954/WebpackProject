import React from 'react';
import Template from './MainShopCardsView.jsx';

export class MainShopCardsComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            postData: null
        }
    }

    componentDidMount() {

        this.handleLoadData(
            require('../models/PostCollection.json')
        );
    }

    handleLoadData (postData) {

        this.setState({
            postData: postData
        });
    }

    render() {
        return Template.call(this);
    }
  }
