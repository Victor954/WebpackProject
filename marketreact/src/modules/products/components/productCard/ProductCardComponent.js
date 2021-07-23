import React from 'react';

export default function ProductCardComponent ({ title , discription }) {

    return (
        <div className="post-data">
            <h3>{title}</h3>
            <p>{discription}</p>
        </div>
    )
}