import backgroundImage from '../assets/img/estimate-bg.svg'
import EstimateCard from '../components/EstimateCard';
import Logo from "../assets/img/main-logo.svg";
import logout from '../assets/img/logout-btn.png';
import RejectCard from '../components/RejectCard';
import AcceptCard from '../components/AcceptCard';
import dashboard from '../assets/img/dashboard.svg'
import history from '../assets/img/history.svg'
import profile from '../assets/img/profile.svg'

export default function EstimatorPage() {
    const generateCompanyCards = (count) => {
        return Array.from({ length: count }, (_, index) => (
            <EstimateCard />
        ));
    };
    const handleButtonClick = () => {
        console.log('logout');
    };

    return (
        <div className="h-screen relative">
            <img
                src={backgroundImage}
                alt="Background"
                className="h-full w-full object-cover absolute inset-0 z-0"
            />
            <div className="flex w-screen">
                <div className="rounded-r-lg bg-gray backdrop-filter-blur box-border w-1/5 h-screen border-[1px] border-solid border-lightgray flex flex-col pl-6 justify-between py-6  z-10">
                    <div>

                        <div className="mt-5">
                            <img src={Logo} alt="Logo" className="h-20 pb-8" />
                        </div>

                        <div className="flex flex-col justify-between p-4">
                            <div className="flex flex-col  items-start font-bold text-2xl text-white font-helvetica">
                                <div className="pb-4 cursor-pointer hover:underline flex gap-2 items-center"><img src={dashboard} alt="icon" />Dashboard</div>
                                <div className="pb-4 cursor-pointer hover:underline flex gap-2 items-center"><img src={history} alt="icon" />History</div>
                                <div className="pb-4 cursor-pointer hover:underline flex gap-2 items-center"><img src={profile} alt="icon" />Profile</div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <img
                            src={logout}
                            alt="Button"
                            className="cursor-pointer"
                            onClick={handleButtonClick}
                        />
                    </div>
                </div>
                <div className="h-3/5 flex flex-col p-5 mx-6 mt-16 items-center, justify-around">
                    <div className="text-helvetica font-bold text-2xl text-white">Current</div>
                    <div className="flex m-4">{generateCompanyCards(1)}</div>
                    <div className="text-helvetica font-bold text-2xl text-white">History</div>
                    <div className="flex m-4"><RejectCard /> <AcceptCard /></div>
                </div>
            </div>
        </div>
    );
}
