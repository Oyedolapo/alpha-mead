import React from "react";

const ContactMap = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5184001764046!2d3.4251036497513287!3d6.455805025716206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4c8d62a5301%3A0xc7d60403a42f5a8d!2s6+Mobolaji+Johnson+Ave%2C+Ikoyi%2C+Lagos!5e0!3m2!1sen!2sng!4v1544191634651"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          title="Alpha Mead Group Location"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;
