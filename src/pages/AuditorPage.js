import backgroundImage from "../assets/img/audit-bg.svg";
import UploadForm from "../components/Form";
export default function AuditorPage() {
  return (
    <div className="h-screen relative">
      <img
        src={backgroundImage}
        alt="Background"
        className="h-full w-full object-cover absolute inset-0 z-0"
      />

      <div className="z-2 relative">
        <UploadForm />
      </div>
    </div>
  );
}
