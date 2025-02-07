import backgroundImage from "@assets/PNGs/backgroundImage.png";
import AuthHeader from "../_components/AuthHeader";
import RegisterMain from "./_components/RegisterMain";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Netflix Register",
  description: "Netflix Register page",
};

 async function Register() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage?.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-between h-[1080px] items-center w-full bg-black bg-opacity-50">
        <AuthHeader />
        <RegisterMain />
        <Footer />  
      </div>
    </div>
  );
}


export default Register;