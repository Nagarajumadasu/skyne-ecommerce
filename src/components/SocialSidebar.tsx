import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const SocialSidebar: React.FC = () => {
  return (
    <div className="fixed right-4 bottom-5 z-50 flex flex-col items-center space-y-5 text-white">
      {/* YouTube */}
      <div className="flex flex-col items-center">
        <a
          href="https://youtube.com/@yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-red-600 transition duration-300"
        >
          <FaYoutube className="text-2xl" />
          <span className="text-sm rotate-90 origin-bottom mb-2">Youtube</span>
          
        </a>
      </div>

      {/* Divider Line */}
      <div className="w-px h-4 bg-gray-400" />

      {/* Instagram */}
      <div className="flex flex-col items-center">
        <a
          href="https://www.instagram.com/omkar_t6?igsh=MXRtaWxjdnV0ZTFlYg=="
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-pink-500 transition duration-300"
        >
          <FaInstagram className="text-2xl" />
          <span className="text-sm rotate-90 origin-bottom mt-2">Insta.</span>
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
