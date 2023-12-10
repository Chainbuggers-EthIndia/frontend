import React from 'react';
import title from '../assets/img/title.svg';
import NavigationBar from '../components/NavigationBar';
import decarbon from '../assets/img/decarbon.svg'
import carboncradit from '../assets/img/carboncradit.svg'
import logo from '../assets/img/favicon-logo.svg'
import findmore from '../assets/img/findmore.svg'
import Footer from '../components/Footer';
export default function LandingPage() {
    return (
        <div className="h-screen w-full relative">
            {/* <img
                src={title}
                alt="Background"
                className="h-full w-full object-cover absolute inset-0 z-0"
            /> */}
            <div className="fixed top-0 left-0 right-0 z-10">
                <NavigationBar />
            </div>
            <div className="overflow-y-auto overflow-x-hidden">
                <section className="h-screen bg-gray-200 bg-[url('./assets/img/title.svg')] bg-no-repete bg-cover">
                    <div className='h-screen flex justify-center items-center'>
                        <div className='flex flex-col items-center justify-around'>
                            <div className='w-1/4 h-1/4'>
                                <img src={logo} />
                            </div>
                            <div className='text-7xl text-extrabold text-white mb-2 font-helvetica underline-offset-2'>LEXECO</div>
                            <div className='text-3xl text-semibold font-helvetica text-offwhite1'>Rewarding Sustainabity.</div>
                        </div>
                        <div className='w-[60%] mt-8 flex flex-col items-center gap-8'>
                            <div className='text-3xl font-bold font-helvetica w-1/2 text-offwhite1'>
                                Turn emissions into income: The carbon credit marketplace that rewards sustainability.
                            </div>
                            <div className='h-1/2 w-1/2'>
                                <img src={findmore} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="h-screen bg-gray-200 relative flex flex-row-reverse items-center justify-between">
                    <div className="w-[40%] text-center flex flex-col mr-[10vh]">
                        <h1 className="text-3xl text-start text-[#000000] font-bold">What is Decarbonization ?</h1>
                        <h1 className="text-xl font-helvetica font-[400] text-[#4B5652] text-left">
                        Decarbonization slashes CO2, shifts to clean energy, and enhances efficiency. Capturing industry emissions is crucial, with global collaboration driving a sustainable future.
                        </h1>
                    </div>
                    <div className="w-[70%]">
                        <img src={decarbon} className='w-2/3 h-2/3 rounded-l-lg' />
                    </div>
                </section>
                {/* Section 2 */}
                <section className="h-screen bg-gray-200 relative flex flex-row items-center justify-between gap-[10vh]">
                    <div className="w-[40%] text-center flex flex-col px-10">
                        <h1 className="text-3xl text-start text-[#000000] font-bold">What is Carbon Credits?</h1>
                        <h1 className="text-xl font-helvetica font-[400] text-[#4B5652] text-left">
                        Carbon credits are permits allowing companies to emit a specific amount of greenhouse gases. One credit equals one ton of emissions. Trading these credits creates incentives for emission reduction and environmental sustainability.
                        </h1>
                    </div>
                    <div className="w-[70%] flex items-end justify-end">
                        <img src={carboncradit} className='w-2/3 h-2/3 rounded-l-lg right-0' />
                    </div>
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
            <div className="">
                <Footer />
            </div>
        </div>
    );
}
