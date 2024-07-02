import React from 'react';
import Project from './projects'; // Adjust the import based on your file structure

export async function generateMetadata() {
    return {
        title: `Projects ⋅ Alejandro Griffith`,
    };
}

export default function ProjectsPage() {
    return (
        <>
            <Project />
        </>
    );
}
