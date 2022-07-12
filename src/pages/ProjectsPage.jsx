import robotPicture from '../assets/suanmoo-tXB7yfP9gg0-unsplash.jpg';
import moolaApplicationFrontView from '../assets/moola-application-frontview.png';
import stanfordML from '../assets/stanford-ml.png';
import SkillPill from '../components/SkillPill';
import { FaGithub } from 'react-icons/fa';

const ProjectsPage = () => {
    const projects = [
        {
            name: 'Full Stack Cow Health Tracker',
            skills: [
                'React',
                'Redux',
                'Javascript',
                'Node',
                'express',
                'postgreSQL',
                'Socket.io',
                'Chart.js',
            ],
        },
    ];

    return (
        <div>
            <section className="inner-container flex flex-col py-8 md:flex-row md:items-center md:justify-between md:py-20">
                <div className="pr-14 my-3" style={{ maxWidth: '650px' }}>
                    <h1 className="text-7xl mb-5 font-bold text-neutral-700">
                        portfolio.
                    </h1>
                    <h2 className="text-3xl mb-5 font-light text-neutral-500">
                        Check out some of my latest projects and skills I’ve
                        been learning.
                    </h2>
                    <h2 className="text-xl text-neutral-500">
                        I’ve helped multiple tech start-ups launch new products,
                        design UIs and build strategic features for hight value
                        customers.
                    </h2>
                </div>
                <img
                    src={robotPicture}
                    alt=""
                    className="rounded-2xl my-3"
                    style={{ height: '40vh' }}
                />
            </section>

            <section className="bg-cGrey100 shadow-inner ">
                <div className="inner-container flex flex-col py-8 md:flex-row  md:py-20">
                    {/* moola  */}
                    <div className="bg-white rounded-lg shadow-sm border-neutral-200 border-solid border md:w-96 md:m-4">
                        <div className="px-5 my-3">
                            <h1 className="text-2xl">
                                Full Stack Cow Health Tracker
                            </h1>
                            <h2 className="text-neutral-500 text-xl">
                                BootCamp Side Project
                            </h2>
                        </div>
                        <div className="px-3 my-4">
                            <div className="aspect-video  rounded-2xl ">
                                <img
                                    src={moolaApplicationFrontView}
                                    alt=""
                                    className=" object-cover"
                                />
                            </div>
                        </div>
                        <div className="px-5">
                            <p className="text-xl">
                                MooLa is a full stack dairy farm data solution.
                                Using it, dairy farmers can understand and
                                improve herd health and dairy production.
                            </p>
                            <div className="flex items-center my-4">
                                <a
                                    href="https://github.com/tysonlander"
                                    target="_blank"
                                >
                                    <FaGithub
                                        size={40}
                                        className="text-neutral-700 mr-3"
                                    />
                                </a>
                                <span>GitHub Repo</span>
                            </div>
                            <div className="my-6">
                                {projects[0].skills.map((skill, index) => (
                                    <SkillPill
                                        key={index}
                                        text={skill}
                                        className="mb-10"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* certification  */}
                    <div className="bg-white rounded-lg shadow-sm border-neutral-200 border-solid border my-4 md:w-96 md:m-4">
                        <div className="px-5 my-3">
                            <h1 className="text-2xl">
                                Stanford Machine Learning Cert
                            </h1>
                            <h2 className="text-neutral-500 text-xl">
                                Coursera Certificate
                            </h2>
                        </div>
                        <div className="px-3 my-4">
                            <div className="aspect-video bg-cGrey300 rounded-2xl ">
                                <img
                                    src={stanfordML}
                                    alt=""
                                    className=" object-cover m-auto"
                                />
                            </div>
                        </div>
                        <div className="p-5">
                            <p className="my-5 text-xl">Expected Completion: October 2022</p>
                            <p className="text-xl">
                                Learning how to build machine learning models in
                                python. Learning how to build and train
                                supervised machine learning models for
                                prediction and binary classification tasks,
                                including linear regression and logistic
                                regression
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;
