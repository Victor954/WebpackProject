import React from "react";
import MainProductsContract from "../../modules/products";

export default function HomePage(props) {

    const MainProductsComponent = MainProductsContract.MainComponent;

    return (
        <div>
            <MainProductsComponent/>
        </div>
    )
}