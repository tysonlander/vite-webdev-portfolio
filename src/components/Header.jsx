import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; // happy holiday font

const Header = () => {
    const location = useLocation();

    const currentPathname = location.pathname;
    const pages = [
        { name: 'home', link: '/', active: false },
        { name: 'about', link: '/about', active: false },
        { name: 'projects', link: '/projects', active: false },
    ];
    //  px-14
    return (
        <div className="bg-cBlack">
            <div
                className="inner-container text-white flex justify-between items-center sm:h-16"
                style={{ height: 90 }}
            >
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>

                <div className="flex">
                    {pages.map((page, index) => (
                        <Link
                            key={index}
                            to={page.link}
                            className={
                                'ml-9 text-lg ' +
                                (page.link === currentPathname
                                    ? 'text-gray-500'
                                    : '')
                            }
                        >
                            {page.name}
                        </Link>
                    ))}
                    {/* <Link to="/" className="mx-8">
                   home
                </Link>
                <Link to="/" className="mx-8">
                    Go Back
                </Link> */}
                </div>
            </div>
        </div>
    );
};

export default Header;
