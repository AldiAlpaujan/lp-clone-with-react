import { useContext } from "react";
import { NavBarMenuContext, NavMenu } from "../../../context/NavBarMenuContext";
import Menu from "./Menu";

const NavBarMenu = (props: { showMenu: boolean }) => {
    const { showMenu } = props;
    const { menuActive, setMenuActive } = useContext(NavBarMenuContext)!;

    return (
        <div className={`w-full bg-gradient-to-t from-primary to-[#98de87]
            transition-all duration-300 ease-in overflow-hidden
            ${showMenu ? `h-screen` : "h-0"}`}>
            <div className="p-10" >
                {NavMenu.map((value, i) => (
                    <Menu 
                        key={i} 
                        label={value} 
                        isActive={value == menuActive}
                    />
                ))}
            </div>
        </div>
    );
}

export default NavBarMenu;