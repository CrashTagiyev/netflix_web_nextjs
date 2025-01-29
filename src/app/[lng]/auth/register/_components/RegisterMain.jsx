"use client";
import CustomForm from "@/components/CustomForm/CustomForm";
import { redirect } from "next/navigation";
import { register } from "../../_fetchs/register";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { toasProps } from "@/utilities/toasPrrops";

function RegisterMain() {
  const [formData, setFormData] = useState({});
  const registerFormConfig = {
    form: {
      style:
        "flex gap-4 bg-[#000000B2] bg-opacity-[70%] flex-col justify-start pt-[48px] items-center w-[450px] h-[550px] px-3 py-4 mb-[194px]",
      title: "Sign in",
      titleStyle: "text-3xl font-bold leading-[37.5px]  pl-[50px] w-full",
    },
    formInputs: [
      {
        inputContainerStyle: "h-[50px] p-1",
        style:
          "h-[50px] w-[314px] bg-transparent border border-[#808080B2] p-4",
        name: "email",
        type: "email",
        placeholder: "Email",
        action: (e) => {
          setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
        },
      },
      {
        inputContainerStyle: "h-[50px] p-1",
        style:
          "h-[50px] w-[314px] bg-transparent border border-[#808080B2] p-4",
        name: "username",
        type: "text",
        placeholder: "Username",
        action: (e) => {
          setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
        },
      },
      {
        inputContainerStyle: "h-[50px] p-1",
        style:
          "h-[50px] w-[314px] bg-transparent border border-[#808080B2] p-4",
        name: "password",
        type: "password",
        placeholder: "Password",
        action: (e) => {
          setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
        },
      },
    ],
    formButtons: [
      {
        buttonContainerStyle: "button-container-class",
        style: "h-[40px] w-[314px] bg-[#E50914]",
        type: "submit",
        value: "Sign up",
        action: async (e) => {
          e.preventDefault();
          const data = await register(formData);
          if (data.success) {
            toast.success("User successfuly created", toasProps);
          } else {
            toast.error(data.message, toasProps);
          }
        },
      },
      {
        buttonContainerStyle: "button-container-class",
        style: "mt-[15px] text-white",
        type: "reset",
        value: (
          <p className="w-full">
            <span className="text-[#FFFFFFB2]">Already Have an Account?</span>{" "}
            Sign in now
          </p>
        ),
        action: (e) => {
          e.preventDefault();
          redirect("/auth/login");
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
        form={registerFormConfig?.form}
        formInputs={registerFormConfig?.formInputs}
        formButtons={registerFormConfig?.formButtons}
      />
    </div>
  );
}
export default RegisterMain;
