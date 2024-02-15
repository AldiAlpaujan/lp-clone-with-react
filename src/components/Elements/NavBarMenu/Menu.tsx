interface MenuProps {
    label: string,
    isActive?: boolean,
}

const Menu = (props: MenuProps) => {
    const { label, isActive } = props;
    return (
        <div className="flex items-center mb-8 w-full">
            <span className={`${isActive ? 'block' : 'hidden'} mr-4 w-[20px] h-[1px] bg-white my-[6px] block rounded`} />
            <h2 className={`text-xl ${isActive ? "font-semibold" : "font-normal"} text-white`}>{label}</h2>
        </div>
    );
}

export default Menu;