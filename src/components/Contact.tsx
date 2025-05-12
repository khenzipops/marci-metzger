"use client";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

const Contact = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [currentDayIndex, setCurrentDayIndex] = useState<number | null>(null);

  useEffect(() => {
    // Set the timezone to America/Los_Angeles (Pahrump follows Pacific Time)
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "America/Los_Angeles",
      weekday: "long",
    };

    // Get current day in Pahrump timezone
    const pahrumpDay = new Intl.DateTimeFormat("en-US", options).format(
      new Date()
    );
    const dayIndex = days.findIndex((day) => day === pahrumpDay);

    setCurrentDayIndex(dayIndex);
  }, []);

  if (currentDayIndex === null) return <div>Loading...</div>;
  const today = currentDayIndex;

  return (
    <div className=" bg-gray-50 py-5  ">
      <h1
        className="text-gray-800 font-serif font-stretch-ultra-expanded text-5xl text-center mb-4
      "
      >
        CALL OR VISIT US
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className=" p-8 ">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 flex justify-center">
            Get in Touch
          </h2>
          <form className="space-y-5" action="#" method="POST">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-1 block border-r-1  border-t-1  border-l-1 rounded-md  w-full p-3 border-b-2 border-b-gray-600 border-gray-300  sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block border-r-1  border-t-1  border-l-1 rounded-md  w-full p-3 border-b-2 border-b-gray-600 border-gray-300  sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block border-r-1  border-t-1  border-l-1 rounded-md  w-full p-3 border-b-2 border-b-gray-600 border-gray-300  sm:text-sm"
              ></textarea>
            </div>
            <div className=" flex justify-center">
              <button
                type="submit"
                className="text-lg w-1/2 py-3 px-4 bg-gray-800 text-white font-semibold rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <div className=" p-6 rounded-xl  text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Contact Details
            </h3>
            <p className="text-gray-600 mt-2">
              Marci Metzger - THE RIDGE REALTY GROUP
            </p>
            <p className="text-gray-600">
              3190 HW-160, Suite F, Pahrump, NV 89048
            </p>
            <p className="text-gray-600 mt-1">(206) 919-6886</p>
          </div>

          <div className=" p-6 rounded-xl  text-center">
            <div className=" p-6 rounded-xl  text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Office Hours
              </h3>
              <ul className="text-gray-600 mt-2">
                {days.map((day, index) => (
                  <li
                    key={day}
                    className={index === today ? "font-bold text-gray-800" : ""}
                  >
                    {day}: 8:00 AM - 7:00 PM
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-2 bg-green-600 hover:bg-green-700 text-white text-lg font-medium rounded-2xl shadow gap-x-2"
            >
              Message us on WhatsApp <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
