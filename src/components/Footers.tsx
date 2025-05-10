import { FaFacebook, FaInstagram, FaLinkedin, FaYelp } from "react-icons/fa";
function Footers() {
  return (
    <div className="bg-gray-900 text-white  py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center space-y-6">
        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            aria-label="Yelp"
            className="hover:text-red-400 transition"
          >
            <FaYelp />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-center tracking-wide">
          © 2023 Marci Metzger Homes – All rights reserved.
        </p>
      </div>
    </div>
    // <div className="bg-white mt-10">
    //   <div className=" font-semibold text-white px-12">
    //     <div className="flex-row bg-gray-800 gap-4 text-3xl flex justify-center py-3">
    //       <FaFacebook />
    //       <FaInstagram />
    //       <FaLinkedin />
    //       <FaYelp />
    //     </div>
    //     <div className="bg-gray-800">
    //       <h1 className="px-4">
    //         COPYRIGHT © 2023 MARCI METZGER HOMES - ALL RIGHTS RESERVED{" "}
    //       </h1>
    //     </div>
    //   </div>
    // </div>
  );
}
export default Footers;
