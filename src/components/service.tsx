// components/OurServices.tsx
import Image from "next/image";

const services = [
  {
    title: "Real Estate Done Right",
    description:
      "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    image: "/assets/s-image-1.jpeg", // Replace with your actual image path
    rounded: true,
  },
  {
    title: "Commercial & Residential",
    description:
      "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
    image: "/assets/s-image-2.jpeg", // Replace with your actual image path
    rounded: true,
  },
  {
    title: "Rely on Expertise",
    description:
      "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    image: "/assets/s-image-3.jpeg", // Replace with your actual image path
    rounded: true,
  },
];

export default function OurServices() {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-serif text-gray-700 mb-12">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center ">
            <div
              className={`w-72 h-72 overflow-hidden shadow-xl  ${
                service.rounded ? "rounded-xl" : "rounded-none "
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={288}
                height={288}
                className="object-cover w-full h-full "
              />
            </div>
            <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-gray-600 text-sm max-w-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
