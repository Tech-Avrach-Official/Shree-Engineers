import React from "react";

const content = [
  {
    title: "Superior Quality",
    description:
      "At Shree Engineers, we believe in delivering insulation solutions that stand the test of time. That's why we install the highest-grade insulation materials, ensuring optimal thermal performance and long-lasting durability. Our team of skilled technicians adheres to strict quality control measures throughout every project, from meticulous planning to precise installation. We're committed to exceeding industry standards and providing our clients with insulation that truly performs.",
    points: [
      "High-grade materials",
      "Optimal thermal performance",
      "Durable",
      "Strict quality control",
    ],
  },
  {
    title: "Advanced Technology",
    description:
      "Shree Engineers stays at the forefront of insulation technology, leveraging cutting-edge techniques and materials to maximize energy efficiency and performance. We invest in continuous training and research to ensure our team is equipped with the latest advancements in the industry. By utilizing state-of-the-art equipment and methods, we deliver insulation solutions that are both effective and sustainable.",
    points: [
      "Maximizing energy efficiency",
      "Continuous training and research",
      "State-of-the-art equipment",
      "Sustainable solutions",
    ],
  },
  {
    title: "On-Time",
    description:
      "We understand that time is valuable. Shree Engineers is committed to delivering projects on schedule, every time. We prioritize efficient project management, clear communication, and meticulous planning to ensure deadlines are met. Our reliable team works diligently to minimize disruptions and complete your insulation project promptly, without compromising quality.",
    points: [
      "Efficient project management",
      "Clear communication",
      "Meticulous planning",
      "Team management",
    ],
  },
  {
    title: "Excellence",
    description:
      "At Shree Engineers, excellence is more than just a goal—it's our guiding principle. We strive for perfection in every aspect of our work, from the initial consultation to the final inspection. Our dedication to quality craftsmanship, attention to detail, and unwavering commitment to customer satisfaction sets us apart. We take pride in delivering insulation solutions that consistently exceed expectations.",
    points: [
      "Quality craftsmanship",
      "Attention to detail",
      "Customer satisfaction",
      "Meet expectations",
    ],
  },
];

const HomeContent = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {content.map((item, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <ul className="list-disc pl-5 text-gray-600">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
