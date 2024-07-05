import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export default function handler(req, res) {
    const postsDirectory = path.join(process.cwd(), 'blogs');
    const filenames = fs.readdirSync(postsDirectory);
    const posts = filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug: filename.replace(/\.md$/, ''),
            data,
            content,
        };
    });

    res.status(200).json(posts);
}
