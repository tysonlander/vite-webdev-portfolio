const GetInTouchButton = ({ children, classes }) => {
    const handleClick = () => {
        window.open('https://www.linkedin.com/in/tysonlander/');
    };

    return (
        <button
            type="button"
            className={
                'inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ' +
                (classes !== 'undefined' ? classes : '')
            }
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default GetInTouchButton;
