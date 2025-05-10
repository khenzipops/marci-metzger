import { FaFacebook, FaInstagram, FaLinkedin, FaYelp } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-gray-800 font-semibold text-white ">
      <div className="flex-row- gap-4 text-3xl flex justify-center py-3">
        <FaFacebook />
        <FaInstagram />
        <FaLinkedin />
        <FaYelp />
      </div>
      <div>
        <h1>COPYRIGHT © 2023 MARCI METZGER HOMES - ALL RIGHTS RESERVED </h1>
      </div>
    </div>
  );
}
export default Footer;
