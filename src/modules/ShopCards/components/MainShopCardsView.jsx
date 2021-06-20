import React from 'react';

export default function MainShopCardsView () {

    if(this.state.postData === null){
        return <div>loading...</div>
    }

    return this.state.postData.map(({id ,name , discription}) => {
        return (
            <div key={id}>
                <h3>{name}</h3>
                <p>{discription}</p>
            </div>
        )
    }); 
}