import { useState } from "react";
import BurgerMenu from "../Elements/BurgerMenu/BurgerMenu";
import Button from "../Elements/Button/Button";
import NavBarMenu from "../Elements/NavBarMenu/NavBarMenu";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const onBurgerMenuChanged = (value: boolean) => {
        setShowMenu(value);
    }

    return (
        <nav className="w-screen">
            <div className="py-3 bg-gray-300 flex justify-between items-center px-mobile">
                <img
                    className="w-28"
                    src="/image/nav-logo.png"
                    alt="" />
                <BurgerMenu onChanged={onBurgerMenuChanged} />
                <Button className="hidden" label="Daftar" />
            </div>
            <NavBarMenu showMenu={showMenu} />
        </nav>
    );
}

export default NavBar;