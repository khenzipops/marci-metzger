import Marquee from "react-fast-marquee";
import Image from "next/image";

const images = [
  "/assets/icon-1.png",
  "/assets/icon-2.png",
  "/assets/icon-3.jpg",
  "/assets/icon-4.png",
];

// Repeat the array 2 times (or more if you like)
const repeatedImages = [
  ...images,
  ...images,
  ...images,
  ...images,
  ...images,
  ...images,
];

export default function Partnership() {
  return (
    <div className="bg-gray-900 py-3">
      <Marquee speed={50} pauseOnHover gradient={false}>
        {repeatedImages.map((src, index) => (
          <div
            key={index}
            className="mx-4 bg-white border-2 border-white rounded-sm"
          >
            <Image
              src={src}
              alt={`Logo ${index + 1}`}
              width={50}
              height={50}
              className="rounded-md shadow-md object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
