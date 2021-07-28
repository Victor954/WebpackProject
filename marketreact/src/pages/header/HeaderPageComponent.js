import Injection from "./index";

export default function HeaderPage({ contracts }) {

    const MainMenuComponent = Injection.getComponentByCode('menuModule');

    return (
        <div>
            <MainMenuComponent contracts={contracts}/>
        </div>
    )
}