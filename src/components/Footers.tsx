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
  );
}
export default Footers;
