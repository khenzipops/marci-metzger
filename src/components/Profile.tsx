"use client";

function Profile() {
  return (
    <section className="bg-gradient-to-br from-gray-200 to-white py-16 px-6 border-b-4 border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-60 h-60 rounded-full overflow-hidden shadow-2xl border-4 border-black">
          <img
            src="/assets/Marci-metzger.png"
            alt="Marci J Metzger"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Marci J Metzger
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            REALTOR FOR NEARLY 3 DECADES!
          </p>
          <p className="text-xl font-semibold text-gray-800"> 206-919-6886</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
