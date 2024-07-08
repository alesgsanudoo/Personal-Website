import React from 'react';
import Resume from "./resume";

export async function generateMetadata() {
    return {
        title: `Resume ⋅ Alejandro Griffith`,
    };
}

export default function ProjectsPage() {
    return (
        <>
            <Resume />
        </>
    );
}
