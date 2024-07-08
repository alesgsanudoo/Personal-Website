"use client";

import * as React from 'react';

import {Viewer, Worker} from '@react-pdf-viewer/core';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';

const HomePage = () => {
    const layout = defaultLayoutPlugin({
        sidebarTabs: (defaultTabs) => [],
        renderToolbar: (Toolbar) => (
            <Toolbar>
                {(slots) => {
                    const {EnterFullScreen, Zoom, ZoomIn, ZoomOut, Download, Print} = slots;
                    return (
                        <div className="flex justify-between items-center w-full">
                            <div className="flex item space-x-4">
                                <a href="/" className="flex items-center space-x-2 text-white hover:text-amber-400 pl-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M9 15l-6-6m0 0l6-6M3 9h12a6 6 0 010 12h-3"/>
                                    </svg>
                                    <span>Go Back</span>
                                </a>
                            </div>
                            <div className="flex-1 flex justify-center items-center space-x-4">
                                <EnterFullScreen/>
                                <ZoomOut/>
                                <Zoom/>
                                <ZoomIn/>
                                <Print/>
                                <Download/>
                            </div>
                        </div>
                    );
                }}
            </Toolbar>
        ),
    });

    return (
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
            <div
                style={{}}
            >
                <Viewer theme='dark' fileUrl="/resume.pdf" plugins={[layout]}/>
            </div>
        </Worker>
    );
};

export default HomePage;