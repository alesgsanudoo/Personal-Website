import {Avatar, Box, Container, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';
import {
    AbcOutlined, Email,
    EmojiEmotions,
    EmojiPeople,
    Face,
    Instagram, LibraryBooks,
    LinkedIn,
    Person2,
    Science, TextSnippet,
    Work
} from "@mui/icons-material";

export default function Home() {

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
                            className="bg-gradient-to-r from-blue-500 to-blue-50 text-transparent bg-clip-text">Alejandro </span>
                        <span className="text-white">Griffith </span>
                    </h1>
                    {/* Description */}
                    <h2 className="text-2xl font-bold">
                        <span> I am Computer Science Student at </span>
                        <a href="https://www.purdue.edu" className="mt-4">
                            <span
                                className="bg-gradient-to-r from-amber-300 to-amber-500 text-transparent bg-clip-text lg:hover:text-3xl lg:transition-all lg:duration-300">Purdue University</span>
                        </a>
                    </h2>

                    {/* Social Media */}
                    <div className="flex flex-row justify-between space-x-12 items-center mt-10">
                        <a href="https://github.com/alesgsanudoo"><GitHubIcon
                            className="text-5xl hover:text-blue-400 lg:hover:text-7xl lg:transition-all lg:duration-300"/></a>
                        <a href="https://www.linkedin.com/in/alesgsanudoo/"><LinkedIn
                            className="text-5xl hover:text-blue-400 lg:hover:text-7xl lg:transition-all lg:duration-300"/></a>
                        <a href="https://www.instagram.com/alesgsanudoo_/"><Instagram
                            className="text-5xl hover:text-blue-400 lg:hover:text-7xl lg:transition-all lg:duration-300"/></a>
                    </div>

                    {/* Nav */}
                    <div
                        className="hidden lg:visible lg:flex lg:w-auto lg:h-14 lg:bg-gray-600 lg:bg-opacity-25 lg:backdrop-blur-md lg:border lg:border-white lg:border-opacity-20 lg:rounded-[16px] lg:shadow lg:mt-20">
                        <ul className="hidden lg:visible lg:flex lg:items-center lg:space-x-5 lg:px-3">
                            <li className="hidden lg:visible lg:relative lg:flex lg:items-center lg:justify-center lg:w-12 lg:h-12 lg:transition-transform lg:duration-200 lg:hover:scale-125">
                                <div
                                    className="hidden lg:visible name absolute top-[-50px] lg:bg-black lg:bg-opacity-50 text-white font-bold text-sm px-4 py-3 rounded-lg invisible">About
                                </div>
                                <a href="http://github.com" className="lg:visible"><EmojiPeople
                                    className="w-full h-full"></EmojiPeople></a>
                            </li>
                            <li className="relative flex items-center justify-center w-12 h-12 transition-transform duration-200 hover:scale-125">
                                <div
                                    className="name absolute top-[-70px] bg-black bg-opacity-50 text-white text-sm px-4 py-2 rounded-lg invisible">Experience
                                </div>
                                <Work className="w-full h-full"> </Work>
                            </li>
                            <li className="relative flex items-center justify-center w-12 h-12 transition-transform duration-200 hover:scale-125">
                                <div
                                    className="name absolute top-[-70px] bg-black bg-opacity-50 text-white text-sm px-4 py-2 rounded-lg invisible">Projects
                                </div>
                                <Science className="w-full h-full"></Science>
                            </li>
                            <li className="relative flex items-center justify-center w-12 h-12 transition-transform duration-200 hover:scale-125">
                                <div
                                    className="name absolute top-[-70px] bg-black bg-opacity-50 text-white text-sm px-4 py-2 rounded-lg invisible">Blog
                                </div>
                                <LibraryBooks className="w-full h-full"></LibraryBooks>
                            </li>
                            <li className="relative flex items-center justify-center w-12 h-12 transition-transform duration-200 hover:scale-125">
                                <div
                                    className="name absolute top-[-70px] bg-black bg-opacity-50 text-white text-sm px-4 py-2 rounded-lg invisible">Resume
                                </div>
                                <TextSnippet className="w-full h-full"></TextSnippet>
                            </li>
                            <li className="relative flex items-center justify-center w-12 h-12 transition-transform duration-200 hover:scale-125">
                                <div
                                    className="name absolute top-[-70px] bg-black bg-opacity-50 text-white text-sm px-4 py-2 rounded-lg invisible">Contact
                                    me
                                </div>
                                <Email className="w-full h-full"></Email>
                            </li>
                        </ul>
                    </div>
                    {/* footer */}

                    <div className="invisible lg:visible lg:absolute lg:bottom-5">
                        <h1>
                            Made with love by Alex ❤️!
                        </h1>

                    </div>
                </div>
            </div>

            {/* Information displayed in right side */}
            <div className="w-full lg:w-6/12 lg:h-screen overflow-y-scroll p-4 scrollable-content">
                <Container>
                    <h1 className="text-4xl mb-4">Scrollable Content</h1>

                    {/* Long content */}
                    <div className="space-y-4">
                        {Array.from({length: 50}).map((_, index) => (
                            <p key={index}>Data</p>
                        ))}
                    </div>
                </Container>
            </div>


        </main>
    );
}
