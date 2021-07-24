import React from "react";
import Injection from "./index";

export default function HomePage(props) {

    const MainProductsComponent = Injection.getComponentByCode('productsModule');

    return (
        <div>
            <MainProductsComponent/>
        </div>
    )
}