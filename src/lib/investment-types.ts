export const investmentTypes = [
  "Aircraft industry",
  "Army",
  "Banks sector",
  "Beverages",
  "Buildings",
  "Cars",
  "Chemical industry",
  "ETF's",
  "Games",
  "Mining",
  "Need to buy",
  "Pharmaceutical",
  "Software",
  "Solar Panel",
  "Technology",
  "Water",
];

// Define a color palette for consistency
const colorPalette = [
  "#1F77B4", // Steel Blue
  "#FF7F0E", // Dark Orange
  "#2CA02C", // Forest Green
  "BCBD22", // Olive Green
  "#880808", // Red
  "#808080", // Gray
  "#000000", // Black
  "#7F7F7F", // Middle Gray
  "#FFC0CB", // Pink
  "#17BECF", // Bright Cyan
  "#1F78B4", // Dodger Blue
  "#FF9896", // Light Coral
  "#C5B0D5", // Light Purple
  "#E7969C", // Pale Red
  "#BF40BF", // Purple
  "#AEC7E8", // Light Blue
];

// Generate the color mapping
export const investmentTypeColors = investmentTypes.reduce(
  (acc, type, index) => {
    acc[type] = colorPalette[index % colorPalette.length];
    return acc;
  },
  {} as Record<string, string>,
);

export const stockExchangeTypes = [
  "NASDAQ",
  "TSE",
  "NYSE",
  "OTCMKTS",
  "CVE",
  "TSX",
  "LON",
  "FRA",
  "ETR",
  "BIT",
  "EPA",
  "STO",
  "TYO",
  "GMEXICOB",
  "HKG",
  "EBR",
  "AMS",
];
