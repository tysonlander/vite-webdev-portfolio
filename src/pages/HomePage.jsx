import { useState, useEffect } from 'react';
import profilePhoto from '../assets/profile-photo-one.jpeg'; // happy holiday font
import { FaHatWizard } from 'react-icons/fa';
import photoDave from '../assets/dave-torres.jpeg';
import photoGrant from '../assets/grant-keele.jpeg';
import photoTyler from '../assets/tyler-ellingford.jpeg';
import photoMatt from '../assets/matt-durham.jpeg';
import photoSteve from '../assets/steve-carrol.jpeg';
import backFrontPieChart from '../assets/back-front-pie-chart.jpeg';
import Button from '../components/UI/GetInTouchButton';

const HomePage = () => {
    const [displayRecommendationNum, setDisplayRecommendationNum] = useState(1);
    function handleChangeDisplayRecommendation(direction) {
        if (direction === 'next') {
            if (displayRecommendationNum + 1 === recommendations.length) {
                // out of bounds, next one is the first in array
                setDisplayRecommendationNum(0);
            } else
                setDisplayRecommendationNum((prevState) => {
                    prevState.displayRecommendationNum + 1;
                });
        }
    }

    // useEffect(() => {
    //     let interval = setInterval(function () {
    //         console.log('hitting line 18');
    //         handleChangeDisplayRecommendation('next');
    //     }, 100);
    // }, []);

    const engineerText = '< engineer >';
    const skills = {
        backend: [
            'Java / Spring',
            'Python',
            'Node / Express',
            'System Design',
            'SQL',
            'ORMs',
            'API Integrations',
        ],
        frontend: [
            'React',
            'Javascript',
            'AngularJS',
            'HTML',
            'CSS (like Seamus Finnigan)',
            'UI Design',
            'Casting curses at my computer',
        ],
    };

    const sampleRec = {
        person: 'David Torres',
        role: 'Lead QA Automation Engineer',
        quote: 'I would absolutely work with Tyson again.',
        img: photoDave,
    };

    const recommendations = [
        {
            person: 'David Torres',
            role: 'Lead QA Automation Engineer',
            quote: 'I would absolutely work with Tyson again.',
            img: photoDave,
        },
        {
            person: 'Grant Keele',
            role: 'VP Engineering',
            quote: 'He has an amazing attention to detail… It was refreshing to work with someone who has this vision… a great asset to the team and very reliable.',
            img: photoGrant,
        },
        {
            person: 'Tyler Ellingford',
            role: 'Student',
            quote: 'He is a fantastic leader and developer.',
            img: photoTyler,
        },
        {
            person: 'Matt Durham',
            role: 'Vice President',
            quote: 'Tyson clearly and quickly exemplified strong leadership skills…an entrepreneurial, hard working, and innovative employee.',
            img: photoMatt,
        },
        {
            person: 'David Torres',
            role: 'Lead QA Automation Engineer',
            quote: '… a highly intelligent developer who can bring fresh new ideas to the table. ',
            img: photoDave,
        },
        {
            person: 'Steve Carroll',
            role: 'President and CEO',
            quote: 'He will carry more than his fair share of work.',
            img: photoSteve,
        },
    ];

    return (
        <div>
            <iframe src="https://yolo.gosolo.io/proposal/MjM5Mzk1MQ==.MjAyMy0wNy0xMlQxNjoxNjozNC45NTha" height="500" width="500" title="test">
            </iframe>
            {/* hero section */}

            <section className="inner-container flex items-center py-8 md:py-36">
                <div className="flex flex-col-reverse md:flex-row md:justify-between w-full">
                    <div className="flex flex-col my-5">
                        <h1 className="text-5xl text-center md:text-left md:text-7xl mb-5 font-bold text-neutral-700">
                            {engineerText}
                        </h1>
                        <h2 className="text-2xl text-neutral-500 text-center md:text-left">
                            Full stack developer focused on building scalable
                            code and teams.
                        </h2>
                        <Button handleClick={() => {}} classes="my-8 w-36">
                            Get In Touch
                        </Button>
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            src={profilePhoto}
                            alt=""
                            className="border border-neutral-700 w-4/5 rounded-full p-3"
                        />
                    </div>
                </div>
            </section>

            {/* skills section  */}
            <section className="  bg-cGrey100 shadow-inner">
                <div className="inner-container py-32 flex flex-col md:flex-row md:justify-between ">
                    <div className="md:w-1/3">
                        <div>
                            <h1 className="text-4xl font-light mb-4 ">
                                Backend
                            </h1>
                            <div className="mb-7">
                                <div className="flex items-center">
                                    <div className="flex justify-center items-center p-4 aspect-square rounded-full  bg-yellow-300">
                                        <FaHatWizard
                                            style={{
                                                color: '#854d0e',
                                                fontSize: '2em',
                                            }}
                                        />
                                    </div>
                                    <div className="pl-5">
                                        <h2 className="text-2xl">Gandalph</h2>
                                        <h3 className="text-sm uppercase text-neutral-500">
                                            Wizarding Level
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            {skills.backend.map((skill, index) => (
                                <h3
                                    key={index}
                                    className="text-xl font-light my-2"
                                >
                                    {skill}
                                </h3>
                            ))}
                        </div>
                    </div>
                    <div className='p-12 md:pr-16'>
                        <img
                            src={backFrontPieChart}
                            alt=""
                            className="w-full rounded-full grayscale"
                        />
                    </div>
                    <div className="md:w-1/3">
                        <div>
                            <h1 className="text-4xl font-light mb-4 ">
                                Frontend
                            </h1>
                            <div className="mb-7">
                                <div className="flex items-center">
                                    <div className="flex justify-center items-center p-4 aspect-square rounded-full  bg-yellow-300">
                                        <FaHatWizard
                                            style={{
                                                color: '#854d0e',
                                                fontSize: '2em',
                                            }}
                                        />
                                    </div>
                                    <div className="pl-5">
                                        <h2 className="text-2xl">Radagast</h2>
                                        <h3 className="text-sm uppercase text-neutral-500">
                                            Wizarding Level
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            {skills.frontend.map((skill, index) => (
                                <h3
                                    key={index}
                                    className="text-xl font-light my-2"
                                >
                                    {skill}
                                </h3>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className=" shadow-inner">
                <div className="inner-container py-28 md:py-44">
                    <div className="flex items-center">
                        <div
                            className="w-1/2 hidden lg:flex"
                            style={{ maxWidth: '250px' }}
                        >
                            <img
                                src={
                                    recommendations[displayRecommendationNum]
                                        .img
                                }
                                alt=""
                                className="w-full rounded-full grayscale"
                            />
                        </div>
                        <div>
                            <div className="relative lg:ml-10">
                                <svg
                                    className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-sky-100 "
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 144 144"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeWidth="2"
                                        d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                                    />
                                </svg>
                                <blockquote className="relative">
                                    <div className="text-2xl md:text-4xl leading-9 font-medium text-neutral-700 font-serif">
                                        <p>
                                            {
                                                recommendations[
                                                    displayRecommendationNum
                                                ].quote
                                            }
                                        </p>
                                    </div>
                                    <footer className="mt-8">
                                        <div className="flex">
                                            <div className="flex-shrink-0 lg:hidden">
                                                <img
                                                    className="h-12 w-12 rounded-full grayscale"
                                                    src={
                                                        recommendations[
                                                            displayRecommendationNum
                                                        ].img
                                                    }
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-4 lg:ml-0">
                                                <div className="text-lg font-semibold text-neutral-700">
                                                    {
                                                        recommendations[
                                                            displayRecommendationNum
                                                        ].person
                                                    }
                                                </div>
                                                <div className="text-base font-medium text-sky-600">
                                                    {
                                                        recommendations[
                                                            displayRecommendationNum
                                                        ].role
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default HomePage;
