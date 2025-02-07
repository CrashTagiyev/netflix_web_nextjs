import backgroundImage from "@assets/PNGs/backgroundImage.png";
import AuthHeader from "../_components/AuthHeader";
import LoginMain from "./_components/LoginMain";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Netflix Sign In",
  description: "Netflix Sign In",
};

async function Login() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage?.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-between h-[1080px] items-center w-full bg-black bg-opacity-50">
        <AuthHeader />
        <LoginMain />
      </div>
      <Footer />
    </div>
  );
}

export default Login;
