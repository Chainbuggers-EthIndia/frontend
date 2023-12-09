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
                <section className='h-screen bg-gray-200'>
                    <div className='flex mt-56 ml-44'>
                        <div className='flex flex-col items-start justify-center'>
                            <div className='text-7xl text-extrabold text-white mb-2 font-helvetica underline-offset-2'>LEXECO</div>
                            <div className='text-3xl text-semibold text-offwhite1 ml-12'>Rewarding Sustainabiity.</div>
                        </div>
                    </div>
                </section>
                <section className="h-screen bg-gray-200 relative flex items-center justify-center">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="h-full bg-gray-200 transform skew-y-6"></div>
                    </div>
                    <div className="w-1/2 text-center p-8">
                        <h1 className="text-6xl text-start text-white font-extrabold">What is Decarbonization ?</h1>
                    </div>
                    <div className="w-1/2 text-left p-8">
                        <p className="text-lg font-helvetica text-semibold text-offwhite1">
                            "Decarbonisation" tends to refer to the process of reducing "carbon intensity", lowering the amount of greenhouse gas emissions produced by the burning of fossil fuels. Generally, this involves decreasing CO2 output per unit of electricity generated. Reducing the amount of carbon dioxide occurring as a result of transport and power generation is essential to meet global temperature standards set by the Paris Agreement and UK government.
                        </p>
                    </div>
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
