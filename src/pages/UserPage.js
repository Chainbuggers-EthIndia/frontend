import UserSignup from "../components/UserSignup";
import background from '../assets/img/user-bg.svg'

export default function UserPage() {
    return (
        <div className="h-screen w-full relative" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
            <div className="absolute inset-0 flex items-center justify-center">
                <UserSignup />
            </div>
        </div>
    );
}