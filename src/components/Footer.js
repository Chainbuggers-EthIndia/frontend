import logo from '../assets/img/main-logo.svg'
export default function Footer() {
    return (
        <div className="h-[20vh] w-full bg-green flex">
            <img src={logo} />
            <div className='text-lg text-semibold font-roboto'>LEXECO @ 2023. All rights reserved.</div>
        </div>
    );
}