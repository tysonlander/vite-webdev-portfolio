import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; // happy holiday font
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Button from './UI/GetInTouchButton';

const Footer = () => {
    const location = useLocation();

    const currentPathname = location.pathname;
    const pages = [
        { name: 'home', link: '/', active: false },
        { name: 'about', link: '/about', active: false },
        { name: 'projects', link: '/projects', active: false },
    ];

    return (
        <footer className="bg-cGrey200 shadow-inner">
            <div className="inner-container flex flex-col">
                <div className="flex flex-col items-center py-12 md:py-32">
                    <h1 className="text-neutral-700 text-3xl md:text-4xl text-center">
                        It's dangerous to go alone...
                    </h1>
                    <Button handleClick={() => {}} classes="my-8">
                        Get In Touch
                    </Button>
                    <div className="flex justify-center">
                        <a
                            href="https://github.com/tysonlander"
                            target="_blank"
                        >
                            <FaGithub
                                size={60}
                                className="text-neutral-700 mx-2"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/tysonlander/"
                            target="_blank"
                        >
                            <FaLinkedin
                                size={60}
                                className="text-neutral-700 mx-2"
                            />
                        </a>
                    </div>
                </div>
                <div className="py-8 flex justify-between">
                    <h3>© 2022 Tyson Lander</h3>

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
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
