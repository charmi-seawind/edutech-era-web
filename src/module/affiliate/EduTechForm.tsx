import * as React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Container from "../../components/Container";
import era from "../../assets/affilate/era.jpg";
import shape from "../../assets/about/shape-5.png";
import shape2 from "../../assets/about/shape-1.png";

const EdutechForm =()=> {
  const [formData, setFormData] = useState({
    type: "Individual",
    salutation: "Mr",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    country: "India",
    state: "",
    city: "",
    area: "",
    pincode: "",
    referralCode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: any) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const validateForm = () => {
    const newErrors: any = {};
    const requiredFields = [
      "type",
      "salutation",
      "firstName",
      "lastName",
      "email",
      "phone",
      "address",
      "country",
      "state",
      "city",
      "area",
      "pincode",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validateForm()) {
      console.log("Form validation failed", errors);
      return;
    }
    console.log("Form Data Submitted:", formData);
  };

  const renderError = (field: any) =>
    errors[field] ? (
      <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
    ) : null;

  return (
    <div className="relative bg-gradient-to-br from-white via-white to-[#000f66] px-4 sm:px-6 md:px-8">
      <img
        src={shape}
        alt="Decorative shape"
        className="absolute bottom-6 right-2 w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px] z-0"
      />

      <img
        src={shape2}
        alt="Decorative shape"
        className="absolute top-6 left-4 w-[40px] sm:w-[70px] md:w-[90px] lg:w-[110px] xl:w-[130px] z-0"
      />

      <Container>
        <div className="flex flex-col lg:flex-row items-center py-10 gap-10">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Be a Part of <span className="text-[#34b6f3]">Education</span>{" "}
              Revolution with AI Powered Interactive Content
            </h2>

            <ul className="space-y-4 text-gray-800">
              {[
                "Expand EDUTECH ERA’s reach globally, offering innovative learning solutions",
                "Empower B2B Partner with revenue-sharing opportunities",
                "Provide comprehensive tools and support for B2B Partner to succeed in promoting the product.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✔</span> {item}
                </li>
              ))}
            </ul>

            <div className="w-full">
              <img
                src={era}
                alt="Edutech"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="w-full bg-white p-4 sm:p-6 rounded-xl shadow-xl border-4 border-[#9fa2a3]"
            >
              <div className="mb-4">
                <label className="block font-medium mb-2">
                  Are you a Company or Individual?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-6">
                  {["Individual", "Company"].map((type) => (
                    <label key={type} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="type"
                        value={type}
                        checked={formData.type === type}
                        onChange={handleChange}
                      />
                      {type}
                    </label>
                  ))}
                </div>
                {renderError("type")}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block mb-1">Salutation</label>
                  <select
                    name="salutation"
                    value={formData.salutation}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 px-3 py-2 rounded"
                  >
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Miss</option>
                  </select>
                  {renderError("salutation")}
                </div>
                <div>
                  <label className="block mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter First name"
                    className="w-full border-2 border-gray-300 px-3 py-2 rounded"
                  />
                  {renderError("firstName")}
                </div>
                <div>
                  <label className="block mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter Last name"
                    className="w-full border-2 border-gray-300 px-3 py-2 rounded"
                  />
                  {renderError("lastName")}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full border-2 border-gray-300 px-3 py-2 rounded"
                  />
                  {renderError("email")}
                </div>
                <div>
                  <label className="block mb-1 font-medium">
                    Phone <span className="text-red-500">*</span>
                  </label>
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
                  {renderError("phone")}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    className="w-full border-2 border-gray-300 px-3 py-2 rounded"
                  />
                  {renderError("address")}
                </div>
                <div>
                  <label className="block mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 px-3 py-2 rounded"
                  >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                  </select>
                  {renderError("country")}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1">
                    State <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 px-3 py-2 rounded"
                  >
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  </select>
                  {renderError("state")}
                </div>
                <div>
                  <label className="block mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter your City"
                    className="w-full border-2 border-gray-300 px-3 py-2 rounded"
                  />
                  {renderError("city")}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1">
                    Area <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="Enter your Area"
                    className="w-full border-2 border-gray-300 px-3 py-2 rounded"
                  />
                  {renderError("area")}
                </div>
                <div>
                  <label className="block mb-1">
                    Pincode <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Enter your Pincode"
                    className="w-full border-2 border-gray-300 px-3 py-2 rounded"
                  />
                  {renderError("pincode")}
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-1">
                  Referral Affiliate code (Who referred you)
                </label>
                <input
                  type="text"
                  name="referralCode"
                  value={formData.referralCode}
                  onChange={handleChange}
                  placeholder="Enter Referral Affiliate code"
                  className="w-full border-2 border-gray-300 px-3 py-2 rounded"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#21bcfe] hover:bg-gray-500 text-white py-3 px-6 rounded-full w-full sm:w-auto"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default EdutechForm;