import { useRef, useState } from "react";
import BurgerMenu from "../Elements/BurgerMenu/BurgerMenu";
import Button from "../Elements/Button/Button";
import NavBarMenu from "../Elements/NavBarMenu/NavBarMenu";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const headerRef = useRef<HTMLDivElement>(null);

    const onBurgerMenuChanged = (value: boolean) => {
        setShowMenu(value);
    }

    window.onscroll = () => {
        const header = headerRef.current!;
        const offsetTop = header.offsetTop;
        if (window.scrollY > offsetTop) {
            header.classList.add('navbar-fixed');
        } else {
            header.classList.remove('navbar-fixed');
        }
    }

    return (
        <nav className="w-full fixed">
            <div ref={headerRef} className="py-3 bg-white shadow-md flex justify-between items-center px-mobile">
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