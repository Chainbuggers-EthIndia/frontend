import React from 'react';
import title from '../assets/img/title.svg';
import NavigationBar from '../components/NavigationBar';
import decarbon from '../assets/img/decarbon.png'
import logo from '../assets/img/favicon-logo.svg'
import findmore from '../assets/img/findmore.svg'
import Footer from '../components/Footer';
export default function LandingPage() {
    return (
        <div className="h-screen w-full relative overflow-hidden">
            <img
                src={title}
                alt="Background"
                className="h-full w-full object-cover absolute inset-0 z-0"
            />
            <div className="absolute top-0 left-0 right-0 z-10">
                <NavigationBar />
            </div>
            <div className="absolute top-12 left-0 right-0 bottom-0 overflow-y-auto overflow-x-hidden">
                <section className='h-screen bg-gray-200'>
                    <div className='flex mt-56 ml-44'>
                        <div className='w-1/3 h-2/3 flex flex-col items-center justify-around'>
                            <div className='w-1/4 h-1/4'>
                                <img src={logo} />
                            </div>
                            <div className='text-7xl text-extrabold text-white mb-2 font-helvetica underline-offset-2'>LEXECO</div>
                            <div className='text-3xl text-semibold font-helvetica text-offwhite1'>Rewarding Sustainabity.</div>
                        </div>
                        <div className='w-2/3 h-2/3 mt-8 flex flex-col items-center justify-between'>
                            <div className='text-xl font-bold font-helvetica w-1/2 text-offwhite1'>
                                Turn emissions into income: The carbon credit marketplace that rewards sustainability.
                            </div>
                            <div className='h-1/2 w-1/2 p-8'>
                                <img src={findmore} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="h-screen bg-gray-200 relative flex items-center justify-between">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="h-full bg-gray-200 transform skew-y-6"></div>
                    </div>
                    <div className="w-2/5 text-center p-8 flex flex-col">
                        <h1 className="text-6xl text-start text-white font-extrabold">What is Decarbonization ?</h1>
                        <h1 className="text-xl font-helvetica text-semibold text-offwhite1">
                            "Decarbonisation" tends to refer to the process of reducing "carbon intensity", lowering the amount of greenhouse gas emissions produced by the burning of fossil fuels. Generally, this involves decreasing CO2 output per unit of electricity generated.
                        </h1>
                    </div>
                    <div className="w-2/5 p-8">
                        <img src={decarbon} className='w-2/3 h-2/3 rounded-l-lg' />
                    </div>
                </section>
                {/* Section 2 */}
                <section id="what-we-do" className="h-screen bg-gray-300">
                    <h1 className="text-3xl font-bold text-center pt-8">Section 2</h1>
                    {/* Add your content for Section 2 here */}
                </section>

                {/* Section 3 */}
                <section id="innovation" className="h-screen bg-gray-400">
                    <h1 className="text-3xl font-bold text-center pt-8">Section 3</h1>
                    {/* Add your content for Section 3 here */}
                </section>

            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10">
                <Footer />
            </div>
        </div>
    );
}
