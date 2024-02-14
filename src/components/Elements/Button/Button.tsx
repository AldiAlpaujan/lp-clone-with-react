const Button = (props: { className?: string, label: string }) => {
    const { className, label } = props;
    return (
        <button
            className={`${className || ''} py-3 px-5 bg-primary text-lg font-semibold tracking-wide text-white rounded-full shadow-lg 
            transition-all duration-150 hover:opacity-85 hover:shadow-xl active:opacity-100`}>
            {label}
        </button>
    );
}

export default Button;