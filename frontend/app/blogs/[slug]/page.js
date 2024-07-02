import Markdown from "markdown-to-jsx"
import getPostMetadata from '../../../utils/getPostMetadata';
import React from 'react'
import fs from 'fs'
import matter from "gray-matter"
import {redirect} from "next/navigation";

function getPostContent(slug) {
    try {
        const folder = 'blogs/';
        const file = folder + `${slug}.md`;
        const content = fs.readFileSync(file, 'utf8');
        let data = matter(content);
        console.log(data)
        return data;
    } catch (e) {
        redirect('/404');
    }
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata('blogs');
    return posts.map((post) => ({slug: post.slug}));
}

export async function generateMetadata({params}) {
    const id = params?.slug ? ' ⋅ ' + params?.slug : '';
    return {
        title: `Blog ${id.replaceAll('_', ' ')}`
    }
}

export default function postPage(props) {

    const slug = props.params.slug;
    const post = getPostContent(slug);


    const testItems = [
        {title: 'Test', date: 'Date', content: 'content'},
        {title: 'Test', date: 'Date', content: 'content'}
    ];
    return (
        <main className="flex flex-col min-h-screen">
            <div
                className="max-w-screen-xl sm:mt-5 md:mt-10 lg:mt-20 px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
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
                <h1 className="text-3xl md:text-6xl lg:text-6xl mt-5 md:h-20 lg:h-20 xl:h-20 font-bold bg-gradient-to-r from-blue-500 to-blue-50 text-transparent bg-clip-text select-none">{post.data.title}</h1>
                <h3 className="sm:text-sm md:text-lg lg:text-lg font-bold select-none">From {post.data.date}</h3>
                <div className="mt-10 mb-10 scroll-smooth">
                    <Markdown>{post.content}</Markdown>
                </div>
                <ul className="flex flex-row">
                    {testItems.map((item, i) => (
                        <li key={i}>

                        </li>
                    ))}
                </ul>
            </div>
            {/* footer */}

        </main>
    )
}