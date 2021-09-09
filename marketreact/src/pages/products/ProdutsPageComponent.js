import React from "react";
import Injection from "./index";
import { TitleComponent } from '../../helpers/components/title/TitleComponent';
import { useParams } from "react-router";

export default function ProductsPage(props) {

    const MainProductsComponent = Injection.getComponentByCode('productsModule');

    return (
        <div>
            <TitleComponent text="Products" />
            <MainProductsComponent routeParams={useParams()}/>
        </div>
    )
}