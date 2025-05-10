// components/Map.js
import React from "react";

const Map = () => {
  return (
    <div className="bg-gray-800  ">
      <h1 className="flex justify-center font-serif text-3xl text-white p-4"></h1>
      <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg px-20">
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.9263831195066!2d-115.99421178472292!3d36.21571737910901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8e36cb3a7dce3%3A0x3552d928c42d27e7!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sph!4v1683235400000!5m2!1sen!2sph"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
