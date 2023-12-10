import logo from '../assets/img/main-logo.svg'
export default function Footer() {
    return (
        <div className="h-[8vh] w-full bg-green flex justify-between">
            <img src={logo} className='py-2 ml-3'/>
            <div className='text-lg text-center text-semibold mt-4 px-8 font-roboto'>LEXECO @ 2023. All rights reserved.</div>
        </div>
    );
}