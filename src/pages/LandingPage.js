import React from 'react';
import backgroundImage from '../assets/img/landing-bg.svg';
import NavigationBar from '../components/NavigationBar';

export default function LandingPage() {
    return (
        <div className="h-screen relative overflow-hidden">
            <img
                src={backgroundImage}
                alt="Background"
                className="h-full w-full object-cover absolute inset-0 z-0"
            />
            <div className="absolute top-0 left-0 right-0 z-10">
                <NavigationBar />
            </div>
            <div className="absolute top-16 left-0 right-0 bottom-0 overflow-y-auto overflow-x-hidden">
                {/* Section 1 */}
                <section className="h-screen bg-gray-200">
                    <h1 className="text-3xl font-bold text-center pt-8">Section 1</h1>
                    {/* Add your content for Section 1 here */}
                </section>

                {/* Section 2 */}
                <section className="h-screen bg-gray-300">
                    <h1 className="text-3xl font-bold text-center pt-8">Section 2</h1>
                    {/* Add your content for Section 2 here */}
                </section>

                {/* Section 3 */}
                <section className="h-screen bg-gray-400">
                    <h1 className="text-3xl font-bold text-center pt-8">Section 3</h1>
                    {/* Add your content for Section 3 here */}
                </section>

                {/* Section 4 */}
                <section className="h-screen bg-gray-500">
                    <h1 className="text-3xl font-bold text-center pt-8">Section 4</h1>
                    {/* Add your content for Section 4 here */}
                </section>
            </div>
        </div>
    );
}
