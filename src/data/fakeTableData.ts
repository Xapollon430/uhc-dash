// Table data matching the screenshot layout, color groupings, and structure
export const tableData = [
  // Initial Visits Section (Yellow)
  { type: "section", label: "Initial Visits", colorGroup: "yellow" },
  {
    type: "data",
    code: "99304",
    values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    total: 0,
    coding: "0%",
    colorGroup: "yellow",
  },
  {
    type: "data",
    code: "99305",
    values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    total: 2,
    coding: "5%",
    colorGroup: "yellow",
  },
  {
    type: "data",
    code: "99306",
    values: [11, 16, 17, 9, 0, 0, 0, 0, 0, 0, 0, 0],
    total: 35,
    coding: "95%",
    colorGroup: "yellow",
  },
  {
    type: "total",
    label: "Total",
    values: [11, 16, 17, 9, 0, 0, 0, 0, 0, 0, 0, 0],
    total: 37,
    coding: "",
    colorGroup: "yellow",
  },

  // Subsequent Visits Section (Orange)
  { type: "section", label: "Subsequent Visits", colorGroup: "orange" },
  {
    type: "data",
    code: "99307",
    values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    total: 0,
    coding: "0%",
    colorGroup: "orange",
  },
  {
    type: "data",
    code: "99308",
    values: [96, 19, 47, 45, 0, 0, 0, 0, 0, 0, 0, 0],
    total: 207,
    coding: "35%",
    colorGroup: "orange",
  },
  {
    type: "data",
    code: "99309",
    values: [174, 123, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    total: 327,
    coding: "56%",
    colorGroup: "orange",
  },
  {
    type: "data",
    code: "99310",
    values: [42, 39, 2, 66, 0, 0, 0, 0, 0, 0, 0, 0],
    total: 53,
    coding: "9%",
    colorGroup: "orange",
  },
  {
    type: "total",
    label: "Total",
    values: [312, 181, 83, 111, 0, 0, 0, 0, 0, 0, 0, 0],
    total: 587,
    coding: "",
    colorGroup: "orange",
  },

  // Discharge Section (Grey)
  { type: "section", label: "Discharge", colorGroup: "grey" },
  {
    type: "data",
    code: "99315",
    values: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    total: 4,
    coding: "31%",
    colorGroup: "grey",
  },
  {
    type: "data",
    code: "99316",
    values: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    total: 9,
    coding: "69%",
    colorGroup: "grey",
  },
  {
    type: "total",
    label: "Total",
    values: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    total: 13,
    coding: "",
    colorGroup: "grey",
  },

  // Overall Totals (Blue)
  { type: "section", label: "", colorGroup: "blue" },
  {
    type: "total",
    label: "Total Visits",
    values: [332, 197, 97, 96, 122, 0, 0, 0, 0, 0, 0, 0],
    total: 797,
    coding: "",
    colorGroup: "blue",
  },

  // RVUs (Blue)
  {
    type: "data",
    label: "Work RVUs",
    values: [624.1, 525.96, 168.82, 219.76, 0, 0, 0, 0, 0, 0, 0, 0],
    total: 1538.64,
    coding: "",
    colorGroup: "blue",
  },
  {
    type: "data",
    label: "Work RVUs per patient",
    values: [1.88, 2.13, 1.76, 1.8, 0, 0, 0, 0, 0, 0, 0, 0],
    total: 1.9,
    coding: "",
    colorGroup: "blue",
  },

  // Charges (Yellow/Green)
  { type: "section", label: "", colorGroup: "yellow" },
  {
    type: "data",
    label: "Charges",
    values: [57445, 44479.5, 41179, 20670, 0, 0, 0, 0, 0, 0, 0, 0],
    total: 134700,
    coding: "",
    colorGroup: "yellow",
    isCurrency: true,
  },
  {
    type: "data",
    label: "Average charges per patient",
    values: [173.03, 181.36, 122.81, 169.43, 0, 0, 0, 0, 0, 0, 0, 0],
    total: 169.01,
    coding: "",
    colorGroup: "yellow",
    isCurrency: true,
  },

  // Payments (Green)
  { type: "section", label: "", colorGroup: "green" },
  {
    type: "data",
    label: "Payments",
    values: [38689, 19638, 16153, 15000, 0, 0, 0, 0, 0, 0, 0, 0],
    total: 85047,
    coding: "63%",
    colorGroup: "green",
    isCurrency: true,
  },
  {
    type: "data",
    label: "Average receipts per patient",
    values: [116.55, 99.5, 93.05, 133.09, 0, 0, 0, 0, 0, 0, 0, 0],
    total: 106.71,
    coding: "",
    colorGroup: "green",
    isCurrency: true,
  },

  // Adjustments (Pink)
  { type: "section", label: "", colorGroup: "pink" },
  {
    type: "data",
    label: "Adjustments",
    values: [42685, 18270, 12933, 10323, 0, 0, 0, 0, 0, 0, 0, 0],
    total: 86968,
    coding: "65%",
    colorGroup: "pink",
    isCurrency: true,
  },
] as const;

// Months for the table (January to December)
export const tableMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "Totals",
  "Coding %",
];
