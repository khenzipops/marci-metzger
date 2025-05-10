"use client";

const locations = [
  "Washington, Utah",
  "Boulder City, Nevada",
  "Cedar City, Utah",
  "St. George, Utah",
  "Henderson, Nevada",
  "Las Vegas, Nevada",
  "Parowan, Utah",
  "Ivins, Utah",
  "Searchlight, Nevada",
  "Santa Clara, Utah",
  "Mesquite, Nevada",
  "Kingman, Arizona",
  "Beaver, Utah",
  "Logandale, Nevada",
  "Springdale, Utah",
  "Hurricane, Utah",
  "Toquerville, Utah",
  "Pioche, Nevada",
  "Ely, Nevada",
  "Bryce Canyon, Utah",
  "Pahrump, Nevada",
  "Overton, Nevada",
  "Bristlecone, Nevada",
  "Alamo, Nevada",
  "Elko, Nevada",
  "Salina, Utah",
  "Richfield, Utah",
  "Tropico, Utah",
  "Tonopah, Nevada",
  "Enterprise, Utah",
  "North Las Vegas, Nevada",
  "Flagstaff, Arizona",
  "Page, Arizona",
  "Grand Canyon Village, Arizona",
  "Williams, Arizona",
  "Sedona, Arizona",
  "Oak Creek Canyon, Arizona",
  "Kanab, Utah",
  "Duck Creek Village, Utah",
  "Zion National Park, Utah",
];
const types = ["Land", "Residential Lease", "High Rise", "Residential"];
const bedrooms = ["Any Number", "Studio", "+1", "+2", "+3", "+4", "+5", "+6"];
const baths = ["Any Number", "+1", "+2", "+3", "+4", "+5", "+6"];
const sortBy = [
  "Newest",
  "Oldest",
  "Least Expensive to Most",
  "Most Expensive to Least",
  "Bedrooms (Low to High)",
  "Bedrooms (High to Low)",
  "Bathrooms (Low to High)",
  "Bathrooms (High to Low)",
];

export default function SearchListing() {
  return (
    <section className="px-4 py-12 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-10 tracking-tight">
          Search Listings
        </h1>

        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SelectGroup label="Location" options={locations} />
          <SelectGroup label="Type" options={types} />
          <SelectGroup label="Sort By" options={sortBy} />
          <SelectGroup label="Bedrooms" options={bedrooms} />
          <SelectGroup label="Baths" options={baths} />

          <div className="sm:col-span-2 lg:col-span-3 flex gap-4 ">
            <InputGroup label="Min Price" placeholder="e.g. 5000" />
            <InputGroup label="Max Price" placeholder="e.g. 10000" />
          </div>

          <div className="sm:col-span-2 lg:col-span-3 flex justify-end mt-2">
            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition text-base font-medium"
            >
              Search Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function SelectGroup({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="flex flex-col border-b-2">
      <label className="text-sm font-medium mb-1 ">{label}</label>
      <select
        defaultValue=""
        className="border border-gray-300 p-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 text-sm "
      >
        <option value="" disabled hidden>
          -- Select {label} --
        </option>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function InputGroup({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col flex-1">
      <label className="text-sm font-medium mb-1 ">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="border-b-2 border-gray-900 p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-800 text-sm "
      />
    </div>
  );
}
