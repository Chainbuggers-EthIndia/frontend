import backgroundImage from '../assets/img/landing-bg.svg'
import NavigationBar from '../components/NavigationBar'

export default function LandingPage() {
    return (
        <div className="h-screen relative">
            <img
                src={backgroundImage}
                alt="Background"
                className="h-full w-full object-cover absolute inset-0 z-0"
            />
            <div className="absolute top-0 left-0 right-0 z-10">
                <NavigationBar />
            </div>
            <div className=''>

            </div>
        </div>
    );
}