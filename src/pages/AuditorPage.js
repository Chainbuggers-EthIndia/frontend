import backgroundImage from '../assets/img/audit-bg.svg'
import Logo from '../assets/img/main-logo.svg'
import CompanyCard from '../components/CompanyCard';
import SidePanel from '../components/SidePanel';
export default function AuditorPage() {
    return (
        <div className="h-screen relative">
            <img
                src={backgroundImage}
                alt="Background"
                className="h-full w-full object-cover absolute inset-0 z-0"
            />
            <div className='flex w-screen'>
                <SidePanel />
                <div className='flex flex-col mx-6 items-center, justify-around'>
                    <div>Current</div>
                    <div className='flex m-4'>
                        <CompanyCard /> <CompanyCard /> <CompanyCard />
                    </div>
                    <div>History</div>
                    <div className='flex'>
                        <CompanyCard /> <CompanyCard /> <CompanyCard />
                    </div>
                </div>
            </div>
        </div>
    );
}