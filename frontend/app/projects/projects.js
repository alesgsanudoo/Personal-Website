"use client";

import React, {useState} from 'react';


export default function Project() {

    const [rowHover, setRowHover] = useState(0);

    const handleMouseEnter = (index) => {
        setRowHover(index);
    };

    const handleMouseLeave = () => {
        setRowHover(0);
    };

    const projectsItems = [
        {
            date: 'October 2024',
            Name: 'My Subs',
            tech: ['React', 'Next.js', 'JavaScript', 'TailwindCSS', 'MongoDB'],
            link: 'https://github.com/alesgsanudoo/mySubs',
            view: 'https://mysubs.alesgsanudoo.com/',
        },
        {
            date: 'June 2024',
            Name: 'Personal Website V2',
            tech: ['React', 'Next.js', 'JavaScript', 'TailwindCSS'],
            link: 'https://github.com/alesgsanudoo/Personal-Website',
            view: 'https://www.alesgsanudoo.com/',
        },
        {
            date: 'May 2024',
            Name: 'SnapBattle',
            tech: ['React Native', 'Node.js', 'CSS', 'JavaScript', 'Cloud Firestore', 'Socket', 'OpenAI API'],
            link: 'https://github.com/alesgsanudoo/SnapBattle'
        },
        {
            date: 'April 2024',
            Name: 'MyShell',
            tech: ['C++', 'Lex', 'Yacc'],
        },
        {
            date: 'November 2023',
            Name: 'Simple C Compiler',
            tech: ['C', 'Lex', 'Yacc', 'Assembly'],
        },
        {
            date: 'June 2023',
            Name: 'MyBetterCSPlan',
            tech: ['React', 'Node.js', 'Express.js', 'JavaScript', 'MongoDB', 'CSS'],
            link: 'https://github.com/alesgsanudoo/bettercsplan'
        },
        {
            date: 'May 2023',
            Name: 'Pokedex',
            tech: ['React', 'JavaScript', 'HTML', 'CSS', 'MongoDB'],
            link: 'https://github.com/alesgsanudoo/bettercsplan',
            view: 'https://pokedex.alesgsanudoo.com/',
        },
        {
            date: 'March 2023',
            Name: 'Capstone Project Website',
            tech: ['HTML', 'React', 'JavaScript', 'CSS'],
        },
        {
            date: 'March 2023',
            Name: 'TesterHomework',
            tech: ['Shell'],
            link: 'https://github.com/alesgsanudoo/TesterHomework',
        },
        {
            date: 'December 2022',
            Name: 'Email Signature',
            tech: ['HTML'],
            link: 'https://github.com/alesgsanudoo/bettercsplan',
            view: 'https://signature.alesgsanudoo.com/',
        },
        {
            date: 'December 2022',
            Name: 'Purdue Market Place',
            tech: ['Java'],
        },
        {
            date: 'October 2022',
            Name: 'Personal website V1',
            tech: ['HTML', 'JavaScript', 'CSS'],
            link: 'https://github.com/alesgsanudoo/Old-Personal-Website',
            view: 'https://v1.alesgsanudoo.com',
        },
        {
            date: 'September 2020',
            Name: 'SkyWars Core Protection',
            tech: ['Java'],
            link: 'https://github.com/alesgsanudoo/SkyWarsCore',
        },
        {
            date: 'May 2020',
            Name: 'AuthCore Protection',
            tech: ['Java'],
            link: 'https://github.com/alesgsanudoo/LobbyCore',
        },
        {
            date: 'October 2017',
            Name: 'High School Website',
            tech: ['HTML', 'CSS'],
        },
    ]


    return (
        <main className="flex flex-col">
            <div
                className="scroll-smooth min-h-screen max-w-screen-xl sm:mt-5 md:mt-10 lg:mt-20 px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
                {/* Description */}
                <a href="/" className="">
                    <div
                        className="flex flex-row space-x-3 lg:transition-all lg:duration-300 lg:hover:scale-110 lg:select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"/>
                        </svg>
                        <h2 className="text-lg">
                            Go Back
                        </h2>
                    </div>
                </a>
                <h1 className="text-3xl md:text-6xl lg:text-6xl md:h-20 lg:h-20 xl:h-20 mt-5 font-bold bg-gradient-to-r from-blue-500 to-blue-50 text-transparent bg-clip-text select-none">Projects
                    List</h1>
                <h3 className="sm:text-sm md:text-xl lg:text-2xl font-bold select-none">List of all my current projects
                    from <a
                        href="https://github.com/alesgsanudoo" className="mt-4">
                            <span
                                className="bg-gradient-to-r from-amber-300 to-amber-500 text-transparent bg-clip-text lg:hover:text-3xl lg:transition-all lg:duration-300 select-none">GitHub</span>
                    </a>.</h3>
                <div className="mt-10">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table
                                        className="min-w-full text-left text-sm font-light text-surface dark:text-white ">
                                        <thead
                                            className="border-b border-neutral-200 font-medium dark:border-white/10">
                                        <tr>
                                            <th scope="col" className="px-3 py-4">Date</th>
                                            <th scope="col" className={`px-3 py-4`}>Project</th>
                                            <th scope="col"
                                                className="hidden md:table-cell lg:table-cell px-6 py-4">Technologies
                                            </th>
                                            <th scope="col"
                                                className="hidden md:table-cell lg:table-cell px-3 py-4">Link
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {projectsItems.map((item, index) => (<tr
                                            key={index}
                                            defaultValue={0}
                                            className={`border-b border-neutral-200 hover:shadow-2xl dark:border-white/10`}
                                            onMouseEnter={() => {
                                                handleMouseEnter(index);
                                            }}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <td className={`whitespace-nowrap px-3 py-4 ${rowHover === index ? 'opacity-100' : 'opacity-50'} font-medium`}>{item.date}</td>
                                            <td className={`whitespace-nowrap px-3 py-4 ${rowHover === index ? 'opacity-100' : 'opacity-50'} font-medium`}>{item.Name}
                                                <div className="flex flex-row space-x-4 md:hidden lg:hidden mt-2">
                                                    {item.link ?
                                                        <a href={item.link}>
                                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                                 className="size-7 fill-white">
                                                                <path fillRule="evenodd"
                                                                      d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839
                                                          9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606
                                                          1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927
                                                          0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336
                                                          1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678
                                                          1.846 0 1.332-.012 2.407-.012 2.734 0
                                                          .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z">
                                                                </path>
                                                            </svg>
                                                        </a> : <></>}
                                                    {item.view ?
                                                        <a href={item.view}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                 viewBox="0 0 24 24" strokeWidth={1.5}
                                                                 stroke="currentColor"
                                                                 className="size-7">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                                            </svg>
                                                        </a>
                                                        : <></>}
                                                </div>
                                            </td>
                                            <td className={`hidden md:table-cell lg:table-cell px-3 py-4 ${rowHover === index ? 'opacity-100' : 'opacity-50'} font-medium`}>
                                                <div
                                                    className="flex flex-wrap ml-2 -mx-1 md:max-w-[250px] lg:max-w-md glow:opacity-100 glow:text-glow/50"
                                                >
                                                    {item.tech.map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className={`m-1 inline-block ${rowHover === index ? 'bg-blue-400 text-white opacity-100' : 'text-white'} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 mb-2 select-none`}
                                                        >{skill}</span>
                                                    ))
                                                    }
                                                </div>
                                            </td>
                                            <td className={`hidden md:table-cell lg:table-cell whitespace-nowrap px-3 py-4 ${rowHover === index ? 'opacity-100' : 'opacity-50'} font-medium`}>
                                                <div className="flex flex-row space-x-4">
                                                    {item.link ?
                                                        <a href={item.link}>
                                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                                 className="size-10 fill-white">
                                                                <path fillRule="evenodd"
                                                                      d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839
                                                          9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606
                                                          1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927
                                                          0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336
                                                          1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678
                                                          1.846 0 1.332-.012 2.407-.012 2.734 0
                                                          .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                        : <></>}
                                                    {item.view ?
                                                        <a href={item.view}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                 viewBox="0 0 24 24" strokeWidth={1.5}
                                                                 stroke="currentColor"
                                                                 className="size-10">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                                            </svg>
                                                        </a>
                                                        : <></>}
                                                </div>
                                            </td>
                                        </tr>))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
