"use client";

import GitHubIcon from '@mui/icons-material/GitHub';
import React, {useEffect, useRef, useState} from 'react';
import {
    Email, EmojiPeople, Instagram, LibraryBooks, Link, LinkedIn, Science, TextSnippet, Work
} from "@mui/icons-material";
import {Glow, GlowCapture} from "@codaworks/react-glow";
import path from "path";

export default function Home() {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [activeSection, setActiveSection] = useState(null);
    const [experienceHover, setExperienceHover] = useState(null);
    const [projectHover, setProjectHover] = useState(null);
    const [blogHover, setBlogHover] = useState(null);
    const sectionsRef = useRef([]);
    const [blogs, setBlogs] = useState([]);

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


    const handleBlogHover = (index) => {
        setBlogHover(index);
        setActiveSection('blog');
    };

    const handleBlogLeave = () => {
        setBlogHover(null);
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
            link: 'resume'
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
            imageUrl: 'https://i.imgur.com/soAsIWi.png',
            imageOptions: 'object-cover',
            date: 'June 2024',
            Name: 'Personal Website V2',
            desc: 'My personal page is a web app designed to showcase who I am, my skills, experience, resume, and fun facts about me. Also, I use my blog to express myself!',
            skills: ['React', 'Next.js', 'JavaScript', 'TailwindCSS'],
            link: 'https://www.alesgsanudoo.com/'
        },
        {
            imageUrl: 'https://camo.githubusercontent.com/e90b9174d66add0b2211af7d438331882bb4764317741cddc2b44517b15c6fdb/68747470733a2f2f696d6775722e636f6d2f6a79674c6d39442e706e67',
            imageOptions: 'object-cover',
            date: 'May 2024',
            Name: 'SnapBattle',
            desc: 'SnapBattle is an innovative mobile application designed to keep friend groups connected through the fun and engaging activity of photo-sharing based on daily prompts. ',
            skills: ['React Native', 'Node.js', 'JavaScript', 'Cloud Firestore', 'Socket', 'OpenAI API'],
            link: 'https://github.com/CSGrinders/SnapBattle'
        },
        {
            imageUrl: 'https://camo.githubusercontent.com/587d48b8e6f19d1e562c4e8510dce16471229914ec9f362d4ae14f5613cf42ae/68747470733a2f2f692e696d6775722e636f6d2f375a4b6d6d57432e706e67',
            imageOptions: 'object-cover object-left',
            date: 'June 2023',
            Name: 'MyBetterCSPlan',
            desc: 'MyBetterCSPlan is a MERN web app developed as a summer project to assist Purdue CS students in planning their 4-year academic journey.',
            skills: ['React', 'Node.js', 'Express.js', 'JavaScript', 'MongoDB'],
            link: 'https://github.com/MyPurdueCSBetterPlan/bettercsplan'
        },
    ]

    const [stickyHeaders, setStickyHeaders] = useState({
        about: false,
        experience: false,
        projects: false,
        blog: false,
    });

    useEffect(() => {
        const handleScroll = () => {
            const isSmallOrMedium = window.innerWidth < 1024;
            if (isSmallOrMedium) {
                const updatedStickyHeaders = {};
                sectionsRef.current.forEach((section, index) => {
                    if (section) { //Sticky header on top
                        const rect = section.getBoundingClientRect();
                        const sectionName = section.id;
                        updatedStickyHeaders[sectionName] = rect.top <= 0;
                    }
                });
                setStickyHeaders(updatedStickyHeaders);
            } else {
                setStickyHeaders({
                    about: false,
                    experience: false,
                    projects: false,
                    blog: false,
                });
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    useEffect(() => {

        let height = 600;

        const observerOptions = {
            root: null, rootMargin: "0px", threshold: 0.25
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


    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('/api/blogs');
            const data = await res.json();
            setBlogs(data);
        };

        fetchPosts().then(r => console.log("Blogs fetched."));
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
                        className="w-64 xl:w-96"
                    />
                    {/* My name */}
                    <h1 className="text-4xl lg:text-3xl xl:text-6xl font-bold">
                        <span
                            className="bg-gradient-to-r from-blue-500 to-blue-50 text-transparent bg-clip-text select-none">Alejandro </span>
                        <span className="text-white select-none">Griffith </span>
                    </h1>
                    {/* Description */}
                    <h2 className="text-xl md:text-xl lg:text-2xl text-center md:text-center lg:text-center xl:text-left font-bold select-none">
                        <span> I am Computer Science Student at </span>
                        <a href="https://www.purdue.edu" className="mt-4" target="_blank">
                            <span
                                className="bg-gradient-to-r from-amber-300 to-amber-500 text-transparent bg-clip-text lg:hover:text-3xl lg:transition-all lg:duration-300 select-none">Purdue University</span>
                        </a>
                    </h2>

                    {/* Nav */}
                    <div
                        className={`hidden lg:flex lg:shadow-xl lg:w-[400px] lg:h-[80px] lg:bg-gradient-to-r ${getGradientClass()} lg:rounded-[16px] mt-10 xl:mt-20`}>
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
                                                className={`absolute select-none top-[-30px] xl:top-[-40px] bg-black bg-opacity-50 text-white font-bold text-[8px] xl:text-sm px-4 py-2 rounded-lg ${hoveredItem === index || (activeSection === item.target) ? 'visible' : 'invisible'}`}
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
                        <a href="https://github.com/alesgsanudoo" target="_blank">
                            <GitHubIcon
                                className="lg:shadow-xl text-5xl hover:text-blue-400 lg:hover:text-7xl lg:transition-all lg:duration-300"/>
                        </a>
                        <a href="https://www.linkedin.com/in/alesgsanudoo/" target="_blank"><LinkedIn
                            className="lg:shadow-xl text-5xl hover:text-blue-400 lg:hover:text-7xl lg:transition-all lg:duration-300"/>
                        </a>
                        <a href="https://www.instagram.com/alesgsanudoo_/" target="_blank"><Instagram
                            className="lg:shadow-xl text-5xl hover:text-blue-400 lg:hover:text-7xl lg:transition-all lg:duration-300"/>
                        </a>
                    </div>
                </div>
            </div>

            {/* Information displayed in right side */}
            <div className="lg:w-6/12 scroll-smooth">

                {/* about */}
                <section id="about" className="lg:mt-20" ref={el => sectionsRef.current[0] = el}
                >
                    <div
                        className={`lg:hidden sticky top-0 z-20 bg-gradient-to-r from-[#111111]/75 to-[#232323]/75 backdrop-blur py-3 px-4 transition duration-300 ${stickyHeaders.about ? 'bg-opacity-100 text-white' : 'bg-opacity-50 text-gray-300'}`}>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                            About me
                        </h1>
                    </div>
                    <p className="text-gray-400 text-md md:text-lg lg:text-lg lg:mr-20 pr-4 pl-4">
                        <span
                            className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}>Little did I know, when I touched my first laptop</span>,
                        that I would become <span
                        className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}>passionate</span> about
                        computer
                        science and project development. My journey began with <span
                        className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}>creating Minecraft servers</span>,
                        <span
                            className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}> developing
            addons</span>, and <span
                        className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}>designing websites</span> and <span
                        className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}>shops</span> for
                        these servers. After
                        successfully running several
                        servers with more than <span
                        className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}>10,000 players</span>,
                        I decided to go deeper into computer science.
                    </p>
                    <p className="text-gray-400 text-md md:text-lg lg:text-lg lg:mr-20 pr-4 pl-4 mt-5">
                        Today, I have <span
                        className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}>built</span> several <span
                        className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}>private</span>, <span
                        className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}>public</span>,
                        and <span
                        className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}>class projects</span>,
                        some of which
                        have generated
                        <span
                            className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}> income</span>.
                        Currently, I am
                        focused on creating <span
                        className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}>side projects</span> to
                        showcase my
                        skills, particularly
                        using <span
                        className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}>C++</span>,
                        a language I am
                        eager to learn more about and thoroughly enjoy programming in.
                    </p>
                    <p className="text-gray-400 text-md md:text-lg lg:text-lg lg:mr-20 pr-4 pl-4 mt-5">
                        When I am not coding, I <span
                        className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}>enjoy playing any type of sports or games</span>, <span
                        className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}>working out</span>,<span
                        className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}> watching series</span>,
                        <span
                            className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}> reading</span>,
                        and <span
                        className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}>spending</span> time
                        with <span
                        className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}>friends</span> and<span
                        className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}> family</span>.
                    </p>
                    <p className="text-gray-400  text-md md:text-lg lg:text-lg lg:mr-20 pr-4 pl-4 mt-5">
                        <span
                            className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}>Feel free</span> to
                        reach out; I
                        love <span
                        className={`font-bold transition duration-300 ${stickyHeaders.about ? 'text-amber-400' : 'text-gray-300'} hover:text-amber-400`}>meeting</span> new
                        people
                        and engaging in conversations.
                    </p>
                </section>

                {/* experience */}
                <section id="experience" className="mt-[150px]" ref={el => sectionsRef.current[1] = el}>
                    <div
                        className={`lg:hidden sticky top-0 z-20 bg-gradient-to-r from-[#111111]/75 to-[#232323]/75 backdrop-blur py-3 px-4 transition duration-300 ${stickyHeaders.experience ? 'bg-opacity-100 text-white' : 'bg-opacity-50 text-gray-300'}`}
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                            Experience
                        </h1>
                    </div>
                    <GlowCapture>
                        <ul className="lg:mr-20 space-y-4 pr-4 pl-4">
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
                                        <h3 className="hidden md:block lg:block text-sm w-64 mr-2 ml-4 pt-4 leading-normal select-none opacity-25 text-opacity-25 glow:text-glow/50">{item.dateFrom} — {item.dateTo}</h3>
                                        <div className="flex flex-col items-center lg:glow:text-glow">
                                            <div
                                                className={`flex flex-col justify-between pt-4 pr-4 pb-4 leading-normal transition duration-300 ${experienceHover === index || stickyHeaders.experience ? 'opacity-100' : 'opacity-50'} glow:opacity-100 glow:text-glow/50`}>
                                                <h5 className={`mb-2 text-md font-bold tracking-normal transition duration-300 ${stickyHeaders.experience ? 'opacity-100 text-blue-400' : experienceHover === index ? 'text-blue-400 opacity-70' : 'text-white'} lg:hover:text-blue-400 glow:opacity-100 glow:text-glow/50`}>
                                                    {item.position} ⋅ {item.place}
                                                </h5>
                                                <h3 className="md:hidden lg:hidden block text-sm w-64 mb-4 leading-normal select-none opacity-25 text-opacity-25 glow:text-glow/50">{item.dateFrom} — {item.dateTo}</h3>
                                                <p className="mb-3 font-normal text-justify text-gray-300 glow:opacity-100 glow:text-glow/50">{item.desc}</p>
                                                <div className="w-full glow:text-glow">
                                                    <div
                                                        className="flex flex-wrap -mx-1 glow:opacity-100 glow:text-glow/50">
                                                        {item.skills.map((skill) => (
                                                            <span
                                                                key={skill}
                                                                className={` m-1 inline-block transition duration-300 ${stickyHeaders.experience ? 'bg-blue-400 text-white opacity-100' : experienceHover === index ? 'bg-blue-400 text-white opacity-100' : 'text-white'} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 mb-2 glow:opacity-100 glow:text-glow/50 select-none`}
                                                            >{skill}
                                            </span>
                                                        ))
                                                        }
                                                    </div>
                                                </div>
                                                <a href={item.link}
                                                   className={`mt-5 inline-flex items-center ${experienceHover === index || stickyHeaders.experience ? 'text-blue-400 underline underline-offset-8 hover:decoration-dashed' : 'text-white'} glow:opacity-100 glow:text-glow/50 select-none`}>
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
                            <a href={"resume"}
                               className={`mt-5 pr-4 pl-4 inline-flex items-center text-blue-400 underline underline-offset-8 hover:decoration-dashed  ${!experienceHover ? 'text-blue-400 underline underline-offset-8 hover:decoration-dashed' : 'text-white'} glow:opacity-100 glow:text-glow/50 select-none`}>
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
                <section id="projects" className="mt-[180px]" ref={el => sectionsRef.current[2] = el}>
                    <div
                        className={`lg:hidden sticky top-0 z-20  bg-gradient-to-r from-[#111111]/75 to-[#232323]/75 backdrop-blur py-3 px-4 transition duration-300 ${stickyHeaders.projects ? 'bg-opacity-100 text-white' : 'bg-opacity-50 text-gray-300'}`}>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                            Projects
                        </h1>
                    </div>
                    <GlowCapture>
                        <ul className="lg:mr-20 space-y-4 pr-4 pl-4">
                            {projectsItems.map((item, index) => (<li
                                key={index}
                                className={`bg-gray rounded-lg hover:shadow-lg glow:text-glow/50`}
                                onMouseEnter={() => {
                                    handleProjHover(index);
                                }}
                                onMouseLeave={handleProjLeave}
                            >
                                <Glow color='white'>
                                    <div
                                        className={`flex flex-col md:flex-row lg:flex-row xl:flex-row glow:opacity-100 glow:text-glow/100`}>
                                        <img
                                            className={`${item.imageOptions} w-full rounded-t-lg h-96 transition duration-300 ${projectHover === index || stickyHeaders.projects ? 'opacity-70' : 'opacity-50'} md:h-auto md:w-48 md:rounded-none md:rounded-s-lg glow:opacity-100 glow:text-glow/100`}
                                            src={item.imageUrl} alt=""/>
                                        <div className="flex flex-col items-center glow:text-glow">
                                            <div
                                                className={`flex flex-col justify-between p-4 leading-normal transition duration-300 ${projectHover === index || stickyHeaders.projects ? 'opacity-100' : 'opacity-50'} glow:opacity-100 glow:text-glow/50`}>
                                                <h5 className={`text-md font-bold tracking-normal transition duration-300 ${projectHover === index || stickyHeaders.projects ? 'text-blue-400 opacity-70' : 'text-white'} lg:hover:text-blue-400 glow:opacity-100 glow:text-glow/50`}>
                                                    {item.Name}
                                                </h5>
                                                <p className="text-sm italic mb-2">{item.date}</p>
                                                <p className="mb-3 font-normal text-justify text-gray-300 glow:opacity-100 glow:text-glow/50">{item.desc}</p>
                                                <div className="w-full glow:text-glow">
                                                    <div
                                                        className="flex flex-wrap -mx-1 glow:opacity-100 glow:text-glow/50">
                                                        {item.skills.map((skill) => (
                                                            <span
                                                                key={skill}
                                                                className={` m-1 inline-block transition duration-300 ${projectHover === index || stickyHeaders.projects ? 'bg-blue-400 text-white opacity-100' : 'text-white'} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 mb-2 glow:opacity-100 glow:text-glow/50 select-none`}
                                                            >{skill}
                                            </span>
                                                        ))
                                                        }
                                                    </div>
                                                </div>
                                                <a href={item.link}
                                                   className={`mt-5 inline-flex items-center transition duration-300 ${projectHover === index || stickyHeaders.projects ? 'text-blue-400 underline underline-offset-8 hover:decoration-dashed' : 'text-white'} glow:opacity-100 glow:text-glow/50 select-none`}>
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
                               className={`mt-5 pr-4 pl-4 inline-flex items-center text-blue-400 underline underline-offset-8 hover:decoration-dashed  ${!experienceHover ? 'text-blue-400 underline underline-offset-8 hover:decoration-dashed' : 'text-white'} glow:opacity-100 glow:text-glow/50 select-none`}>
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
                <section id="blog" className="mt-[180px]" ref={el => sectionsRef.current[3] = el}>
                    <div
                        className={`lg:hidden sticky top-0 z-20  bg-gradient-to-r from-[#111111]/75 to-[#232323]/75 backdrop-blur py-3 px-4 transition duration-300 ${stickyHeaders.blog ? 'bg-opacity-100 text-white' : 'bg-opacity-50 text-gray-300'}`}>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                            Blogs
                        </h1>
                    </div>
                    <GlowCapture>
                        <ul className="flex lg:mr-20 flex-col ml-4 mt-3">
                            {blogs.map((item, index) => (
                                <li
                                    key={index}
                                    className={`mb-5 snap-center bg-gray rounded-lg hover:shadow-lg glow:text-glow/50`}
                                    onMouseEnter={() => {
                                        handleBlogHover(index);
                                    }}
                                    onMouseLeave={handleBlogLeave}
                                >
                                    <Glow color='white'>
                                        <div
                                            className={`glow:opacity-100 glow:text-glow glow:text-glow/100 transition duration-300 ${blogHover === index || stickyHeaders.blog ? 'opacity-100' : 'opacity-50'}`}>
                                            <a href="#">
                                                <h5 className={`mb-2 text-2xl font-bold tracking-tight transition duration-300 ${blogHover === index || stickyHeaders.blog ? 'text-blue-400 opacity-70' : 'text-white'} glow:opacity-100 glow:text-glow/50`}>{item.data.title}</h5>
                                            </a>
                                            <p className="text-clip mb-3 font-normal text-gray-700 dark:text-gray-400 glow:opacity-100 glow:text-glow/50">{item.data.date}</p>
                                            <p className="mb-3 mr-4 font-normal text-justify text-gray-300 glow:opacity-100 glow:text-glow/50 line-clamp-2">{item.data.smdesc}</p>
                                            <a href={"/blogs/" + item.data.link}
                                               className={`mt-2 inline-flex items-center text-blue-400 underline underline-offset-8 hover:decoration-dashed glow:opacity-100 glow:text-glow/50 select-none`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                     fill="currentColor" className="size-4">
                                                    <path fillRule="evenodd"
                                                          d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
                                                          clipRule="evenodd"/>
                                                    <path fillRule="evenodd"
                                                          d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                                Read more
                                            </a>
                                        </div>
                                    </Glow>
                                </li>
                            ))}
                        </ul>
                    </GlowCapture>
                </section>

                {/* contact */}
                <section id="contact" className="mt-[160px]" ref={el => sectionsRef.current[4] = el}>
                    <GlowCapture>
                        <div
                            className="flex flex-col opacity-100 md:opacity-100 lg:opacity-50 xl:opacity-50 hover:opacity-100 items-center glow:opacity-100 glow:text-glow/50">
                            <Glow color='orange'>
                                <h2 className="text-xl md:text-2xl lg:text-4xl text-center font-bold glow:opacity-100 glow:text-glow/50 select-none">
                                    Do you want to chat with me?
                                </h2>
                            </Glow>
                            <h3 className="mt-4 textxl md:text-2xl lg:text-4xl text-center font-bold bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text select-none glow:opacity-100 glow:text-glow/50">
                                Let's chat!
                            </h3>
                            <div className="mt-10 flex flex-row space-x-10">
                                <a href="mailto:contact@alesgsanudoo.com" target="_blank"
                                   className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                                >
                                <span
                                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Email
                                </span>
                                </a>
                                <a href="https://www.linkedin.com/in/alesgsanudoo/" target="_blank"
                                   className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                                >
                                <span
                                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    LinkedIn
                                </span>
                                </a>
                            </div>
                        </div>
                    </GlowCapture>
                </section>


                {/* Footer */}
                <section className="flex mb-10 flex-col space-y-2 mt-16 pr-4 pl-4 items-center">
                    <h2 className="text-gray-500">
                        Made with love by <span className="text-gray-400 font-bold hover:text-amber-400">Alex</span> ❤️!
                    </h2>
                    <h2 className="text-gray-500 text-center">
                        Built with <a href="https://nextjs.org/" target="_blank"
                                      className="font-bold hover:text-amber-400">NextJS</a>, <a
                        href="https://tailwindcss.com/" target="_blank"
                        className="font-bold hover:text-amber-400">TailwindCSS</a>,
                        and icons from <a href="https://heroicons.com/" target="_blank"
                                          className="font-bold hover:text-amber-400">Heroicons</a> and <a
                        href="https://mui.com/" target="_blank"
                        className="font-bold hover:text-amber-400">MaterialUI</a>.
                    </h2>
                </section>
            </div>
        </main>
    );
}
