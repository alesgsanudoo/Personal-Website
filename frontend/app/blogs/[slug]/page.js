import Markdown from "markdown-to-jsx"
import getPostMetadata from '../../../utils/getPostMetadata';
import fs from 'fs'
import path from 'path';
import matter from "gray-matter"
import {redirect} from "next/navigation";
import {Glow, GlowCapture} from "@codaworks/react-glow";
import React from "react";

function getPostContent(slug) {
    try {
        const folder = 'blogs/';
        const file = folder + `${slug}.md`;
        const content = fs.readFileSync(file, 'utf8');
        return matter(content);
    } catch (e) {
        redirect('/404');
    }
}

const postsDirectory = path.join(process.cwd(), 'blogs');

function getAllPosts() {
    const filenames = fs.readdirSync(postsDirectory);
    return filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const {data, content} = matter(fileContents);

        return {
            slug: filename.replace(/\.md$/, ''),
            data,
            content,
        };
    });
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
    const posts = getAllPosts();
    let hover = 0;

    const otherPosts = posts.filter((item) => item.slug !== slug)

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
                <div className="mt-10 scroll-smooth">
                    <Markdown>{post.content}</Markdown>
                </div>
                <GlowCapture>
                    <h4 className="mt-20 mb-2 text-3xl font-bold tracking-tight text-gray-900  bg-gradient-to-r from-blue-500 to-blue-50 text-transparent bg-clip-text select-none">Other
                        Blogs</h4>
                    <ul className="flex ml-4 mt-3 overflow-x-auto space-x-10 scrollbar-blog scroll-my-20 snap-mandatory snap-x">
                        {otherPosts.map((item, index) => (
                            <li
                                key={index}
                                className={`flex-shrink-0 max-w-[320px] mb-5 snap-center bg-gray rounded-lg hover:shadow-2xl glow:text-glow/50`}
                            >
                                <Glow color='white'>
                                    <div
                                        className="glow:opacity-100 glow:text-glow/100 glow:text-glow">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.data.title}</h5>
                                        </a>
                                        <p className="text-clip mb-3 font-normal text-gray-700 dark:text-gray-400">{item.data.date}</p>
                                        <p className="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400 glow:opacity-100 glow:text-glow/50 line-clamp-2">{item.content}</p>
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
            </div>
            {/* footer */}

        </main>
    )
}