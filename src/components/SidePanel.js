// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTachometerAlt, faHistory, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const SidePanel = () => {
    return (
        <div className="relative rounded-r-lg bg-gray backdrop-filter-blur box-border w-1/5 h-screen border-[1px] border-solid border-lightgray">
            <div className="flex flex-col justify-between p-4">
                <div className="flex flex-col items-center font-bold text-2xl p-20 text-white font-helvetica">
                    <div className="pb-4">Dashboard</div>
                    <div className="pb-4">History</div>
                    <div className="pb-4">Profile</div>
                    <div className="pb-4">Logout</div>
                </div>
            </div>
        </div>
    );
};

export default SidePanel;
