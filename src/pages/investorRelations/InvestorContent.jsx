import React from "react";
import { FiFileText } from "react-icons/fi";
import annualReport from "../../assets/annualreport-2024-25.pdf" // PDF icon

const investorReports = [
   {
    id: 1,
    title: "Annual Return",
    year: "2024–25",
    pdf: annualReport, // ✅ imported file
  },
];

const InvestorContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-orange-400">
          Shree Insulations Pvt. Ltd.
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          At Shree Insulations , We consider Investor Relations to be the key to
          building transparent, open and long-term relationships with our
          stakeholders.
        </p>
      </div>

      {/* Stylish Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gradient-to-r from-orange-400 to-orange-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left uppercase tracking-wider">
                Sr.No
              </th>
              <th className="py-3 px-6 text-left uppercase tracking-wider">
                Title
              </th>
              <th className="py-3 px-6 text-left uppercase tracking-wider">
                Year
              </th>
              <th className="py-3 px-6 text-center uppercase tracking-wider">
                PDF
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {investorReports.map((report, idx) => (
              <tr
                key={report.id}
                className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <td className="py-4 px-6 font-medium text-gray-800">
                  {idx + 1}
                </td>
                <td className="py-4 px-6 text-gray-700">{report.title}</td>
                <td className="py-4 px-6 text-gray-700">{report.year}</td>
                <td className="py-4 px-6 text-center">
                  <a
                    href={report.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-700 text-2xl inline-flex items-center justify-center"
                  >
                    <FiFileText />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvestorContent;
