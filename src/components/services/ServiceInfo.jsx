import React from "react";
import { Button } from "../ui/button";

const ServiceInfo = () => {
  return (
    <div>
      <div className="py-20 px-5 md:px-20 lg:px-40">
        <div>
          <h2 className="text-xl md:text-3xl font-bold">Our Values</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-28 mt-2 md:mt-10">
          <div className="w-full lg:w-1/2 h-[300px] md:h-[380px]">
            <img
              className="w-full h-full rounded-md object-cover"
              src="https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735630404/x_bytenoon_assets/aboutUs/tq9icg0l2fplvc8ghytf.jpg"
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="font-bold text-xl md:text-2xl">About Shree-Engineers</h3>
            <p className="text-sm md:text-base mt-5 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas voluptates odio. Sequi ipsa quisquam sit. Asperiores eum laboriosam iusto ipsam corrupti laborum, natus porro odio sint dicta quaerat, magnam fugit necessitatibus. Maiores, ut inventore? Temporibus inventore odit ducimus magni praesentium maxime voluptatibus eum, aliquid quaerat, beatae neque tempore molestiae est minus similique voluptates non! Amet saepe odit quibusdam architecto fugiat voluptate non. Dolorem veniam molestias ipsum ea commodi deleniti, quas est non, ut harum
            </p>
            <Button className="mt-5 w-32 bg-primary text-white">
              Read More
            </Button>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-28 mt-10 md:mt-20">
          <div className="w-full lg:w-1/2">
            <h3 className="font-bold text-xl md:text-2xl">
              History of Shree-Engineers
            </h3>
            <p className="text-sm md:text-base mt-5 text-gray-500">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid expedita dolorem doloremque vero amet itaque optio! Natus dolorum eveniet sed, error sequi voluptatum nihil. Officiis quos maiores ipsa suscipit facere ex quasi autem magni veritatis placeat eveniet praesentium neque, dolorem natus qui necessitatibus minima deleniti ipsam ad pariatur culpa error voluptate? Ducimus ipsa laudantium vero quaerat error illum numquam labore necessitatibus fugiat ratione? Doloremque perspiciatis nobis, totam eligendi harum modi!
            </p>
            <Button className="mt-5 w-32 bg-primary text-white">
              Read More
            </Button>
          </div>
          <div className="w-full lg:w-1/2 h-[300px] md:h-[380px]">
            <img
              className="w-full h-full rounded-md object-cover"
              src="https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735630404/x_bytenoon_assets/aboutUs/anovhyl4syrstkj80jva.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-28 mt-10 md:mt-20">
          <div className="w-full lg:w-1/2 h-[300px] md:h-[380px]">
            <img
              className="w-full h-full rounded-md object-cover"
              src="https://res.cloudinary.com/dinknhjnp/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735642366/bytenoon/n72he8uwv2elrkvjynhj.avif"
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="font-bold text-xl md:text-2xl">Our Mission</h3>
            <p className="text-sm md:text-base mt-5 text-gray-500">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam tempora animi excepturi saepe quidem voluptatum repudiandae, sunt commodi explicabo eaque iste quam maiores officia illum obcaecati odio eveniet optio unde reprehenderit. Rem placeat aliquam neque, aperiam saepe vero architecto libero id porro veritatis reprehenderit laborum consequatur iure ipsum dicta? Culpa, harum, a id voluptate hic atque impedit at omnis cum molestiae praesentium animi nemo. Et quas magnam suscipit explicabo minima?
            </p>
            <Button className="mt-5 w-32 bg-primary text-white">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
