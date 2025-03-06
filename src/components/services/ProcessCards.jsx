// import plan from "../assets/plane.svg";
import girl from "../../assets/girl.jpeg";

const workingSteps = [
  {
    id: 1,
    title: "Choose Your Plan",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imgSrc: girl,
  },
  {
    id: 2,
    title: "Make Appointment",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imgSrc: girl,
  },
  {
    id: 3,
    title: "Pay Your Plan",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imgSrc: girl,
  },
  {
    id: 4,
    title: "Get Amazing Plan",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imgSrc: girl,
  },
];

export default function ProcessCards() {
  return (
    <div className="bg-white py-10 md:py-20 px-5 lg:px-40">
      <div className="flex flex-col items-center justify-center">
      <h5 className="text-yellow-600 text-center text-sm md:text-lg">How we Works</h5>
      <h1 className="text-black text-center md:mt-3 text-2xl md:text-5xl font-bold">
        Our Working Process
      </h1>
      <p className="text-gray-600 mt-2 md:mt-5 text-sm md:text-base text-center max-w-2xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic magni
        illum molestias vel dignissi laboriosam, minima quas perferendis
        corrupti sapiente neque!
      </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-4 grid-cols-1">
        {workingSteps.map((step) => (
          <div
            key={step.id}
            className="relative pt-7"
          >
           <div className="border-2  border-yellow-400 px-5 py-8 space-y-2 md:space-y-5">
           <div>
              <img src={step.imgSrc} className="w-20 h-20 mx-auto" alt={step.title} />
            </div>
            <h2 className="text-yellow-400 text-center font-serif font-semibold text-2xl">
              {step.title}
            </h2>
            <p className="text-gray-600 text-sm md:text-lg line-clamp-2 text-center ">
              {step.description}
            </p>
           </div>
           <div className="absolute top-0 left-5 h-14 w-14 bg-yellow-400 flex items-center justify-center">
            <h2 className="text-2xl text-white font-bold">0{step.id}</h2>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
}
