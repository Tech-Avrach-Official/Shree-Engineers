import React from "react";

const TravelGrid = () => {
  return (
    <div className="w-full h-screen px-40 py-20">
      <div className="w-full h-full gap-5 flex justify-center items-center">
        <div className="w-[40%] h-full relative rounded-lg overflow-hidden">
          <div className="group h-full md:h-full overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
              alt="Kelingking Beach"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h3 className="text-xl font-bold">Kelingking Beach</h3>
              <p className="text-sm opacity-80">Nusa Penida, Bali</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="bg-white/90 rounded-full p-2 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[60%] h-full flex flex-col gap-5">
          <div className="w-full h-1/2 grid grid-cols-2 gap-5">
            <div className="h-full w-full">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <div className="group h-full w-full overflow-hidden">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
                    alt="Kelingking Beach"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <h3 className="text-xl font-bold">Kelingking Beach</h3>
                    <p className="text-sm opacity-80">Nusa Penida, Bali</p>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <button className="bg-white/90 rounded-full p-2 text-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-full">
              <div className="relative h-full w-full rounded-lg overflow-hidden">
                <div className="group h-full  overflow-hidden">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
                    alt="Kelingking Beach"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <h3 className="text-xl font-bold">Kelingking Beach</h3>
                    <p className="text-sm opacity-80">Nusa Penida, Bali</p>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <button className="bg-white/90 rounded-full p-2 text-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <div className="group h-full md:h-full overflow-hidden">
                <img
                  src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
                  alt="Kelingking Beach"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <h3 className="text-xl font-bold">Kelingking Beach</h3>
                  <p className="text-sm opacity-80">Nusa Penida, Bali</p>
                </div>
                <div className="absolute bottom-4 right-4">
                  <button className="bg-white/90 rounded-full p-2 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-12 gap-4">
       
        <div className="col-span-12 md:col-span-6 md:row-span-2 relative rounded-lg overflow-hidden">
          <div className="group h-full md:h-full overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" 
              alt="Kelingking Beach"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h3 className="text-xl font-bold">Kelingking Beach</h3>
              <p className="text-sm opacity-80">Nusa Penida, Bali</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="bg-white/90 rounded-full p-2 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        
        <div className="col-span-6 md:col-span-3 relative rounded-lg overflow-hidden">
          <div className="group h-full overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
              alt="Grand Palace"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h3 className="text-xl font-bold">Grand Palace</h3>
              <p className="text-sm opacity-80">Bangkok, Thailand</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="bg-white/90 rounded-full p-2 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="col-span-6 md:col-span-3 relative rounded-lg overflow-hidden">
          <div className="group h-full overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
              alt="Cappadocia"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h3 className="text-xl font-bold">Cappadocia</h3>
              <p className="text-sm opacity-80">Turkey</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="bg-white/90 rounded-full p-2 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        
        <div className="col-span-12 md:col-span-6 relative rounded-lg overflow-hidden">
          <div className="group h-48 md:h-52 overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
              alt="Padar Island"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h3 className="text-xl font-bold">Padar Island</h3>
              <p className="text-sm opacity-80">East Nusa Tenggara</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="bg-white/90 rounded-full p-2 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TravelGrid;
