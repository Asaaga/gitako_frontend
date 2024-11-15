import React from "react";
import ContactUsForm from "../components/ContactUsForm";

const ContactUs = () => {
  return (
    <>
      <section className="px-10 py-20">
        <h1 className="text-[#00100B] font-bold text-center lg:text-5xl text-3xl leading-[54px] py-10 lg:pb-20 pb-10">
          {`we are always available to answer you`}
        </h1>
        <div className="flex lg:flex-row flex-col gap-10 justify-between">
          {/* form */}
          <ContactUsForm />

          {/* map */}
          <div className="lg:w-1/2 w-full bg-brand-500 p-5 lg:order-last order-first flex flex-col justify-between">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.964392945126!2d8.539967874579023!3d7.731986193673378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10536d19e61f9b3b%3A0x3d597f6142e1df41!2sMakurdi%20Round%20About!5e0!3m2!1sen!2sng!4v1697972021849!5m2!1sen!2sng"
                width="100%"
                title="location"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
