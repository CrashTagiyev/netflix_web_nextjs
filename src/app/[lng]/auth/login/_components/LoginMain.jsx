"use client";

import backgroundImage from "@assets/PNGs/backgroundImage.png";
import CustomForm from "@/components/CustomForm/CustomForm";
import { redirect } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { login } from "../../_fetchs/login";
import { toasProps } from "@/utilities/toasPrrops";
import { getCookie } from "@/utilities/getCookie";
import { useState, useEffect } from "react";

function LoginMain() {
  const [locale, setLocale] = useState(``);

  const getLocale = async () => {
    const getlocale = await getCookie(`locale`);
    setLocale(getlocale.value);
  };

  useEffect(() => {}, []);

  useEffect(() => {
    getLocale();
  }, []);

  async function handleSubmit(e) {
    const formData = new FormData(e.currentTarget);

    e.preventDefault();
    const email = formData.get("email");
    const password = formData.get("password");
    const data = await login({ email, password });

    console.log(data);
    if (data.token) {
    } else {
      toast.error(data.message, toasProps);
    }
  }
  const loginFormConfig = {
    form: {
      style:
        "flex gap-4 bg-[#000000B2] bg-opacity-[70%] flex-col justify-start pt-[48px] items-center w-[450px] h-[450px] px-3 py-4 mb-[234px]",
      title: "Sign in",
      titleStyle: "text-3xl font-bold leading-[37.5px]  pl-[50px] w-full",
      onSubmit: handleSubmit,
    },
    formInputs: [
      {
        inputContainerStyle: "h-[50px] p-1",
        style:
          "h-[50px] w-[314px] bg-transparent border border-[#808080B2] p-4",
        name: "email",
        type: "text",
        placeholder: "Email",
        action: (e) => {
          // console.log(e.target.name);
          // setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
        },
      },
      {
        inputContainerStyle: "h-[50px] p-1",
        style:
          "h-[50px] w-[314px] bg-transparent border border-[#808080B2] p-4",
        name: "password",
        type: "password",
        placeholder: "Enter your password",
        action: (e) => {
          // console.log(e.target.name);
          // setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
        },
      },
    ],
    formButtons: [
      {
        buttonContainerStyle: "button-container-class",
        style: "h-[40px] w-[314px] bg-[#E50914]",
        type: "submit",
        value: "Sign in",
      },
      {
        buttonContainerStyle: "button-container-class",
        style: "mt-[15px] text-white",
        type: "button",
        value: (
          <p className="w-full">
            <span className="text-[#FFFFFFB2]">New to Netflix?</span> Sign up
            now
          </p>
        ),
        action: (e) => {
          e.preventDefault();
          redirect(`register`);
        },
      },
    ],
  };

  return (
    <div className="mb-[160px]">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        
      />
      <CustomForm
        form={loginFormConfig?.form}
        formInputs={loginFormConfig?.formInputs}
        formButtons={loginFormConfig?.formButtons}
      />
    </div>
  );
}

export default LoginMain;
