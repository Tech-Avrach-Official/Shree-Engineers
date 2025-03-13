import { Phone } from "lucide-react";
import React from "react";

const Divider = () => {
  const stats = [
    {
      icon: Phone,
      title: "20+ YEARS EXPERIENCE",
      description: "Nec maecenas neque potenti felis eget."
    },
    {
      icon: Phone,
      title: "500 + TASKFORCE",
      description: "Nec maecenas neque potenti felis eget."
    },
    {
      icon: Phone,
      title: "40K+ CLIENTS",
      description: "Nec maecenas neque potenti felis eget."
    },
    {
      icon: Phone,
      title: "Project Successful",
      description: "Nec maecenas neque potenti felis eget."
    }
  ];

  return (
    <div  className="relative w-full h-full"
     style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg')",
            backgroundSize: "cover",
        }}
    >
      {/* Background Image */}
      {/* <div className="absolute inset-0 bg-red-400/50">
        <div 
        className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"
        // style={{
        //     backgroundImage: "url('https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg')",
        //     backgroundSize: "cover",
        // }}
        > 
        <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" alt="Nature" className="w-full h-full object-cover" />
        </div>
      </div>
       */}
      {/* Content Container */}
      <div className="relative bg-black/50 px-5 sm:px-20 lg:px-40 py-20 h-full w-full flex flex-col gap-20 md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          {/* <h6 className="text-gray-300 font-medium mb-2">Our commitments</h6> */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Quality, Safety and Punctuality 
          </h1>
          <p className="text-gray-300 text-lg font-semibold mb-6 max-w-lg">
          Our commitments
          </p>
          {/* <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-3 uppercase text-sm tracking-wider transition-colors duration-300">
            Discover More
          </button> */}
        </div>
        
        {/* Right Content - Stats */}
        <div className="w-full md:w-1/2 ">
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="bg-[#00000086] py-5 rounded-lg">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                    <stat.icon size={32} className="text-white mx-auto" />
                    </div>
                  </div>
                  <div className="mt-3 text-white">
                    <h3 className="font-semibold text-lg text-center">{stat.title}</h3>
                    {/* <p className="text-sm text-gray-400 text-center">{stat.description}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Divider;