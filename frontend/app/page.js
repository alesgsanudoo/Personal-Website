"use client";

import GitHubIcon from '@mui/icons-material/GitHub';
import React, {useEffect, useRef, useState} from 'react';
import {
    Email, EmojiPeople, Instagram, LibraryBooks, Link, LinkedIn, Science, TextSnippet, Work
} from "@mui/icons-material";
import {Glow, GlowCapture} from "@codaworks/react-glow";

export default function Home() {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [activeSection, setActiveSection] = useState(null);
    const [experienceHover, setExperienceHover] = useState(null);
    const [projectHover, setProjectHover] = useState(null);
    const sectionsRef = useRef([]);

    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const handleExpHover = (index) => {
        setExperienceHover(index);
        setActiveSection('experience')
    };

    const handleExpLeave = () => {
        setExperienceHover(null);
    };

    const handleProjHover = (index) => {
        setProjectHover(index);
        setActiveSection('projects')
    };

    const handleProjLeave = () => {
        setProjectHover(null);
    };


    const menuItems = [
        {
            icon: <EmojiPeople className="w-full h-full"/>,
            label: "About",
            target: "about",
            link: null,
        },
        {
            icon: <Work className="w-full h-full"/>,
            label: "Experience", target: "experience",
            link: null,
        },
        {
            icon: <Science className="w-full h-full"/>,
            label: "Projects",
            target: "projects",
            link: null
        },
        {
            icon: <LibraryBooks className="w-full h-full"/>,
            label: "Blog",
            target: "blog",
            link: null,
        },
        {
            icon: <Email className="w-full h-full"/>,
            label: "Contact",
            target: "contact",
            link: null
        },
        {
            icon: <TextSnippet className="w-full h-full"/>,
            label: "Resume",
            target: "resume",
            link: 'purdue.edu'
        }
    ];


    const experienceItems = [
        {
            dateFrom: '2022',
            dateTo: 'Present',
            position: 'Customer Service Assistant',
            place: 'The Julian Center',
            desc: 'Received and redistributed donated items for resale: This role directly supports the center’s mission to help victims of domestic abuse.',
            skills: ['Customer Service'],
            link: 'https://www.juliancenter.org/thrifty-threads/'
        },
        {
            dateFrom: '2016',
            dateTo: '2020',
            position: 'Minecraft Developer',
            place: 'Self-employed',
            desc: 'Designed and developed in-game add-ons, servers, enhancing the gaming experience for over 10.000 of online players around the world.',
            skills: ['MySQl', 'CSS', 'Html', 'MariaDB', 'Product Development', 'Java'],
            link: 'https://www.minecraft.net/en-us'
        }
    ]


    const projectsItems = [
        {
            imageUrl: 'https://camo.githubusercontent.com/e90b9174d66add0b2211af7d438331882bb4764317741cddc2b44517b15c6fdb/68747470733a2f2f696d6775722e636f6d2f6a79674c6d39442e706e67',
            imageOptions: 'object-cover',
            date: 'June 2024',
            Name: 'Personal Website V2',
            desc: 'Pending',
            skills: ['React', 'Next.js', 'JavaScript', 'TailwindCSS'],
            link: 'https://www.juliancenter.org/thrifty-threads/'
        },
        {
            imageUrl: 'https://camo.githubusercontent.com/e90b9174d66add0b2211af7d438331882bb4764317741cddc2b44517b15c6fdb/68747470733a2f2f696d6775722e636f6d2f6a79674c6d39442e706e67',
            imageOptions: 'object-cover',
            date: 'May 2024',
            Name: 'SnapBattle',
            desc: 'SnapBattle is an innovative mobile application designed to keep friend groups connected through the fun and engaging activity of photo-sharing based on daily prompts. ',
            skills: ['React Native', 'Node.js', 'JavaScript', 'Cloud Firestore', 'Socket', 'OpenAI API'],
            link: 'https://www.juliancenter.org/thrifty-threads/'
        },
        {
            imageUrl: 'https://camo.githubusercontent.com/587d48b8e6f19d1e562c4e8510dce16471229914ec9f362d4ae14f5613cf42ae/68747470733a2f2f692e696d6775722e636f6d2f375a4b6d6d57432e706e67',
            imageOptions: 'object-cover object-left',
            date: 'June 2023',
            Name: 'MyBetterCSPlan',
            desc: 'MyBetterCSPlan is a MERN web app developed as a summer project to assist Purdue CS students in planning their 4-year academic journey.',
            skills: ['React', 'Node.js', 'Express.js', 'JavaScript', 'MongoDB'],
            link: 'https://www.juliancenter.org/thrifty-threads/'
        },
    ]


    useEffect(() => {
        const observerOptions = {
            root: null, rootMargin: "0px", threshold: 0.9
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    window.history.pushState(null, null, `#${entry.target.id}`);
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sectionsRef.current.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const getGradientClass = () => {
        if (hoveredItem !== null) {
            console.log(hoveredItem);
            switch (hoveredItem) {
                case 0:
                    return 'from-blue-700 from-16% via-blue-600 via-32% via-blue-500 via-48% via-blue-400 via-64% via-blue-300 via-80% via-blue-300 to-96% to-gray-900 shadow-blue-900/50';
                case 1:
                    return 'from-blue-600 from-16% via-blue-700 via-32% via-blue-600 via-48% via-blue-400 via-64% via-blue-300 via-80% via-blue-200 to-96% to-gray-700 shadow-blue-700/50';
                case 2:
                    return 'from-blue-400 from-16% via-blue-300 via-32% via-blue-700 via-48% via-blue-600 via-64% via-blue-300 via-80% via-blue-200 to-96% to-gray-600 shadow-blue-400/50';
                case 3:
                    return 'from-blue-300 from-16% via-blue-300 via-32% via-blue-600 via-48% via-blue-700 via-64% via-blue-600 via-80% via-blue-500 to-96% to-blue-300 shadow-blue-400/50';
                case 4:
                    return 'from-gray-700 from-16% via-blue-500 via-32% via-blue-700 via-48% via-blue-600 via-64% via-blue-300 via-80% via-blue-200 to-96% to-blue-600 shadow-blue-700/50';
                case 5:
                    return 'from-gray-900 from-16% via-blue-500 via-32% via-blue-700 via-48% via-blue-600 via-64% via-blue-300 via-80% via-blue-200 to-96% to-blue-700 shadow-blue-700/50';
                default:
                    return 'from-blue-700 from-16% via-blue-600 via-32% via-blue-500 via-48% via-blue-400 via-64% via-blue-300 via-80% via-blue-300 to-96% to-gray-900 shadow-blue-700/50';
            }
        }
        switch (activeSection) {
            case 'about':
                return 'from-blue-700 from-16% via-blue-600 via-32% via-blue-500 via-48% via-blue-400 via-64% via-blue-300 via-80% via-blue-300 to-96% to-gray-900 shadow-blue-900/50';
            case 'experience':
                return 'from-blue-600 from-16% via-blue-700 via-32% via-blue-600 via-48% via-blue-400 via-64% via-blue-300 via-80% via-blue-200 to-96% to-gray-700 shadow-blue-700/50';
            case 'projects':
                return 'from-blue-400 from-16% via-blue-300 via-32% via-blue-700 via-48% via-blue-600 via-64% via-blue-300 via-80% via-blue-200 to-96% to-gray-600 shadow-blue-400/50';
            case 'blog':
                return 'from-blue-300 from-16% via-blue-300 via-32% via-blue-600 via-48% via-blue-700 via-64% via-blue-600 via-80% via-blue-500 to-96% to-blue-300 shadow-blue-700/50';
            case 'contact':
                return 'from-gray-700 from-16% via-blue-500 via-32% via-blue-700 via-48% via-blue-600 via-64% via-blue-300 via-80% via-blue-200 to-96% to-blue-600 shadow-blue-700/50';
            case 'resume':
                return 'from-gray-900 from-16% via-blue-500 via-32% via-blue-700 via-48% via-blue-600 via-64% via-blue-300 via-80% via-blue-200 to-96% to-blue-700 shadow-blue-700/50';
            default:
                return 'from-blue-700 from-16% via-blue-600 via-32% via-blue-500 via-48% via-blue-400 via-64% via-blue-300 via-80% via-blue-300 to-96% to-gray-900 shadow-blue-700/50';
        }
    };


    return (

        <main className="flex flex-col lg:flex-row min-h-screen">
            {/* Information displayed in left side */}
            <div
                className="w-full lg:w-6/12 lg:h-screen bg-gradient-to-r from-black-500 to-gray-800 p-4 lg:sticky lg:top-0">
                <div className="flex flex-col items-center">
                    {/* Profile picture */}
                    <img
                        src="/picture.png"
                        alt="Profile picture"
                        className="w-96"
                    />
                    {/* My name */}
                    <h1 className="text-6xl font-bold">
                        <span
                            className="bg-gradient-to-r from-blue-500 to-blue-50 text-transparent bg-clip-text select-none">Alejandro </span>
                        <span className="text-white select-none">Griffith </span>
                    </h1>
                    {/* Description */}
                    <h2 className="text-2xl font-bold select-none">
                        <span> I am Computer Science Student at </span>
                        <a href="https://www.purdue.edu" className="mt-4">
                            <span
                                className="bg-gradient-to-r from-amber-300 to-amber-500 text-transparent bg-clip-text lg:hover:text-3xl lg:transition-all lg:duration-300 select-none">Purdue University</span>
                        </a>
                    </h2>

                    {/* Nav */}
                    <div
                        className={`hidden shadow-xl lg:visible lg:flex lg:w-[400px] lg:h-[80px] lg:bg-gradient-to-r ${getGradientClass()} lg:rounded-[16px] lg:mt-20`}>
                        <div className="lg:h-[75px] lg:w-[390px] lg:m-auto lg:bg-black lg:rounded-[16px]">
                            <div
                                className="lg:h-[75px] lg:w-[390px] lg:m-auto lg:bg-gray-600 lg:bg-opacity-25  lg:backdrop-blur-md lg:rounded-[16px]">
                                <ul className="hidden lg:visible lg:flex lg:items-center lg:space-x-5 lg:px-3">
                                    {menuItems.map((item, index) => (<li
                                        key={index}
                                        className={`hidden lg:visible lg:relative lg:flex lg:items-center lg:justify-center lg:w-12 lg:h-12 lg:transition-transform lg:duration-200 lg:mt-3 ${hoveredItem === index || (activeSection === item.target && hoveredItem === null) ? 'scale-150' : ''}`}
                                        onMouseEnter={() => {
                                            handleMouseEnter(index);
                                        }}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <a href={item.link !== null ? item.link : `#${item.target}`}
                                           className={`w-full h-full flex items-center justify-center ${hoveredItem === index || (!hoveredItem && activeSection === item.target) ? 'opacity-90' : 'opacity-50'}`}>
                                            <div
                                                className={`absolute select-none top-[-40px] bg-black bg-opacity-50 text-white font-bold text-sm px-4 py-2 rounded-lg ${hoveredItem === index || (activeSection === item.target) ? 'visible' : 'invisible'}`}
                                            >
                                                {item.label}
                                            </div>
                                            {item.icon}
                                        </a>
                                    </li>))}
                                </ul>
                            </div>
                        </div>
                    </div>


                    {/* Social Media */}
                    <div
                        className="lg:shadow-xl flex flex-row lg:absolute lg:bottom-5 lg:mb-5 justify-between space-x-12 items-center  mt-10">
                        <a href="https://github.com/alesgsanudoo">
                            <GitHubIcon
                                className="lg:shadow-xl text-5xl hover:text-blue-400 lg:hover:text-7xl lg:transition-all lg:duration-300"/>
                        </a>
                        <a href="https://www.linkedin.com/in/alesgsanudoo/"><LinkedIn
                            className="lg:shadow-xl text-5xl hover:text-blue-400 lg:hover:text-7xl lg:transition-all lg:duration-300"/>
                        </a>
                        <a href="https://www.instagram.com/alesgsanudoo_/"><Instagram
                            className="lg:shadow-xl text-5xl hover:text-blue-400 lg:hover:text-7xl lg:transition-all lg:duration-300"/>
                        </a>
                    </div>

                    {/* footer */}

                    <div className="invisible lg:absolute lg:bottom-5">
                        <h1>
                            Made with love by Alex ❤️!
                        </h1>

                    </div>
                </div>
            </div>

            {/* Information displayed in right side */}
            <div className="w-full lg:w-6/12 p-4 scroll-smooth">

                {/* about */}
                <section id="about"  className="lg:mt-20"  ref={el => sectionsRef.current[0] = el}
                >
                    <h1 className="text-6xl font-bold mb-5 lg:hidden">
                        About me
                    </h1>
                    <h3 className="lg:mr-20" >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum
                    </h3>
                </section>

                {/* experience */}
                <section id="experience" className="mt-20" ref={el => sectionsRef.current[1] = el}>
                    <h1 className="text-6xl font-bold mb-5 lg:hidden">
                        Experience
                    </h1>
                    <GlowCapture>
                        <ul className="lg:mr-20 space-y-4">
                            {experienceItems.map((item, index) => (<li
                                key={index}
                                className={`bg-gray rounded-lg hover:shadow-lg glow:text-glow/50`}
                                onMouseEnter={() => {
                                    handleExpHover(index);
                                }}
                                onMouseLeave={handleExpLeave}
                            >
                                <Glow color='white'>
                                    <div className={`flex flex-row glow:opacity-100 glow:text-glow/100`}>
                                        <h3 className="text-sm w-64 mr-2 ml-4 pt-4 leading-normal select-none opacity-25 text-opacity-25 glow:text-glow/50">{item.dateFrom} — {item.dateTo}</h3>
                                        <div className="flex flex-col items-center glow:text-glow">
                                            <div className={`flex flex-col justify-between p-4 leading-normal ${experienceHover === index ? 'opacity-100' : 'opacity-50' } glow:opacity-100 glow:text-glow/50`}>
                                                <h5 className={`mb-2 text-md font-bold tracking-normal ${experienceHover === index ? 'text-blue-400 opacity-70' : 'text-white'} lg:hover:text-blue-400 glow:opacity-100 glow:text-glow/50`}>
                                                    {item.position} ⋅ {item.place}
                                                </h5>
                                                <p className="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400 glow:opacity-100 glow:text-glow/50">{item.desc}</p>
                                                <div className="w-full glow:text-glow">
                                                    <div className="flex flex-wrap -mx-1 glow:opacity-100 glow:text-glow/50">
                                                        {item.skills.map((skill) => (
                                                            <span
                                                                key={skill}
                                                                className={` m-1 inline-block ${experienceHover === index ? 'bg-blue-400 text-white opacity-100' : 'text-white'} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 mb-2 glow:opacity-100 glow:text-glow/50 select-none`}
                                                            >{skill}
                                            </span>
                                                        ))
                                                        }
                                                    </div>
                                                </div>
                                                <a href={item.link} className={`mt-5 inline-flex items-center ${experienceHover === index ? 'text-blue-400 underline underline-offset-8 hover:decoration-dashed' : 'text-white'} glow:opacity-100 glow:text-glow/50 select-none`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                         fill="currentColor" className="size-4">
                                                        <path fillRule="evenodd"
                                                              d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
                                                              clipRule="evenodd"/>
                                                        <path fillRule="evenodd"
                                                              d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                    View Page
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Glow>
                            </li>))}
                        </ul>
                        <Glow color={"white"}>
                            <a href={"#"}
                               className={`mt-5 inline-flex items-center text-blue-400 underline underline-offset-8 hover:decoration-dashed  ${!experienceHover ? 'text-blue-400 underline underline-offset-8 hover:decoration-dashed' : 'text-white'} glow:opacity-100 glow:text-glow/50 select-none`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                     fill="currentColor" className="size-4">
                                    <path fillRule="evenodd"
                                          d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
                                          clipRule="evenodd"/>
                                    <path fillRule="evenodd"
                                          d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
                                          clipRule="evenodd"/>
                                </svg>
                                View full Resume
                            </a>
                        </Glow>
                    </GlowCapture>

                </section>

                {/* projects */}
                <section id="projects" className="mt-[225px]" ref={el => sectionsRef.current[2] = el}>
                    <h1 className="text-6xl font-bold mb-5 lg:hidden">
                        Projects
                    </h1>
                    <GlowCapture>
                        <ul className="lg:mr-20 space-y-4">
                            {projectsItems.map((item, index) => (<li
                                key={index}
                                className={`bg-gray rounded-lg hover:shadow-lg glow:text-glow/50`}
                                onMouseEnter={() => {
                                    handleProjHover(index);
                                }}
                                onMouseLeave={handleProjLeave}
                            >
                                <Glow color='white'>
                                    <div className={`flex flex-row glow:opacity-100 glow:text-glow/100`}>
                                        <img
                                            className={`${item.imageOptions} w-full rounded-t-lg h-96 ${projectHover === index ? 'opacity-70' : 'opacity-50'} md:h-auto md:w-48 md:rounded-none md:rounded-s-lg glow:opacity-100 glow:text-glow/100`}
                                            src={item.imageUrl} alt=""/>
                                        <div className="flex flex-col items-center glow:text-glow">
                                            <div
                                                className={`flex flex-col justify-between p-4 leading-normal ${projectHover === index ? 'opacity-100' : 'opacity-50'} glow:opacity-100 glow:text-glow/50`}>
                                                <h5 className={`text-md font-bold tracking-normal ${projectHover === index ? 'text-blue-400 opacity-70' : 'text-white'} lg:hover:text-blue-400 glow:opacity-100 glow:text-glow/50`}>
                                                    {item.Name}
                                                </h5>
                                                <p className="text-sm italic mb-2">{item.date}</p>
                                                <p className="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400 glow:opacity-100 glow:text-glow/50">{item.desc}</p>
                                                <div className="w-full glow:text-glow">
                                                    <div
                                                        className="flex flex-wrap -mx-1 glow:opacity-100 glow:text-glow/50">
                                                        {item.skills.map((skill) => (
                                                            <span
                                                                key={skill}
                                                                className={` m-1 inline-block ${projectHover === index ? 'bg-blue-400 text-white opacity-100' : 'text-white'} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 mb-2 glow:opacity-100 glow:text-glow/50 select-none`}
                                                            >{skill}
                                            </span>
                                                        ))
                                                        }
                                                    </div>
                                                </div>
                                                <a href={item.link}
                                                   className={`mt-5 inline-flex items-center ${projectHover === index ? 'text-blue-400 underline underline-offset-8 hover:decoration-dashed' : 'text-white'} glow:opacity-100 glow:text-glow/50 select-none`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                         fill="currentColor" className="size-4">
                                                        <path fillRule="evenodd"
                                                              d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
                                                              clipRule="evenodd"/>
                                                        <path fillRule="evenodd"
                                                              d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                    View Repository
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Glow>
                            </li>))}
                        </ul>
                        <Glow color={"white"}>
                            <a href={"/projects"}
                               className={`mt-5 inline-flex items-center text-blue-400 underline underline-offset-8 hover:decoration-dashed  ${!experienceHover ? 'text-blue-400 underline underline-offset-8 hover:decoration-dashed' : 'text-white'} glow:opacity-100 glow:text-glow/50 select-none`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/>
                                </svg>
                                More repositories
                            </a>
                        </Glow>
                    </GlowCapture>
                </section>

                {/* blog */}
                <section id="blog" className="mt-20" ref={el => sectionsRef.current[3] = el}>
                    <h1 className="text-6xl font-bold mb-5 lg:hidden">
                        Blogs
                    </h1>
                    <h3 className="lg:mr-20">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum
                    </h3>
                </section>

                {/* contact */}
                <section id="contact" className="mt-20" ref={el => sectionsRef.current[4] = el}>
                    <h1 className="text-6xl font-bold mb-5 lg:hidden">
                        Contact Me
                    </h1>
                    <h3 className="lg:mr-20">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum
                    </h3>
                </section>


                {/* Footer 2 */}
                <section className="mt-16">
                    <h1 className="text-6xl font-bold">
                        Footer
                    </h1>
                </section>
            </div>
        </main>
    );
}
