import React from "react";
import Injection from "./index";
import { TitleComponent } from '../../helpers/components/title/TitleComponent';

export default function HomePage(props) {

    const MainProductsComponent = Injection.getComponentByCode('productsModule');

    return (
        <div>
            <TitleComponent text="Home" />
            <MainProductsComponent/>
        </div>
    )
}