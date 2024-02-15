import { dataMenu } from "./dataMenu";
import Menu from "./Menu";

const NavBarMenu = (props: { showMenu: boolean }) => {
    const { showMenu } = props;

    return (
        <div className={`w-screen bg-gray-400 transition-all duration-300 ease-in overflow-hidden
            ${showMenu ? `h-screen` : "h-0"}`}>
            <div >
                {dataMenu.map((value, i) => (
                    <Menu key={i} label={value} />
                ))}
            </div>
        </div>
    );
}

export default NavBarMenu;