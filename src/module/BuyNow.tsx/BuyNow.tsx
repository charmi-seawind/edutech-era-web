import * as React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import bg from "../../assets/affilate/bg-1.jpg";

export default function BuyNow() {
  const [formData, setFormData] = useState({
    phone: "",
  });

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  return (
    <div
      className="flex items-center justify-center min-h-[60vh] py-10 px-4 bg-gradient-to-b from-[#87e2ee] to-[#1e293b] bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md border border-black/20">
        <h2 className="text-3xl font-bold text-center text-black">Welcome!</h2>
        <p className="text-center text-gray-600 my-3">
          Start your AI-powered learning journey today!
        </p>

        <form className="space-y-5">
          <PhoneInput
            country={"in"}
            value={formData.phone}
            onChange={handlePhoneChange}
            enableSearch
            inputClass="!w-full !py-3 !pl-12 !pr-3 !rounded border !border-gray-300 focus:!outline-none"
            buttonClass="!border-r !border-gray-300"
            containerClass="!w-full"
            inputStyle={{ width: "100%" }}
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white text-base bg-[#34b6f3] w-full sm:w-32 rounded-full border-2 border-[#f2c761] py-2 font-semibold transition hover:bg-[#5790a8]"
            >
              Send OTP
            </button>
          </div>
        </form>

        <p className="mt-5 text-center text-sm text-black">
          Don&apos;t have an account?
          <a href="#" className="text-blue-400 ml-1 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
