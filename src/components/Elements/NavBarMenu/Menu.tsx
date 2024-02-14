interface MenuProps {
    label: string,
    isActive?: boolean,
}

const Menu = (props: MenuProps) => {
    const { label } = props;
    return (
        <div className="">
            {label}
        </div>
    );
}

export default Menu;