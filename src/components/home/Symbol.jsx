import React from "react";

const Symbol = () => {
  const symbols = [
    {
      src: "https://res.cloudinary.com/dhf8eyjee/image/upload/v1742204827/Image-Shree/Symbol/ilj3fja3jc1pzek3qq84.png",
      alt: "Superior Quality",
      label: "Superior Quality",
    },
    {
      src: "https://res.cloudinary.com/dhf8eyjee/image/upload/v1742204828/Image-Shree/Symbol/bxhu8dhuyz5cbqnae35p.png",
      alt: "Advanced Technology",
      label: "Advanced Technology",
    },
    {
      src: "https://res.cloudinary.com/dhf8eyjee/image/upload/v1742204827/Image-Shree/Symbol/rsless5lnmn6mwvnhddt.png",
      alt: "On-Time",
      label: "On-Time",
    },
    {
      src: "https://res.cloudinary.com/dhf8eyjee/image/upload/v1742204827/Image-Shree/Symbol/qqcjyplteq1xfksd3lj0.png",
      alt: "Excellence",
      label: "Excellence",
    },
  ];

  return (
    <div className="px-5 md:px-20 lg:px-40 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10">
      {symbols.map((symbol, index) => (
        <div key={index}>
          <img src={symbol.src} className="border-2 border-dashed border-orange-400 p-5 rounded-2xl" alt={symbol.alt} />
          <p className="text-center text-base md:text-xl font-semibold text-orange-400 mt-2 md:mt-5">{symbol.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Symbol;