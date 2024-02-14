import { useEffect, useRef, useState } from "react";

const NavBarMenu = (props: { showMenu: boolean }) => {
    const { showMenu } = props;

    const [contentHeight, setContentHeight] = useState('h-0');

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            if (showMenu) {
                const height = contentRef.current!.clientHeight;
                setContentHeight(`h-[${height}px]`);
            }
            else {
                setContentHeight('h-0');
            }
        }
    }, [showMenu]);

    return (
        <div className={`w-screen bg-gray-400 transition-all duration-300 ease-in overflow-hidden 
            ${contentHeight}`}>
            <div ref={contentRef}>
                {Array(10).fill(10).map((_v, i) => (
                    <p key={i}>Hello World</p>
                ))}
            </div>
        </div>
    );
}




export default NavBarMenu;