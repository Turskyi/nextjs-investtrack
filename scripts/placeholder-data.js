const placeholderInvestments = [
  {
    slug: "take-two-interactive-software-inc",
    ticker: "TTWO",
    type: "Software",
    companyName: "TAKE-TWO INTERACTIVE SOFTWARE, INC",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
      **About Take-Two Interactive**
      
      Take-Two Interactive is a leading developer, publisher, and marketer of entertainment for consumers around the world. 
      Known for games like Grand Theft Auto and NBA 2K, Take-Two Interactive is an innovative player in the video game industry.
    `,
    isPurchased: false,
  },
  {
    slug: "alphabet-inc-class-c",
    ticker: "GOOG",
    type: "Technology",
    companyName: "Alphabet Inc Class C",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
      **About Alphabet (Google)**
      
      Alphabet is the parent company of Google, specializing in various internet services and products. 
      With its global reach and cutting-edge innovation, Alphabet is a tech giant driving the digital world.
    `,
    isPurchased: false,
  },
  {
    slug: "apple-inc",
    ticker: "AAPL",
    type: "Technology",
    companyName: "Apple Inc",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
      **About Apple**
      
      Apple Inc. is a leading technology company known for its iconic products like the iPhone, iPad, and MacBook. 
      With its innovative designs and strong brand, Apple continues to dominate the tech market.
    `,
    isPurchased: false,
  },
  {
    slug: "microsoft-corp",
    ticker: "MSFT",
    type: "Technology",
    companyName: "Microsoft Corp",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
      **About Microsoft**
      
      Microsoft is a global leader in software development and cloud computing. 
      The company is renowned for products like Windows, Office, and Azure, constantly pushing technological innovation.
    `,
    isPurchased: false,
  },
  {
    slug: "nvidia-corp",
    ticker: "NVDA",
    type: "Semiconductors",
    companyName: "NVIDIA Corp",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
      **About NVIDIA**
      
      NVIDIA is a pioneer in AI computing and gaming hardware. Known for its powerful GPUs, NVIDIA is transforming industries from gaming to autonomous vehicles.
    `,
    isPurchased: false,
  },

  // Boeing Co
  {
    slug: "boeing-co",
    ticker: "BA",
    type: "Aerospace",
    companyName: "Boeing Co",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
      **About Boeing**
      Boeing Co. is one of the world's largest aerospace companies, specializing in commercial airplanes, defense systems, and space exploration technologies.
    `,
    isPurchased: false,
  },

  // American Airlines Group Inc
  {
    slug: "american-airlines-group-inc",
    ticker: "AAL",
    type: "Transportation",
    companyName: "American Airlines Group Inc",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
      **About American Airlines**
      American Airlines Group Inc. is a leading global airline offering extensive domestic and international routes. It is a key player in the aviation industry, known for its customer-centric services.
    `,
    isPurchased: false,
  },

  // Exxon Mobil Corp
  {
    slug: "exxon-mobil-corp",
    ticker: "XOM",
    type: "Energy",
    companyName: "Exxon Mobil Corp",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
      **About Exxon Mobil**
      Exxon Mobil Corporation is a global energy leader, engaged in oil, gas, and chemical production. It plays a vital role in meeting the world's growing energy needs sustainably.
    `,
    isPurchased: false,
  },

  // Chevron Corp
  {
    slug: "chevron-corp",
    ticker: "CVX",
    type: "Energy",
    companyName: "Chevron Corp",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
      **About Chevron**
      Chevron Corporation is one of the world's largest integrated energy companies, focusing on oil, natural gas, and renewable energy solutions to meet global demands.
    `,
    isPurchased: false,
  },
  // Tesla Inc
  {
    slug: "tesla-inc",
    ticker: "TSLA",
    type: "Automotive",
    companyName: "Tesla Inc",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
      **About Tesla**
      Tesla Inc. is a pioneer in electric vehicles and clean energy solutions, producing innovative products like electric cars, solar panels, and battery storage systems, shaping the future of sustainable energy.
    `,
    isPurchased: false,
  },

  // Toronto-Dominion Bank
  {
    slug: "toronto-dominion-bank",
    ticker: "TD",
    type: "Finance",
    companyName: "Toronto-Dominion Bank",
    stockExchange: "TSE",
    currency: "CAD",
    quantity: 0,
    description: `
      **About Toronto-Dominion Bank**
      The Toronto-Dominion Bank (TD) is one of Canada's largest banks, providing a wide array of financial products and services to millions of customers across North America.
    `,
    isPurchased: false,
  },

  // Lockheed Martin Corp
  {
    slug: "lockheed-martin-corp",
    ticker: "LMT",
    type: "Aerospace",
    companyName: "Lockheed Martin Corp",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
      **About Lockheed Martin**
      Lockheed Martin Corporation is a global security and aerospace company specializing in the design, development, and manufacture of advanced technology systems, including defense, space, and cybersecurity solutions.
    `,
    isPurchased: false,
  },

  // General Motors Co
  {
    slug: "general-motors-co",
    ticker: "GM",
    type: "Automotive",
    companyName: "General Motors Co",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
      **About General Motors**
      General Motors Co. is a leading automotive manufacturer known for its iconic brands like Chevrolet, Buick, GMC, and Cadillac, focusing on innovative technologies like electric and autonomous vehicles.
    `,
    isPurchased: false,
  },

  // Vanguard ESG International Stock ETF
  {
    slug: "vanguard-esg-international-stock-etf",
    ticker: "VSGX",
    type: "ETF",
    companyName: "Vanguard ESG International Stock ETF",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
      **About Vanguard ESG International Stock ETF**
      The Vanguard ESG International Stock ETF provides exposure to international companies that meet environmental, social, and governance (ESG) criteria, enabling socially responsible investment.
    `,
    isPurchased: false,
  },

  // Vanguard Energy Index Fund ETF
  {
    slug: "vanguard-energy-index-fund-etf",
    ticker: "VDE",
    type: "ETF",
    companyName: "Vanguard Energy Index Fund ETF",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
      **About Vanguard Energy Index Fund ETF**
      The Vanguard Energy Index Fund ETF offers diversified exposure to companies in the energy sector, including oil, gas, and renewable energy firms.
    `,
    isPurchased: false,
  },

  // Vanguard Communication Services Index Fund ETF
  {
    slug: "vanguard-communication-services-index-fund-etf",
    ticker: "VOX",
    type: "ETF",
    companyName: "Vanguard Communication Services Index Fund ETF",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
      **About Vanguard Communication Services Index Fund ETF**
      This ETF provides access to the communication services sector, including media, entertainment, and telecom companies, offering diversified exposure to this vital industry.
    `,
    isPurchased: false,
  },

  // Vanguard Extended Market Index Fund ETF
  {
    slug: "vanguard-extended-market-index-fund-etf",
    ticker: "VXF",
    type: "ETF",
    companyName: "Vanguard Extended Market Index Fund ETF",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
      **About Vanguard Extended Market Index Fund ETF**
      The Vanguard Extended Market Index Fund ETF tracks the performance of U.S. mid-cap and small-cap stocks, offering diversified exposure beyond the S&P 500 companies.
    `,
    isPurchased: false,
  },

  // Vanguard Consumer Staples Index Fund ETF
  {
    slug: "vanguard-consumer-staples-index-fund-etf",
    ticker: "VDC",
    type: "ETF",
    companyName: "Vanguard Consumer Staples Index Fund ETF",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
      **About Vanguard Consumer Staples Index Fund ETF**
      This ETF focuses on companies in the consumer staples sector, such as food, beverage, and household goods, providing stable growth opportunities.
    `,
    isPurchased: false,
  },

  // iShares Core S&P 500 ETF
  {
    slug: "ishares-core-s-p-500-etf",
    ticker: "IVV",
    type: "ETF",
    companyName: "iShares Core S&P 500 ETF",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
      **About iShares Core S&P 500 ETF**
      The iShares Core S&P 500 ETF tracks the performance of the S&P 500 Index, offering exposure to 500 of the largest U.S. companies across diverse sectors.
    `,
    isPurchased: false,
  },
  // RTX Corp
  {
    slug: "rtx-corp",
    ticker: "RTX",
    type: "Aerospace",
    companyName: "RTX Corp",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
      **About RTX Corp**
      RTX Corp, formerly Raytheon Technologies, is a leading aerospace and defense company specializing in advanced systems for aviation, space, and military applications.
    `,
    isPurchased: false,
  },

  // L3Harris Technologies Inc
  {
    slug: "l3harris-technologies-inc",
    ticker: "LHX",
    type: "Aerospace",
    companyName: "L3Harris Technologies Inc",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
      **About L3Harris Technologies**
      L3Harris Technologies is an innovative defense and aerospace company providing advanced communication, electronic, and surveillance solutions globally.
    `,
    isPurchased: false,
  },

  // Advanced Micro Devices, Inc.
  {
    slug: "advanced-micro-devices-inc",
    ticker: "AMD",
    type: "Semiconductors",
    companyName: "Advanced Micro Devices, Inc.",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
      **About AMD**
      Advanced Micro Devices (AMD) designs high-performance computing and graphics solutions for gaming, data centers, and AI, driving innovation in semiconductor technology.
    `,
    isPurchased: false,
  },

  // Amazon.com Inc
  {
    slug: "amazon-com-inc",
    ticker: "AMZN",
    type: "Technology",
    companyName: "Amazon.com Inc",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
      **About Amazon**
      Amazon.com Inc is a global e-commerce and cloud computing leader, offering a diverse range of products and services, including AWS, Kindle, and Prime Video.
    `,
    isPurchased: false,
  },

  // Taiwan Semiconductor Mfg. Co. Ltd.
  {
    slug: "taiwan-semiconductor-mfg-co-ltd",
    ticker: "TSM",
    type: "Semiconductors",
    companyName: "Taiwan Semiconductor Mfg. Co. Ltd.",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
      **About Taiwan Semiconductor Manufacturing**
      Taiwan Semiconductor Manufacturing Co. (TSMC) is a global leader in semiconductor production, providing advanced chips for industries including computing, automotive, and AI.
    `,
    isPurchased: false,
  },

  // Texas Instruments Inc
  {
    slug: "texas-instruments-inc",
    ticker: "TXN",
    type: "Semiconductors",
    companyName: "Texas Instruments Inc",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
      **About Texas Instruments**
      Texas Instruments is a renowned producer of semiconductors and integrated circuits, catering to a variety of applications including industrial, automotive, and consumer electronics.
    `,
    isPurchased: false,
  },

  // BlackRock Inc
  {
    slug: "blackrock-inc",
    ticker: "BLK",
    type: "Finance",
    companyName: "BlackRock Inc",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
      **About BlackRock**
      BlackRock Inc. is the world's largest asset management firm, offering investment solutions and risk management services to clients globally, with expertise in ETFs and sustainable investing.
    `,
    isPurchased: false,
  },

  // Novo Nordisk A/S
  {
    slug: "novo-nordisk-a-s",
    ticker: "NVO",
    type: "Healthcare",
    companyName: "Novo Nordisk A/S",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
      **About Novo Nordisk**
      Novo Nordisk is a leading healthcare company specializing in diabetes care and other chronic diseases, driving innovation in pharmaceuticals and biotechnological solutions.
    `,
    isPurchased: false,
  },

  // Xenon Pharmaceuticals Inc
  {
    slug: "xenon-pharmaceuticals-inc",
    ticker: "XENE",
    type: "Healthcare",
    companyName: "Xenon Pharmaceuticals Inc",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
      **About Xenon Pharmaceuticals**
      Xenon Pharmaceuticals focuses on developing innovative treatments for neurological disorders, leveraging precision medicine to address unmet medical needs.
    `,
    isPurchased: false,
  },

  // Crispr Therapeutics AG
  {
    slug: "crispr-therapeutics-ag",
    ticker: "CRSP",
    type: "Biotechnology",
    companyName: "Crispr Therapeutics AG",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
      **About Crispr Therapeutics**
      Crispr Therapeutics is at the forefront of gene-editing technology, developing transformative therapies for genetic diseases and cancer using the CRISPR-Cas9 platform.
    `,
    isPurchased: false,
  },
  // Adobe Inc
  {
    slug: "adobe-inc",
    ticker: "ADBE",
    type: "Software",
    companyName: "Adobe Inc",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
        **About Adobe**
        Adobe Inc. is a global leader in digital media and marketing solutions, known for its creative software like Photoshop, Illustrator, and Premiere Pro, as well as its innovative cloud services.
      `,
    isPurchased: false,
  },

  // ASML Holding NV
  {
    slug: "asml-holding-nv",
    ticker: "ASML",
    type: "Semiconductors",
    companyName: "ASML Holding NV",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
        **About ASML**
        ASML Holding NV is a leading supplier of photolithography systems for semiconductor manufacturing, enabling advanced chip production for a range of industries.
      `,
    isPurchased: false,
  },

  // Intel Corp
  {
    slug: "intel-corp",
    ticker: "INTC",
    type: "Semiconductors",
    companyName: "Intel Corp",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
        **About Intel**
        Intel Corporation is a pioneer in semiconductor technology, producing processors and chipsets for personal computers, data centers, and emerging technologies like AI.
      `,
    isPurchased: false,
  },

  // Meta Platforms Inc
  {
    slug: "meta-platforms-inc",
    ticker: "META",
    type: "Technology",
    companyName: "Meta Platforms Inc",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
        **About Meta**
        Meta Platforms Inc., formerly Facebook, is a social media and technology leader focused on connecting people through platforms like Facebook, Instagram, WhatsApp, and innovations in AR/VR.
      `,
    isPurchased: false,
  },

  // Bank of Montreal
  {
    slug: "bank-of-montreal",
    ticker: "BMO",
    type: "Finance",
    companyName: "Bank of Montreal",
    stockExchange: "TSE",
    currency: "CAD",
    quantity: 0,
    description: `
        **About Bank of Montreal**
        The Bank of Montreal (BMO) is one of Canada's largest and oldest banks, offering financial services including personal banking, wealth management, and investment solutions.
      `,
    isPurchased: false,
  },

  // Bank of Nova Scotia
  {
    slug: "bank-of-nova-scotia",
    ticker: "BNS",
    type: "Finance",
    companyName: "Bank of Nova Scotia",
    stockExchange: "TSE",
    currency: "CAD",
    quantity: 0,
    description: `
        **About Bank of Nova Scotia**
        Commonly known as Scotiabank, the Bank of Nova Scotia is a leading financial institution in Canada, with a strong presence in international banking and wealth management.
      `,
    isPurchased: false,
  },

  // Canadian Imperial Bank of Commerce
  {
    slug: "canadian-imperial-bank-of-commerce",
    ticker: "CM",
    type: "Finance",
    companyName: "Canadian Imperial Bank of Commerce",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
        **About CIBC**
        Canadian Imperial Bank of Commerce (CIBC) offers a range of financial services including retail and commercial banking, capital markets, and wealth management.
      `,
    isPurchased: false,
  },

  // National Bank of Canada
  {
    slug: "national-bank-of-canada",
    ticker: "NA",
    type: "Finance",
    companyName: "National Bank of Canada",
    stockExchange: "TSE",
    currency: "CAD",
    quantity: 0,
    description: `
        **About National Bank of Canada**
        The National Bank of Canada is a leading financial institution, offering comprehensive banking solutions across personal, commercial, and wealth management sectors.
      `,
    isPurchased: false,
  },

  // Banc of California Inc
  {
    slug: "banc-of-california-inc",
    ticker: "BANC",
    type: "Finance",
    companyName: "Banc of California Inc",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
        **About Banc of California**
        Banc of California provides personalized banking and lending solutions, with a focus on serving businesses and individuals in Southern California.
      `,
    isPurchased: false,
  },

  // Manulife Financial Corp
  {
    slug: "manulife-financial-corp",
    ticker: "MFC",
    type: "Finance",
    companyName: "Manulife Financial Corp",
    stockExchange: "TSE",
    currency: "CAD",
    quantity: 0,
    description: `
        **About Manulife**
        Manulife Financial Corporation is a leading international provider of insurance and wealth management services, offering innovative solutions to clients worldwide.
      `,
    isPurchased: false,
  },
  // Royal Bank of Canada
  {
    slug: "royal-bank-of-canada",
    ticker: "RY",
    type: "Finance",
    companyName: "Royal Bank of Canada",
    stockExchange: "TSE",
    currency: "CAD",
    quantity: 0,
    description: `
        **About Royal Bank of Canada**
        Royal Bank of Canada (RBC) is one of Canada's largest financial institutions, offering a wide array of services including banking, investment, and insurance solutions globally.
      `,
    isPurchased: false,
  },

  // State Street Corp
  {
    slug: "state-street-corp",
    ticker: "STT",
    type: "Finance",
    companyName: "State Street Corp",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
        **About State Street**
        State Street Corporation is a leading provider of financial services to institutional investors, including investment management, research, and trading.
      `,
    isPurchased: false,
  },

  // Visa Inc
  {
    slug: "visa-inc",
    ticker: "V",
    type: "Finance",
    companyName: "Visa Inc",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
        **About Visa**
        Visa Inc. is a global payments technology company, facilitating digital payments through a network that connects consumers, merchants, and financial institutions worldwide.
      `,
    isPurchased: false,
  },

  // US Bancorp
  {
    slug: "us-bancorp",
    ticker: "USB",
    type: "Finance",
    companyName: "US Bancorp",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
        **About US Bancorp**
        US Bancorp is a leading financial services provider in the United States, offering banking, investment, and mortgage services to individuals and businesses.
      `,
    isPurchased: false,
  },

  // Air Canada
  {
    slug: "air-canada",
    ticker: "AC",
    type: "Transportation",
    companyName: "Air Canada",
    stockExchange: "TSE",
    currency: "CAD",
    quantity: 0,
    description: `
        **About Air Canada**
        Air Canada is Canada's largest airline, providing scheduled passenger services and cargo transportation to destinations worldwide.
      `,
    isPurchased: false,
  },

  // American Airlines Group Inc
  {
    slug: "american-airlines-group-inc",
    ticker: "AAL",
    type: "Transportation",
    companyName: "American Airlines Group Inc",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
        **About American Airlines**
        American Airlines Group Inc. operates one of the largest global airline networks, providing passenger and cargo services across continents.
      `,
    isPurchased: false,
  },

  // Boeing Co
  {
    slug: "boeing-co",
    ticker: "BA",
    type: "Aerospace",
    companyName: "Boeing Co",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
        **About Boeing**
        Boeing Company is a leading aerospace company, manufacturing commercial jetliners, defense, space, and security systems worldwide.
      `,
    isPurchased: false,
  },

  // Bombardier, Inc. Class B
  {
    slug: "bombardier-inc-class-b",
    ticker: "BBD.B",
    type: "Aerospace",
    companyName: "Bombardier, Inc. Class B",
    stockExchange: "TSE",
    currency: "CAD",
    quantity: 0,
    description: `
        **About Bombardier**
        Bombardier Inc. is a Canadian multinational that specializes in the design, manufacturing, and servicing of business jets.
      `,
    isPurchased: false,
  },

  // General Dynamics Corp
  {
    slug: "general-dynamics-corp",
    ticker: "GD",
    type: "Defense",
    companyName: "General Dynamics Corp",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
        **About General Dynamics**
        General Dynamics Corporation is a global aerospace and defense company, offering a wide range of products and services for military and commercial use.
      `,
    isPurchased: false,
  },

  // BAE Systems PLC - ADR
  {
    slug: "bae-systems-plc-adr",
    ticker: "BAESY",
    type: "Defense",
    companyName: "BAE Systems PLC - ADR",
    stockExchange: "OTCMKTS",
    currency: "USD",
    quantity: 0,
    description: `
        **About BAE Systems**
        BAE Systems is a British multinational defense, security, and aerospace company, providing advanced technology-led defense solutions worldwide.
      `,
    isPurchased: false,
  },

  // Kratos Defense & Security Solutions
  {
    slug: "kratos-defense-security-solutions",
    ticker: "KTOS",
    type: "Defense",
    companyName: "Kratos Defense & Security Solutions",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
        **About Kratos Defense & Security**
        Kratos Defense & Security Solutions focuses on developing and deploying transformative, affordable technology for national security applications, including unmanned systems and satellite communications.
      `,
    isPurchased: false,
  },

  // Northrop Grumman Corp
  {
    slug: "northrop-grumman-corp",
    ticker: "NOC",
    type: "Defense",
    companyName: "Northrop Grumman Corp",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
        **About Northrop Grumman**
        Northrop Grumman Corporation is a global leader in aerospace and defense technologies, providing innovative systems for air, space, and cyber domains.
      `,
    isPurchased: false,
  },

  // AeroVironment, Inc.
  {
    slug: "aerovironment-inc",
    ticker: "AVAV",
    type: "Aerospace",
    companyName: "AeroVironment, Inc.",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
        **About AeroVironment**
        AeroVironment, Inc. specializes in unmanned aerial systems and tactical missile systems, providing advanced technologies for defense and commercial applications.
      `,
    isPurchased: false,
  },

  // Ammo Inc
  {
    slug: "ammo-inc",
    ticker: "POWW",
    type: "Defense",
    companyName: "Ammo Inc",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
        **About Ammo Inc**
        Ammo Inc. is a premier ammunition manufacturer focused on producing high-quality and innovative ammunition products for law enforcement, military, and commercial use.
      `,
    isPurchased: false,
  },

  // Teledyne Technologies Inc
  {
    slug: "teledyne-technologies-inc",
    ticker: "TDY",
    type: "Technology",
    companyName: "Teledyne Technologies Inc",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
        **About Teledyne Technologies**
        Teledyne Technologies Incorporated provides enabling technologies for industrial growth markets, specializing in digital imaging, instrumentation, and aerospace.
      `,
    isPurchased: false,
  },

  // Elbit Systems Ltd
  {
    slug: "elbit-systems-ltd",
    ticker: "ESLT",
    type: "Defense",
    companyName: "Elbit Systems Ltd",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
        **About Elbit Systems**
        Elbit Systems Ltd. is an international high-technology company engaged in the defense, homeland security, and commercial programs, delivering a portfolio of innovative solutions worldwide.
      `,
    isPurchased: false,
  },

  // AbbVie Inc
  {
    slug: "abbvie-inc",
    ticker: "ABBV",
    type: "Healthcare",
    companyName: "AbbVie Inc",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
        **About AbbVie**
        AbbVie is a biopharmaceutical company that focuses on discovering, developing, and delivering innovative medicines in key therapeutic areas such as immunology, oncology, and neuroscience.
      `,
    isPurchased: false,
  },

  // AstraZeneca plc
  {
    slug: "astrazeneca-plc",
    ticker: "AZN",
    type: "Healthcare",
    companyName: "AstraZeneca plc",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
        **About AstraZeneca**
        AstraZeneca is a global pharmaceutical company focused on the discovery, development, and commercialization of prescription medicines in areas such as oncology and cardiovascular.
      `,
    isPurchased: false,
  },

  // Baxter International Inc
  {
    slug: "baxter-international-inc",
    ticker: "BAX",
    type: "Healthcare",
    companyName: "Baxter International Inc",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
        **About Baxter**
        Baxter International Inc. is a healthcare company specializing in medical devices, pharmaceuticals, and biotechnology to improve patient care worldwide.
      `,
    isPurchased: false,
  },

  // BioNTech SE ADR
  {
    slug: "biontech-se-adr",
    ticker: "BNTX",
    type: "Biotechnology",
    companyName: "BioNTech SE ADR",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
        **About BioNTech**
        BioNTech SE is a biotechnology company pioneering immunotherapies for cancer, infectious diseases, and other severe conditions, including the development of mRNA-based vaccines.
      `,
    isPurchased: false,
  },
  // Boston Scientific Corporation
  {
    slug: "boston-scientific-corporation",
    ticker: "BSX",
    type: "Healthcare",
    companyName: "Boston Scientific Corporation",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
      **About Boston Scientific**
      Boston Scientific Corporation is a global leader in medical technology, developing innovative solutions that improve the health of patients worldwide in areas such as cardiology and endoscopy.
    `,
    isPurchased: false,
  },

  // Bristol-Myers Squibb Co
  {
    slug: "bristol-myers-squibb-co",
    ticker: "BMY",
    type: "Pharmaceuticals",
    companyName: "Bristol-Myers Squibb Co",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
      **About Bristol-Myers Squibb**
      Bristol-Myers Squibb is a global biopharmaceutical company that discovers, develops, and delivers innovative medicines to help patients prevail over serious diseases.
    `,
    isPurchased: false,
  },

  // Eli Lilly and Co
  {
    slug: "eli-lilly-and-co",
    ticker: "LLY",
    type: "Pharmaceuticals",
    companyName: "Eli Lilly and Co",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
      **About Eli Lilly**
      Eli Lilly and Company focuses on discovering and delivering innovative medicines to address significant unmet medical needs, particularly in oncology and diabetes.
    `,
    isPurchased: false,
  },

  // Intuitive Surgical, Inc.
  {
    slug: "intuitive-surgical-inc",
    ticker: "ISRG",
    type: "Medical Devices",
    companyName: "Intuitive Surgical, Inc.",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
      **About Intuitive Surgical**
      Intuitive Surgical is a pioneer in robotic-assisted surgery, offering minimally invasive surgical solutions through its da Vinci Surgical System.
    `,
    isPurchased: false,
  },

  // Johnson & Johnson
  {
    slug: "johnson-johnson",
    ticker: "JNJ",
    type: "Healthcare",
    companyName: "Johnson & Johnson",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
      **About Johnson & Johnson**
      Johnson & Johnson is a leading healthcare company, providing a wide range of products across pharmaceuticals, medical devices, and consumer health sectors.
    `,
    isPurchased: false,
  },

  // Medtronic PLC
  {
    slug: "medtronic-plc",
    ticker: "MDT",
    type: "Medical Devices",
    companyName: "Medtronic PLC",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
      **About Medtronic**
      Medtronic PLC is one of the world's largest medical device companies, known for its innovations in therapies for cardiovascular, diabetes, and neurological conditions.
    `,
    isPurchased: false,
  },

  // Merck & Co Inc
  {
    slug: "merck-co-inc",
    ticker: "MRK",
    type: "Pharmaceuticals",
    companyName: "Merck & Co Inc",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
      **About Merck**
      Merck & Co., Inc. is a global healthcare leader delivering innovative health solutions through its prescription medicines, vaccines, and animal health products.
    `,
    isPurchased: false,
  },

  // Moderna Inc
  {
    slug: "moderna-inc",
    ticker: "MRNA",
    type: "Biotechnology",
    companyName: "Moderna Inc",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
      **About Moderna**
      Moderna is a biotechnology company pioneering messenger RNA (mRNA) therapeutics and vaccines to transform the way diseases are treated and prevented.
    `,
    isPurchased: false,
  },

  // Novartis AG
  {
    slug: "novartis-ag",
    ticker: "NVS",
    type: "Pharmaceuticals",
    companyName: "Novartis AG",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
      **About Novartis**
      Novartis AG is a global healthcare company providing innovative medicines to improve health outcomes and deliver solutions in oncology, immunology, and more.
    `,
    isPurchased: false,
  },

  // Novartis AG
  {
    slug: "novartis-ag",
    ticker: "NVS",
    type: "Pharmaceuticals",
    companyName: "Novartis AG",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
        **About Novartis**
        Novartis AG is a global healthcare company that develops innovative medicines to address serious health challenges in oncology, cardiology, and ophthalmology.
      `,
    isPurchased: false,
  },

  // Pfizer Inc
  {
    slug: "pfizer-inc",
    ticker: "PFE",
    type: "Pharmaceuticals",
    companyName: "Pfizer Inc",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
        **About Pfizer**
        Pfizer Inc is one of the world's largest pharmaceutical companies, committed to discovering, developing, and delivering healthcare products that improve lives.
      `,
    isPurchased: false,
  },

  // Sanofi SA
  {
    slug: "sanofi-sa",
    ticker: "SNY",
    type: "Pharmaceuticals",
    companyName: "Sanofi SA",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
        **About Sanofi**
        Sanofi SA is a global healthcare company, focusing on innovative medicines and vaccines to improve health outcomes for patients around the world.
      `,
    isPurchased: false,
  },

  // Vericel Corp
  {
    slug: "vericel-corp",
    ticker: "VCEL",
    type: "Biotechnology",
    companyName: "Vericel Corp",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
        **About Vericel**
        Vericel Corp develops advanced cell therapies and regenerative medicine products for patients with severe diseases, focusing on novel treatments for burn wounds and knee cartilage defects.
      `,
    isPurchased: false,
  },

  // Veracyte Inc
  {
    slug: "veracyte-inc",
    ticker: "VCYT",
    type: "Biotechnology",
    companyName: "Veracyte Inc",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
        **About Veracyte**
        Veracyte Inc is a genomic diagnostics company that provides molecular insights to help clinicians make more accurate diagnoses, focusing on oncology, lung disease, and thyroid disorders.
      `,
    isPurchased: false,
  },

  // Twist Bioscience Corp
  {
    slug: "twist-bioscience-corp",
    ticker: "TWST",
    type: "Biotechnology",
    companyName: "Twist Bioscience Corp",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
        **About Twist Bioscience**
        Twist Bioscience Corporation is a leader in synthetic biology, offering innovative solutions in DNA manufacturing for use in healthcare, agriculture, and other industries.
      `,
    isPurchased: false,
  },

  // Stryker Corp
  {
    slug: "stryker-corp",
    ticker: "SYK",
    type: "Medical Devices",
    companyName: "Stryker Corp",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
        **About Stryker**
        Stryker Corporation is a leading medical technology company that develops and manufactures products in the fields of orthopedics, medical devices, and surgical technologies.
      `,
    isPurchased: false,
  },

  // Abbott Laboratories
  {
    slug: "abbott-laboratories",
    ticker: "ABT",
    type: "Healthcare",
    companyName: "Abbott Laboratories",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
        **About Abbott Laboratories**
        Abbott Laboratories is a healthcare company that develops a broad range of diagnostic, medical, nutritional, and pharmaceutical products to help people live healthier lives.
      `,
    isPurchased: false,
  },

  // Herbalife Ltd
  {
    slug: "herbalife-ltd",
    ticker: "HLF",
    type: "Nutrition",
    companyName: "Herbalife Ltd",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
        **About Herbalife**
        Herbalife Ltd is a global nutrition company providing health and wellness products focused on weight management, nutrition, and personal care.
      `,
    isPurchased: false,
  },

  // Arko Corp.
  {
    slug: "arko-corp",
    ticker: "ARKO",
    type: "Energy",
    companyName: "Arko Corp.",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
        **About Arko Corp.**
        Arko Corp. operates as a convenience store and fuel distributor, providing fuel and retail services across a large network of locations.
      `,
    isPurchased: false,
  },

  // Bellring Brands Inc
  {
    slug: "bellring-brands-inc",
    ticker: "BRBR",
    type: "Food & Beverage",
    companyName: "Bellring Brands Inc",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
        **About Bellring Brands**
        Bellring Brands Inc is a leading manufacturer of protein-based nutritional products, known for its premier brand, Premier Protein.
      `,
    isPurchased: false,
  },

  // USANA Health Sciences, Inc.
  {
    slug: "usana-health-sciences-inc",
    ticker: "USNA",
    type: "Health & Wellness",
    companyName: "USANA Health Sciences, Inc.",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
        **About USANA Health Sciences**
        USANA Health Sciences, Inc. is a global leader in health and wellness, providing high-quality vitamins, supplements, and skincare products.
      `,
    isPurchased: false,
  },

  // Nature's Sunshine Products Inc
  {
    slug: "natures-sunshine-products-inc",
    ticker: "NATR",
    type: "Health & Wellness",
    companyName: "Nature's Sunshine Products Inc",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
        **About Nature's Sunshine**
        Nature's Sunshine Products, Inc. manufactures and markets dietary supplements and wellness products, focusing on natural health solutions.
      `,
    isPurchased: false,
  },

  // Medifast Inc
  {
    slug: "medifast-inc",
    ticker: "MED",
    type: "Health & Wellness",
    companyName: "Medifast Inc",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
        **About Medifast**
        Medifast Inc provides weight management solutions, offering a range of products and services to support healthy living and weight loss.
      `,
    isPurchased: false,
  },

  // LifeVantage Corp
  {
    slug: "lifevantage-corp",
    ticker: "LFVN",
    type: "Health & Wellness",
    companyName: "LifeVantage Corp",
    stockExchange: "NASDAQ",
    currency: "USD",
    quantity: 0,
    description: `
        **About LifeVantage**
        LifeVantage Corp specializes in anti-aging products and supplements, using science to improve health and vitality at the cellular level.
      `,
    isPurchased: false,
  },

  // GFL Environmental Inc
  {
    slug: "gfl-environmental-inc",
    ticker: "GFL",
    type: "Environmental Services",
    companyName: "GFL Environmental Inc",
    stockExchange: "TSX",
    currency: "CAD",
    quantity: 0,
    description: `
        **About GFL Environmental**
        GFL Environmental Inc provides integrated environmental services, including solid waste, recycling, and liquid waste management across North America.
      `,
    isPurchased: false,
  },
  // VanEck Gold Miners ETF
  {
    slug: "vaneck-gold-miners-etf",
    ticker: "GDX",
    type: "ETFs",
    companyName: "VanEck Gold Miners ETF",
    stockExchange: "NYSE",
    currency: "USD",
    quantity: 0,
    description: `
        **About VanEck Gold Miners ETF**
        The VanEck Gold Miners ETF invests in companies that are engaged in gold mining, providing exposure to the gold mining sector.
      `,
    isPurchased: false,
  },

  // Devolver Digital Inc
  {
    slug: "devolver-digital-inc",
    ticker: "DEVO",
    type: "Entertainment",
    companyName: "Devolver Digital Inc",
    stockExchange: "LON",
    currency: "GBP",
    quantity: 0,
    description: `
        **About Devolver Digital**
        Devolver Digital is a video game publisher known for supporting indie developers and releasing critically acclaimed games across various platforms.
      `,
    isPurchased: false,
  },

  // Volkswagen Group
  {
    slug: "volkswagen-group",
    ticker: "VOW3",
    type: "Automotive",
    companyName: "Volkswagen Group",
    stockExchange: "FRA",
    currency: "EUR",
    quantity: 0,
    description: `
        **About Volkswagen Group**
        Volkswagen Group is a global automotive manufacturer, known for iconic brands like Volkswagen, Audi, Porsche, and Lamborghini, leading the electric vehicle revolution.
      `,
    isPurchased: false,
  },

  // Deutsche Boerse AG
  {
    slug: "deutsche-boerse-ag",
    ticker: "DB1",
    type: "Financial Services",
    companyName: "Deutsche Boerse AG",
    stockExchange: "ETR",
    currency: "EUR",
    quantity: 0,
    description: `
        **About Deutsche Boerse AG**
        Deutsche Boerse AG operates global financial markets, offering exchange services for securities, derivatives, and commodities, as well as data and technology solutions.
      `,
    isPurchased: false,
  },

  // Thales SA
  {
    slug: "thales-sa",
    ticker: "HO",
    type: "Aerospace & Defense",
    companyName: "Thales SA",
    stockExchange: "EPA",
    currency: "EUR",
    quantity: 0,
    description: `
        **About Thales SA**
        Thales SA is a multinational company specializing in aerospace, defense, security, and transportation solutions, delivering innovative technologies in various sectors.
      `,
    isPurchased: false,
  },

  // Rolls-Royce Holdings PLC
  {
    slug: "rolls-royce-holdings-plc",
    ticker: "RR",
    type: "Aerospace & Defense",
    companyName: "Rolls-Royce Holdings PLC",
    stockExchange: "LON",
    currency: "GBX",
    quantity: 0,
    description: `
        **About Rolls-Royce Holdings**
        Rolls-Royce Holdings is a leading manufacturer of aircraft engines, providing propulsion systems and services for civil and military aviation worldwide.
      `,
    isPurchased: false,
  },

  // QinetiQ Group plc
  {
    slug: "qinetiq-group-plc",
    ticker: "QQ",
    type: "Aerospace & Defense",
    companyName: "QinetiQ Group plc",
    stockExchange: "LON",
    currency: "GBX",
    quantity: 0,
    description: `
        **About QinetiQ Group**
        QinetiQ Group plc is a defense and aerospace company specializing in technology innovation and solutions for defense, security, and commercial markets.
      `,
    isPurchased: false,
  },

  // Leonardo SpA
  {
    slug: "leonardo-spa",
    ticker: "LDO",
    type: "Aerospace & Defense",
    companyName: "Leonardo SpA",
    stockExchange: "BIT",
    currency: "EUR",
    quantity: 0,
    description: `
        **About Leonardo SpA**
        Leonardo SpA is a global player in aerospace, defense, and security industries, known for its advanced systems and technologies in civil and military applications.
      `,
    isPurchased: false,
  },

  // Saab AB
  {
    slug: "saab-ab",
    ticker: "SAAB-B",
    type: "Aerospace & Defense",
    companyName: "Saab AB",
    stockExchange: "STO",
    currency: "SEK",
    quantity: 0,
    description: `
        **About Saab AB**
        Saab AB is a Swedish aerospace and defense company, providing advanced technologies and systems for defense, security, and aerospace industries worldwide.
      `,
    isPurchased: false,
  },

  // Siemens Healthineers AG
  {
    slug: "siemens-healthineers-ag",
    ticker: "SHL",
    type: "Healthcare",
    companyName: "Siemens Healthineers AG",
    stockExchange: "ETR",
    currency: "EUR",
    quantity: 0,
    description: `
        **About Siemens Healthineers**
        Siemens Healthineers is a global healthcare company, specializing in medical imaging, diagnostics, and laboratory solutions, improving patient outcomes worldwide.
      `,
    isPurchased: false,
  },

  // HOYA Corporation
  {
    slug: "hoya-corporation",
    ticker: "HOCPY",
    type: "Healthcare",
    companyName: "HOYA Corporation",
    stockExchange: "TYO",
    currency: "JPY",
    quantity: 0,
    description: `
        **About HOYA Corporation**
        HOYA Corporation is a leading global healthcare and electronics company, focusing on optical lenses, medical devices, and innovative healthcare products.
      `,
    isPurchased: false,
  },

  // SAP SE
  {
    slug: "sap-se",
    ticker: "SAP",
    type: "Technology",
    companyName: "SAP SE",
    stockExchange: "ETR",
    currency: "EUR",
    quantity: 0,
    description: `
        **About SAP SE**
        SAP SE is a global leader in enterprise software and cloud computing solutions, providing businesses with powerful tools for operations and business management.
      `,
    isPurchased: false,
  },

  // Airbus SE
  {
    slug: "airbus-se",
    ticker: "AIR",
    type: "Aerospace & Defense",
    companyName: "Airbus SE",
    stockExchange: "EPA",
    currency: "EUR",
    quantity: 0,
    description: `
        **About Airbus SE**
        Airbus SE is a leading aerospace manufacturer, producing commercial, military, and space-related aircraft, while also pioneering innovations in aviation technologies.
      `,
    isPurchased: false,
  },

  // Antofagasta plc
  {
    slug: "antofagasta-plc",
    ticker: "ANTO",
    type: "Mining",
    companyName: "Antofagasta plc",
    stockExchange: "LON",
    currency: "GBX",
    quantity: 0,
    description: `
        **About Antofagasta**
        Antofagasta plc is a major copper mining company based in Chile, focusing on the exploration, extraction, and processing of copper and other metals.
      `,
    isPurchased: false,
  },
  // Grupo Mexico S.A.B. de C.V.
  {
    slug: "grupo-mexico-sa-b-de-cv",
    ticker: "GMEXICOB",
    type: "Mining",
    companyName: "Grupo Mexico S.A.B. de C.V.",
    stockExchange: "BMV",
    currency: "MXN",
    quantity: 0,
    description: `
      **About Grupo Mexico**
      Grupo Mexico is a major mining corporation, primarily engaged in the extraction of copper, with operations in several countries and a significant presence in the global copper market.
    `,
    isPurchased: false,
  },

  // Siemens AG
  {
    slug: "siemens-ag",
    ticker: "SIE",
    type: "Technology",
    companyName: "Siemens AG",
    stockExchange: "ETR",
    currency: "EUR",
    quantity: 0,
    description: `
      **About Siemens AG**
      Siemens AG is a global technology powerhouse, specializing in digital industries, smart infrastructure, mobility, healthcare, and energy efficiency solutions.
    `,
    isPurchased: false,
  },

  // Merck KGaA
  {
    slug: "merck-kgaa",
    ticker: "MRK",
    type: "Healthcare",
    companyName: "Merck KGaA",
    stockExchange: "ETR",
    currency: "EUR",
    quantity: 0,
    description: `
      **About Merck KGaA**
      Merck KGaA is a global science and technology company, with a focus on healthcare, life sciences, and electronics, advancing technologies in the pharmaceutical and biotechnology fields.
    `,
    isPurchased: false,
  },

  // Peugeot Invest SA
  {
    slug: "peugeot-invest-sa",
    ticker: "PEUG",
    type: "Automotive",
    companyName: "Peugeot Invest SA",
    stockExchange: "EPA",
    currency: "EUR",
    quantity: 0,
    description: `
      **About Peugeot Invest**
      Peugeot Invest SA is an investment holding company that primarily invests in automotive businesses, with a focus on the Peugeot and Citroën brands and their associated ventures.
    `,
    isPurchased: false,
  },

  // Heidelberg Materials AG
  {
    slug: "heidelberg-materials-ag",
    ticker: "HEI",
    type: "Materials",
    companyName: "Heidelberg Materials AG",
    stockExchange: "ETR",
    currency: "EUR",
    quantity: 0,
    description: `
      **About Heidelberg Materials**
      Heidelberg Materials AG is a global leader in the construction materials industry, providing high-quality cement, aggregates, and ready-mixed concrete.
    `,
    isPurchased: false,
  },

  // Tencent Holdings Ltd
  {
    slug: "tencent-holdings-ltd",
    ticker: "700",
    type: "Technology",
    companyName: "Tencent Holdings Ltd",
    stockExchange: "HKG",
    currency: "HKD",
    quantity: 0,
    description: `
      **About Tencent Holdings**
      Tencent Holdings is a Chinese multinational conglomerate specializing in various internet-related services, entertainment, gaming, and social media platforms.
    `,
    isPurchased: false,
  },

  // BASF SE
  {
    slug: "basf-se",
    ticker: "BAS",
    type: "Chemicals",
    companyName: "BASF SE",
    stockExchange: "ETR",
    currency: "EUR",
    quantity: 0,
    description: `
      **About BASF SE**
      BASF SE is the world’s largest chemical producer, offering a broad range of products, from chemicals and plastics to agricultural solutions and performance materials.
    `,
    isPurchased: false,
  },

  // Solvay SA
  {
    slug: "solvay-sa",
    ticker: "SOLB",
    type: "Chemicals",
    companyName: "Solvay SA",
    stockExchange: "EBR",
    currency: "EUR",
    quantity: 0,
    description: `
      **About Solvay SA**
      Solvay SA is a Belgian chemical and materials company, providing solutions for industries such as chemicals, advanced materials, and energy, with a focus on sustainability.
    `,
    isPurchased: false,
  },

  // Evonik Industries AG
  {
    slug: "evonik-industries-ag",
    ticker: "EVK",
    type: "Chemicals",
    companyName: "Evonik Industries AG",
    stockExchange: "ETR",
    currency: "EUR",
    quantity: 0,
    description: `
      **About Evonik Industries**
      Evonik Industries is a German specialty chemicals company, offering innovative solutions in areas such as chemicals, materials, and life sciences for various industries.
    `,
    isPurchased: false,
  },

  // Koninklijke Philips NV
  {
    slug: "koninklijke-philips-nv",
    ticker: "PHIA",
    type: "Healthcare",
    companyName: "Koninklijke Philips NV",
    stockExchange: "AMS",
    currency: "EUR",
    quantity: 0,
    description: `
      **About Koninklijke Philips**
      Koninklijke Philips is a global leader in health technology, focusing on diagnostic imaging, healthcare informatics, patient monitoring, and personal health solutions.
    `,
    isPurchased: false,
  },

  // Basler AG
  {
    slug: "basler-ag",
    ticker: "BSL",
    type: "Technology",
    companyName: "Basler AG",
    stockExchange: "ETR",
    currency: "EUR",
    quantity: 0,
    description: `
      **About Basler AG**
      Basler AG is a German company specializing in the development and manufacturing of digital cameras, offering solutions for industrial and medical imaging applications.
    `,
    isPurchased: false,
  },

  // Beiersdorf AG
  {
    slug: "beiersdorf-ag",
    ticker: "BEI",
    type: "Consumer Goods",
    companyName: "Beiersdorf AG",
    stockExchange: "ETR",
    currency: "EUR",
    quantity: 0,
    description: `
      **About Beiersdorf AG**
      Beiersdorf AG is a German multinational consumer goods company, best known for skincare and personal care brands like Nivea, Eucerin, and La Prairie.
    `,
    isPurchased: false,
  },

  // Panasonic Holdings Corp
  {
    slug: "panasonic-holdings-corp",
    ticker: "6752",
    type: "Electronics",
    companyName: "Panasonic Holdings Corp",
    stockExchange: "TYO",
    currency: "JPY",
    quantity: 0,
    description: `
      **About Panasonic Holdings**
      Panasonic Holdings is a global leader in electronics, providing innovative solutions in the areas of automotive, energy, household appliances, and industrial technology.
    `,
    isPurchased: false,
  },

  // Sony Group Corp
  {
    slug: "sony-group-corp",
    ticker: "6758",
    type: "Technology",
    companyName: "Sony Group Corp",
    stockExchange: "TYO",
    currency: "JPY",
    quantity: 0,
    description: `
      **About Sony Group**
      Sony Group Corporation is a multinational conglomerate, focusing on consumer electronics, gaming, entertainment, and financial services.
    `,
    isPurchased: false,
  },

  // Omron Corp
  {
    slug: "omron-corp",
    ticker: "6645",
    type: "Electronics",
    companyName: "Omron Corp",
    stockExchange: "TYO",
    currency: "JPY",
    quantity: 0,
    description: `
      **About Omron Corp**
      Omron Corporation is a Japanese company specializing in automation, robotics, healthcare, and electrical components, providing innovative technologies across multiple sectors.
    `,
    isPurchased: false,
  },

  // Furuno
  {
    slug: "furuno",
    ticker: "6814",
    type: "Electronics",
    companyName: "Furuno",
    stockExchange: "TYO",
    currency: "JPY",
    quantity: 0,
    description: `
      **About Furuno**
      Furuno is a leading manufacturer of marine electronics, providing navigation, sonar, and communication systems for the maritime industry.
    `,
    isPurchased: false,
  },

  // Rakuten Group Inc
  {
    slug: "rakuten-group-inc",
    ticker: "4755",
    type: "Technology",
    companyName: "Rakuten Group Inc",
    stockExchange: "TYO",
    currency: "JPY",
    quantity: 0,
    description: `
      **About Rakuten Group**
      Rakuten Group is a Japanese multinational conglomerate, operating in e-commerce, digital content, fintech, and telecommunications, offering a variety of online services.
    `,
    isPurchased: false,
  },
];

module.exports = {
  placeholderInvestments,
};
