import backgroundImage from '../assets/img/estimate-bg.svg'
import SidePanel from '../components/SidePanel';
export default function EstimatorPage() {
    return (
        <div className="h-screen relative">
            <img
                src={backgroundImage}
                alt="Background"
                className="h-full w-full object-cover absolute inset-0 z-0"
            />
            <div className='flex w-1/5'>
                <SidePanel />
                <div className='flex flex-col'>
                    <div className='h-1/5 w-4/5'>
                        <img src='./main-logo.svg' />
                        <div>Current</div>
                    </div>
                </div>
            </div>
        </div>
    );
}