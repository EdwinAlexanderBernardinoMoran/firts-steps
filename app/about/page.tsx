import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Decription',
 keywords: 'SEO, Keywords',
};

export default function AboutPage() {
    return (
        <>
        <span className="text-7xl">About Page</span>
        </>
    )
}