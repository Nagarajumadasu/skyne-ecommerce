import React from "react";

function ContactUs() {
  return (
    <div className="bg-white text-black min-h-screen py-16 px-6 font-[Outfit]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Let's do this</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 text-center max-w-5xl mx-auto mb-12">
        <div>
          <h3 className="font-bold mb-2 text-lg">Customer Service</h3>
          <p>Mon - Sat | 10AM – 6PM</p>
          <p className="font-medium text-yellow-600 mt-2">+91 8688114109</p>
          <p>skyne.support@gmail.com</p>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-lg">Contact</h3>
          <p>Email: skyne.support@gmail.com</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Can We Help?</h2>
        <p className="text-gray-700">
          Our team was handpicked for their understanding of materials, process,
          and fashion. Whether you are browsing our site or visiting us, we're here
          to assist. Most common queries are covered in our{" "}
          <span className="text-yellow-600 font-medium cursor-pointer">FAQs</span>.
        </p>
      </div>
    </div>
  );
}

export default ContactUs;


