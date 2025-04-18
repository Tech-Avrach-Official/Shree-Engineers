import React from "react";

const GridSection = () => {
  return (
    <div className="w-full h-full md:h-screen px-5 md:px-10 lg:px-40 py-20">
      <div className="w-full h-full gap-5 flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-[40%] h-full relative rounded-lg overflow-hidden">
          <div className="group h-full md:h-full overflow-hidden">
            <img
              src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1742558807/Image-Shree/Home-page/efzphjhwfeu9ambjz798.jpg"
              alt="Kelingking Beach"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h3 className="text-xl font-bold">Kelingking Beach</h3>
              <p className="text-sm opacity-80">Nusa Penida, Bali</p>
            </div> */}
            <div className="absolute bottom-4 right-4">
              <button className="bg-[#283B59] rounded-full p-2 text-white">
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
        <div className="w-full md:w-[60%] h-full flex flex-col gap-5">
          <div className="w-full overflow-hidden h-full md:h-1/2 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="h-full overflow-hidden w-full">
              <div className="relative h-full w-full rounded-lg overflow-hidden">
                <div className="group h-full w-full overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559346/Image-Shree/Home-page/qyqwtsa6p6nqcsktlrif.jpg"
                    alt="Kelingking Beach"
                    id="top-image"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <h3 className="text-xl font-bold">Kelingking Beach</h3>
                    <p className="text-sm opacity-80">Nusa Penida, Bali</p>
                  </div> */}
                  <div className="absolute bottom-4 right-4">
                    <button className="bg-[#283B59] rounded-full p-2 text-white">
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
                <div className="group h-full w-full overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559347/Image-Shree/Home-page/payefxd3mwoqszdgujga.jpg"
                    alt="Kelingking Beach"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <h3 className="text-xl font-bold">Kelingking Beach</h3>
                    <p className="text-sm opacity-80">Nusa Penida, Bali</p>
                  </div> */}
                  <div className="absolute bottom-4 right-4">
                    <button className="bg-[#283B59] rounded-full p-2 text-white">
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
          <div className="w-full h-full md:h-1/2">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <div className="group h-full w-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1742558784/Image-Shree/Home-page/omzdwky7ffuht3ml1wir.jpg"
                  alt="Kelingking Beach"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <h3 className="text-xl font-bold">Kelingking Beach</h3>
                  <p className="text-sm opacity-80">Nusa Penida, Bali</p>
                </div> */}
                <div className="absolute bottom-4 right-4">
                  <button className="bg-[#283B59] rounded-full p-2 text-white">
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
    </div>
  );
};

export default GridSection;
