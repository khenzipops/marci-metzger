import { FaFacebook, FaInstagram, FaLinkedin, FaYelp } from "react-icons/fa";
function Footers() {
  return (
    <div className="bg-white mt-10">
      <div className=" font-semibold text-white px-12">
        <div className="flex-row bg-gray-800 gap-4 text-3xl flex justify-center py-3">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaYelp />
        </div>
        <div className="bg-gray-800">
          <h1 className="px-4">
            COPYRIGHT © 2023 MARCI METZGER HOMES - ALL RIGHTS RESERVED{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Footers;
