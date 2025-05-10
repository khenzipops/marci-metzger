"use client";

const sections = [
  {
    title: "Top Residential Sales Last 5 Years",
    content:
      "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, and we want to make sure our best is better every year.",
    image: "/assets/kitchen.png",
    alt: "Modern kitchen",
    reverse: false,
  },
  {
    title: "Don't Just List it...",
    content:
      "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
    image: "/assets/poolhouse.png",
    alt: "Pool House",
    reverse: true,
  },
  {
    title: "Trusted Local Experts",
    content:
      "Nobody knows the market like we do. Enjoy having a pro at your service—market analysis, upgrade lists, trusted contractors, and more.",
    image: "/assets/kitchen.png",
    alt: "Kitchen Expertise",
    reverse: false,
  },
];

export default function Details() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-32">
        {sections.map(({ title, content, image, alt, reverse }, idx) => (
          <div
            key={idx}
            className={`flex flex-col-reverse md:flex-row ${
              reverse ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
                <img src={image} alt={alt} className="w-full object-cover" />
              </div>
            </div>

            {/* Text */}
            <div className="md:w-1/2 w-full text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
