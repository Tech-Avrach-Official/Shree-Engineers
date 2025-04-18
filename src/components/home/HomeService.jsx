import React from "react";
import { Button } from "../ui/button";
import { CircleArrowRight, Pointer } from "lucide-react";

const HomeService = () => {
  return (
    <div className="h-full w-full">
      <div className="py-20 px-5 h-full w-full md:px-20 lg:px-40">
        <div>
          <h2 className="text-xl md:text-3xl font-bold">
            WELCOME TO <span className="text-[#283B59]">SHREE ENGINEERS</span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center h-full w-full gap-5 lg:gap-28 mt-2 md:mt-10">
          <div className="w-full lg:w-1/2 border-2 border-dashed border-orange-400 p-5 rounded-2xl h-[300px] md:h-[380px]">
            <img
              className="w-full h-full rounded-md object-contain"
              src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1742204827/Image-Shree/Symbol/ilj3fja3jc1pzek3qq84.png"
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="font-bold text-xl md:text-2xl">Superior Quality</h3>
            <p className="text-sm md:text-base mt-5 text-gray-500">
              The Foundation of Shree Engineers laid in delivering time tested
              insulation solutions. We apply the superior quality insulation
              materials, ensuring optimal thermal performance and durability.
              Our team of skilled technicians adheres to strict quality control
              measures throughout every project, from meticulous planning to
              precise installation. We're committed to exceeding industry
              standards and providing our clients with insulation that truly
              performs.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CircleArrowRight
                  size={24}
                  className="sm:w-4 sm:h-4 text-yellow-500"
                />
                <h2 className="text-md text-black">
                  Superior Quality materials.
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <CircleArrowRight
                  size={24}
                  className="sm:w-4 sm:h-4 text-yellow-500"
                />
                <h2 className="text-md text-black">
                  Optimal thermal performance
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <CircleArrowRight
                  size={24}
                  className="sm:w-4 sm:h-4 text-yellow-500"
                />
                <h2 className="text-md text-black">Durability.</h2>
              </div>
              <div className="flex items-center gap-2">
                <CircleArrowRight
                  size={24}
                  className="sm:w-4 sm:h-4 text-yellow-500"
                />
                <h2 className="text-md text-black">Strict quality control.</h2>
              </div>
            </div>
            {/* <Button className="mt-5 w-32 bg-primary text-white">
              Read More
            </Button> */}
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-28 mt-10 md:mt-20">
          <div className="w-full lg:w-1/2">
            <h3 className="font-bold text-xl md:text-2xl">
              Advanced Technology
            </h3>
            <p className="text-sm md:text-base mt-5 text-gray-500">
              Innovative Insulation Solutions. Shree Engineers stays at the
              forefront of insulation technology, leveraging cutting-edge
              techniques and materials to maximize energy efficiency and
              performance. We invest in continuous training and research to
              ensure our team is equipped with the latest advancements in the
              industry. By utilizing state-of-the-art equipment and methods, we
              deliver insulation solutions that are both effective and
              sustainable.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CircleArrowRight
                  size={24}
                  className="sm:w-4 sm:h-4 text-yellow-500"
                />
                <h2 className="text-md text-black">
                  Maximizing energy efficiency.
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <CircleArrowRight
                  size={24}
                  className="sm:w-4 sm:h-4 text-yellow-500"
                />
                <h2 className="text-md text-black">
                  Continuous training and research.
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <CircleArrowRight
                  size={24}
                  className="sm:w-4 sm:h-4 text-yellow-500"
                />
                <h2 className="text-md text-black">
                  State of the art equipment.
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <CircleArrowRight
                  size={24}
                  className="sm:w-4 sm:h-4 text-yellow-500"
                />
                <h2 className="text-md text-black">Sustainable solutions.</h2>
              </div>
            </div>
            {/* <Button className="mt-5 w-32 bg-primary text-white">
              Read More
            </Button> */}
          </div>
          <div className="w-full lg:w-1/2 border-2 border-dashed border-orange-400 p-5 rounded-2xl h-[300px] md:h-[380px]">
            <img
              className="w-full h-full rounded-md object-contain"
              src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1742204828/Image-Shree/Symbol/bxhu8dhuyz5cbqnae35p.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-28 mt-10 md:mt-20">
          <div className="w-full lg:w-1/2 border-2 border-dashed border-orange-400 p-5 rounded-2xl h-[300px] md:h-[380px]">
            <img
              className="w-full h-full rounded-md object-contain"
              src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1742204827/Image-Shree/Symbol/rsless5lnmn6mwvnhddt.png"
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="font-bold text-xl md:text-2xl">On-Time</h3>
            <p className="text-sm md:text-base mt-5 text-gray-500">
              We understand time is valuable. Shree Engineers is committed to
              delivering projects on schedule. We prioritize efficient project
              management, clear communication, and meticulous planning to ensure
              deadlines are met. Our reliable team works diligently to minimize
              disruptions and complete the insulation project promptly, without
              compromising quality.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CircleArrowRight
                  size={24}
                  className="sm:w-4 sm:h-4 text-yellow-500"
                />
                <h2 className="text-md text-black">
                  Efficient project management
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <CircleArrowRight
                  size={24}
                  className="sm:w-4 sm:h-4 text-yellow-500"
                />
                <h2 className="text-md text-black">Clear communication</h2>
              </div>
              <div className="flex items-center gap-2">
                <CircleArrowRight
                  size={24}
                  className="sm:w-4 sm:h-4 text-yellow-500"
                />
                <h2 className="text-md text-black">Meticulous planning</h2>
              </div>
              <div className="flex items-center gap-2">
                <CircleArrowRight
                  size={24}
                  className="sm:w-4 sm:h-4 text-yellow-500"
                />
                <h2 className="text-md text-black">Team management.</h2>
              </div>
            </div>
            {/* <Button className="mt-5 w-32 bg-primary text-white">
              Read More
            </Button> */}
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-28 mt-10 md:mt-20">
          <div className="w-full lg:w-1/2">
            <h3 className="font-bold text-xl md:text-2xl">Excellence</h3>
            <p className="text-sm md:text-base mt-5 text-gray-500">
              Our Commitment to Perfection. At Shree Engineers, excellence is
              more than just a goal—it's our guiding principle. We strive for
              perfection in every aspect of our work, from the initial
              consultation to the final inspection. Our dedication to quality
              craftsmanship, attention to minute detail, and unwavering
              commitment to customer satisfaction sets us unique. We take pride
              in delivering insulation solutions that consistently exceed
              expectations.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CircleArrowRight
                  size={24}
                  className="sm:w-4 sm:h-4 text-yellow-500"
                />
                <h2 className="text-md text-black">Quality craftsmanship. </h2>
              </div>
              <div className="flex items-center gap-2">
                <CircleArrowRight
                  size={24}
                  className="sm:w-4 sm:h-4 text-yellow-500"
                />
                <h2 className="text-md text-black">Attention to detail.</h2>
              </div>
              <div className="flex items-center gap-2">
                <CircleArrowRight
                  size={24}
                  className="sm:w-4 sm:h-4 text-yellow-500"
                />
                <h2 className="text-md text-black">Customer satisfaction</h2>
              </div>
              <div className="flex items-center gap-2">
                <CircleArrowRight
                  size={24}
                  className="sm:w-4 sm:h-4 text-yellow-500"
                />
                <h2 className="text-md text-black">Meet expectations.</h2>
              </div>
            </div>
            {/* <Button className="mt-5 w-32 bg-primary text-white">
              Read More
            </Button> */}
          </div>
          <div className="w-full lg:w-1/2 border-2 border-dashed border-orange-400 p-5 rounded-2xl h-[300px] md:h-[380px]">
            <img
              className="w-full h-full rounded-md object-contain"
              src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1742204827/Image-Shree/Symbol/qqcjyplteq1xfksd3lj0.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
