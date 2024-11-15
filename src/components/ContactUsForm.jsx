"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUsForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email,
      phone,
      subject,
      message,
    };

    // You can replace this with your form submission logic
    console.log(formData);
    alert("Form submitted successfully! Check console for form data.");

    // Clear the form after submission

    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="lg:w-1/2 h-full w-full">
      <h1 className="text-3xl font-semibold  mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Address */}
        <div>
          <label className="block py-2 text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block py-2 text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <PhoneInput
            country={"ng"} // Default country (Nigeria +234)
            value={phone}
            onChange={(phone) => setPhone(phone)}
            inputStyle={{ width: "100%" }}
            enableSearch={true}
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block py-2 text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block py-2 text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows={5}
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="text-white bg-brand-500 w-[150px] sm:w-[186px] h-[40px] sm:h-[51px] rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
