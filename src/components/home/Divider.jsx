import React from "react";

const EnergyHeroSection = () => {
  const stats = [
    {
      percentage: 75,
      title: "Refining Capacity",
      description: "Nec maecenas neque potenti felis eget."
    },
    {
      percentage: 87,
      title: "Crude Oil Prod",
      description: "Nec maecenas neque potenti felis eget."
    },
    {
      percentage: 95,
      title: "Satisfied Clients",
      description: "Nec maecenas neque potenti felis eget."
    },
    {
      percentage: 92,
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
          <h6 className="text-gray-300 font-medium mb-2">Let's Be Great Together</h6>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Powerful solutions for a<br />sustainable future
          </h1>
          <p className="text-gray-300 mb-6 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-3 uppercase text-sm tracking-wider transition-colors duration-300">
            Discover More
          </button>
        </div>
        
        {/* Right Content - Stats */}
        <div className="w-full md:w-1/2 ">
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center">
                <div className="relative">
                  {/* Circular progress indicator */}
                  <svg className="w-16 h-16" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#333333"
                      strokeWidth="8"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#FACC15"
                      strokeWidth="8"
                      strokeDasharray={`${(Math.PI * 80) * (stat.percentage / 100)} ${Math.PI * 80}`}
                      strokeDashoffset={(Math.PI * 80) * 0.25}
                      transform="rotate(-90 50 50)"
                    />
                    {/* Percentage text */}
                    <text
                      x="50"
                      y="55"
                      fontFamily="Arial"
                      fontSize="20"
                      fontWeight="bold"
                      textAnchor="middle"
                      fill="white"
                    >
                      {stat.percentage}%
                    </text>
                  </svg>
                  <div className="ml-4 text-white">
                    <h3 className="font-medium">{stat.title}</h3>
                    <p className="text-xs text-gray-400">{stat.description}</p>
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

export default EnergyHeroSection;