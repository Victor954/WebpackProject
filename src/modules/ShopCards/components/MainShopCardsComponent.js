import React from 'react';
import Template from './MainShopCardsView.jsx';

export class MainShopCardsComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            postData: null
        }
    }

    componentDidMount () {

        this.setState({
            postData: this.getPostData()
        })
    }

    getPostData = () => {

        return require('../models/PostCollection.json');
    }

    render() {
        return Template.call(this);
    }
  }
