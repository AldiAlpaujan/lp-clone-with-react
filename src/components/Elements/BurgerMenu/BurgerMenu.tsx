import { useState } from "react";

const BurgerMenu = (props: { onChanged: (value: boolean) => void }) => {
    const [isActive, setIsActive] = useState(false);

    const onButtonClick = () => {
        const newValue = !isActive;
        props.onChanged(newValue);
        setIsActive(newValue);
    }

    return (
        <button onClick={onButtonClick} className={`w-[30px] ${isActive ? 'burger-menu-active' : ''}`}>
            <span className="burger-menu-line transition-all duration-300 ease-in-out origin-top-left"></span>
            <span className="burger-menu-line transition-all duration-300 ease-in-out "></span>
            <span className="burger-menu-line transition-all duration-300 ease-in-out origin-bottom-left"></span>
        </button>
    );
}

export default BurgerMenu;