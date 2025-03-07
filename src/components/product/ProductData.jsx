// Dynamic product data structure
export const productsData = [
    {
      id: 1,
      title: "BIO SOLUBLE BLANKET",
      image: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
      description: [
        "<strong>ShreeCera-:</strong> Bio soluble fiber blanket is highly acid resistant alkaline earth silicate (AES). ShreeCera Bio Soluble Fiber is vindicated from the carcinogen classification in the European Union under the terms of European Directive 67/548/EEC and the German Technical Rules for Hazardous Substances (TRGS 905).",
        "ShreeCera Bio Soluble Fiber has been developed to high temperature characteristics required to act as an alternative to RCF, depends on equipment and operating conditions. ShreeCera Bio soluble fiber blanket reveal exceptional insulating properties at high temperatures."
      ],
      table : (
        <table>
          <thead>
            <tr>
              <th>Grade</th>
              <th>Colour</th>
              <th>Density ( Kg/m3 )</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1100°C</td>
              <td>White</td>
              <td>160</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>192</td>
            </tr>
          </tbody>
        </table>
      ),
      applications: [
        "Fire protection",
        "Process heater lining",
        "Boiler and turbine insulation linings",
        "Fuel cell insulation",
        "Chimney insulation",
        "Storage heater tank insulation",
        "Aluminium transfer conveyor",
        "Heat shielding for automotive parts",
        "Furnace and kiln sealing, packing and back-up insulation"
      ],
      features: [
        "Smoke free Inorganic",
        "High temperature durability",
        "Excellent thermal insulation",
        "High temperature stability",
        "Resist to thermal shock",
        "Light weight and low heat storage",
        "Chemical stability",
        "Low thermal conductivity",
        "Good sound absorption",
        "Good confrontation to tearing"
      ]
    },
    {
      id: 2,
      title: "BIO SOLUBLE MODULE",
      image: "/images/products/product2.jpg",
      description: [
        "<strong>ShreeCera-:</strong> Bio soluble fiber modules are made from folded Bio soluble fiber blankets. They're designed for easy installation in furnace linings and high-temperature industrial applications.",
        "These modules provide excellent thermal insulation and can withstand temperatures up to 1100°C depending on the specific grade used."
      ],
      specifications: [
        {
          title: "PHYSICAL PROPERTIES",
          type: "table",
          data: [
            { property: "Grade", values: ["1100°C", "", ""] },
            { property: "Colour", values: ["White", "", ""] },
            { property: "Density ( Kg/m3 )", values: ["160", "192", "240"] }
          ]
        },
        {
          title: "DIMENSIONS",
          type: "table",
          data: [
            { property: "Standard Sizes", values: ["300 x 300mm", "300 x 600mm", ""] },
            { property: "Thickness", values: ["100mm", "150mm", "200mm"] },
            { property: "Compression", values: ["2:1", "3:1", ""] }
          ]
        }
      ],
      applications: [
        "Furnace linings",
        "Kiln insulation",
        "High-temperature industrial equipment",
        "Reformer linings",
        "Thermal processing equipment"
      ],
      features: [
        "Easy installation",
        "Excellent thermal insulation",
        "Low thermal mass",
        "Fast heat-up and cool-down",
        "Resistant to thermal shock",
        "Reduced energy consumption",
        "Safer handling compared to RCF alternatives"
      ]
    }
  ];