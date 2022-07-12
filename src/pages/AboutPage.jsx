import siliconSlopesImg from '../assets/silicon-slopes.svg';
import youngLinkImg from '../assets/young-link.png';
import sanFranciscoBridgeImg from '../assets/san-francisco-bridge.jpeg';
import blueShirtProfileImg from '../assets/profile-photo-blue-shirt.png';

const AboutPage = () => {
    const randomFacts = [
        'I’m a podcast nerd',
        'I raise ducks',
        'My love language is snacks',
        'I drink hot coco in the summer',
        'Fantasy books are the best',
        'I watch way too many movies',
        'Strider is my mentor',
        'Link is my go-to Super Smash Bros character',
    ];
    return (
        <div>
            <section className="inner-container py-12 md:flex md:items-center md:justify-between md:py-32">
                <div className="pr-14" style={{ maxWidth: '650px' }}>
                    <h1 className="text-7xl mb-5 font-bold text-neutral-700">
                        about.
                    </h1>
                    <h2 className="text-3xl mb-5 font-light text-neutral-500">
                        I’m a full stack developer based in the slopes of Lehi,
                        Utah.
                    </h2>
                    <h2 className="text-xl text-neutral-500">
                        I love solving new problems and building life changing
                        software for users. When I’m not slinging sweet code,
                        you can find me cycling, skiing, playing Settlers of
                        Catan, snacking, or enjoying a good story.
                    </h2>
                </div>
                <img
                    src={siliconSlopesImg}
                    alt=""
                    className="rounded-2xl hidden md:block"
                    style={{ height: '40vh' }}
                />
            </section>

            <section className="  bg-cGrey100 shadow-inner py-12 md:py-32">
                <div className="inner-container flex flex-col-reverse md:flex-row md:justify-between ">
                    <img src={youngLinkImg} alt="" style={{ height: '50vh' }} />
                    <div>
                        <h1 className="text-5xl mb-5 font-light text-neutral-700">
                            Random Facts
                        </h1>
                        {randomFacts.map((fact, index) => (
                            <h2
                                className="mb-4 text-2xl text-neutral-500"
                                key={index}
                            >
                                {fact}
                            </h2>
                        ))}
                    </div>
                </div>
            </section>

            <section className="shadow-inner py-12 md:py-32">
                <div className="inner-container  flex flex-col md:flex-row md:justify-between ">
                    <div className='mb-10 md:mb-0 md:w-1/2'>
                        <h1 className="text-5xl mb-5 font-light text-neutral-700">
                            My Story
                        </h1>
                        <p className="text-xl text-neutral-500 mb-4">
                            I discovered that I loved building products while I
                            was living in Silicon Valley and was exposed to some
                            world class tech companies. I moved back to Silicon
                            Slopes to become a full stack software engineer and
                            embarked on a lifelong journey to master the art and
                            science of software engineering.
                        </p>
                        <p className="text-xl text-neutral-500">
                            On my quest, I’ve learned powerful programming
                            languages, developed new features and products from
                            the ground up, mentored new team members, championed
                            product and process improvements, and have had the
                            chance to work alongside gifted, innovative people.
                        </p>
                    </div>
                    <div className="mb-[65px] ml-8">
                        <div className="ml-[65px] relative">
                            <img
                                src={sanFranciscoBridgeImg}
                                alt=""
                                className="rounded-2xl  "
                                style={{ width: '575px' }}
                            />
                            <img
                                src={blueShirtProfileImg}
                                alt=""
                                className="rounded-full border-white border-4 absolute bottom-[-65px] left-[-65px] "
                                style={{ height: '130px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
