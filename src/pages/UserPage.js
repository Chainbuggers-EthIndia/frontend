import UserSignup from "../components/UserSignup";
import background from '../assets/img/user-bg.svg'

// TODO Implementation : reorient background image
export default function UserPage() {
    return (
        <div className="h-screen w-screen">
            <img src={background} className="z-0 relavtive" />
            <UserSignup />
        </div>
    );
}