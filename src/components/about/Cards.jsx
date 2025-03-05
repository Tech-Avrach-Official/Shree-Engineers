import React from "react";
import { IdCard } from "lucide-react";

const cardData = [
  {
    title: "Our Team",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, minus dolore! Minima nulla quia autem sapiente. Veritatis iure vero quos ducimus mollitia quia laudantium alias cum accusamus voluptates quis est numquam nihil harum modi quod beatae nam.",
    icon: <IdCard size="34" className="text-black mx-auto" />,
  },
  {
    title: "Our Vision",
    description:
      "We strive to deliver the best solutions by leveraging innovation, teamwork, and creativity to achieve remarkable outcomes in our projects.",
    icon: <IdCard size="34" className="text-black mx-auto" />,
  },
  {
    title: "Our Mission",
    description:
      "Our mission is to provide high-quality services that empower businesses to grow in the digital world, ensuring reliability and excellence.",
    icon: <IdCard size="34" className="text-black mx-auto" />,
  },
  {
    title: "Our Services",
    description:
      "We offer a wide range of digital solutions, including web development, mobile applications, and cloud-based integrations tailored to your needs.",
    icon: <IdCard size="34" className="text-black mx-auto" />,
  },
  {
    title: "Our Values",
    description:
      "Integrity, innovation, and customer satisfaction drive us to build meaningful relationships with our clients and deliver outstanding results.",
    icon: <IdCard size="34" className="text-black mx-auto" />,
  },
  {
    title: "Why Choose Us",
    description:
      "We bring expertise, dedication, and a client-first approach to ensure the success of your business through cutting-edge technology solutions.",
    icon: <IdCard size="34" className="text-black mx-auto" />,
  },
];

const Cards = () => {
  return (
    <div className="py-8 sm:py-12 lg:py-20 px-4 sm:px-8 lg:px-40">
      <h1 className="text-3xl font-bold text-center mb-10">Why Choose Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cardData.map((card, index) => (
          <div key={index} className="border border-yellow-500 bg-white hover:scale-105 transition duration-300 p-5 rounded-xl">
              {card.icon}
            {/* <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            </div> */}
            <h1 className="text-xl font-bold text-center">
              <span className="text-yellow-500 font-bold">Our</span> {card.title}
            </h1>
            <p className="text-justify text-sm mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
