import { createContext, useState } from "react";
import { ChildrenType } from "../utils/global_type";

export const NavMenu: string[] = [
    "Home",
    "Harga",
    "Fitur",
    "Blog",
];

interface ProviderValue  {
    menuActive: string,
    setMenuActive: (value: string) => void,
}

const NavBarMenuContext = createContext<ProviderValue | null>(null);

const NavBarMenuContextProvider = (props: {children: ChildrenType}) => {
    const [menuActive, setMenuActive] = useState(NavMenu[0]);
    return (
        <NavBarMenuContext.Provider value={{ menuActive, setMenuActive }}>
            {props.children}
        </NavBarMenuContext.Provider>
    );
} 

export { NavBarMenuContext };
export default NavBarMenuContextProvider;

