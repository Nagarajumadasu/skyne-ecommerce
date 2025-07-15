import React from "react";

function ContactUs() {
  return (
    <div className="bg-white text-black min-h-screen py-16 px-6 font-[Outfit]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Let's do this</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto mb-12">
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
        <div>
          <h3 className="font-bold mb-2 text-lg">Address</h3>
          <p>13/24/68 Hyderabad,</p>
          <p>Ghatkesar, TS - 501301</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30449.47292211874!2d78.66253740227069!3d17.450899690591868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb7672754ba215%3A0x6ec61e6af526ab8f!2sGhatkesar%2C%20Telangana%20501301!5e0!3m2!1sen!2sin!4v1752595326807!5m2!1sen!2sin"
          className="w-full h-[350px] border rounded shadow-md"
          loading="lazy"
        ></iframe>
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


