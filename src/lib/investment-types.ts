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
  "#1F77B4",
  "#FF7F0E",
  "#2CA02C",
  "#D62728",
  "#9467BD",
  "#8C564B",
  "#E377C2",
  "#7F7F7F",
  "#BCBD22",
  "#17BECF",
  "#1F78B4",
  "#FF9896",
  "#C5B0D5",
  "#E7969C",
  "#7F7F7F",
  "#AEC7E8",
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
