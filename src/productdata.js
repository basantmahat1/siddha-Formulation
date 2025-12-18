export const productData = [
  // --- ID 1: Xtreme Tablet --- (Existing data)
  {
    id: 1,
    image: "/assets/img/xtreme.jpg",
    title: "Xtreme Tablet",
    price: 18.99,
    oldPrice: 24.99,
    bundleTag: "30 Ct",
    rating: 4,
    reviewCount: 20,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Herbal Tablet",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-XT-030",
    },
    features: [
      "Non-hormonal and safe sex stimulant for men.",
      "Increases low sperm count, boosts libido, promotes performance.",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Non-hormonal and safe sex stimulant for men",
      Description:
        "It improves sperm count, hormonal level, corrects morphology of sperms, improves motility of sperms, prevents oxidative stress and therefore improves male fertility.",
      "How It Works": [
        "Exhibits spermatogenic activity and increases serum hormone levels.",
        "Improves sperm motility and total sperm count in infertile males.",
        "Enhances semen quality by combating oxidative stress.Improves blood circulation to genital organs.",
      ],
      Indication: [
        "Oligospermia",
        "Male infertility",
        "Loss of Libido",
        "Spermatorrhoea",
        "Premature Ejaculation",
        "Erectile Dysfunction",
      ],
      Dosage: "1 cap twice a day",
      Presentation: "1×10×10",
    },
  },
  {
    id: 2,
    image: "/assets/img/balamrit.png",
    title: "Bal Amrit Syrup",
    price: 14.5,
    oldPrice: null,
    bundleTag: "100ml Syrup",
    rating: 5,
    reviewCount: 15,
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Ayurvedic Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-BA-200",
    },
    features: [
      "Nontoxic herbal formulation for indigestion.",
      "Relief from abdominal cramp.",
    ],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Immunity Booster",
      Description:
        "Bal Amrit is an immunity booster for children that supports digestion and overall health. It enhances the body's resistance against common infections and contributes to better growth and vitality.",
      "How It Works": [
        "Boosts immune system function",
        "Improves appetite and digestion",
        "Strengthens overall physical development",
        "Prevents frequent illness in children",
      ],
      Indication: [
        "Low immunity",
        "Poor appetite",
        "Frequent cold and cough",
        "Delayed physical growth",
      ],
      Dosage:
        "1-2 tsp twice daily with lukewarm water or as directed by the physician.",
      Presentation: "200 ml bottle",
    },
  },

  // --- ID 3: Amherb --- (Updated to match text)
  {
    id: 3,
    image: "/assets/img/amherb.jpg",
    title: "Amherb",
    price: 16.0,
    oldPrice: null,
    bundleTag: "Multiple sizes",
    rating: 4,
    reviewCount: 12,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Ayurvedic Syrup/Tablet",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-AH-MULTI",
    },
    features: [
      "Anti Diarrhoeal & Amoebic Dysentery",
      "Perfect solution for Diarrhea & Dysentery with enzyme",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Anti Diarrhoeal & Amoebic Dysentery",
      Description: "Perfect solution for Diarrhea & Dysentery with enzyme.",
      "How It Works": [
        "Kutaj – Amoebicider, Hemorrhoids, Antispasmodic.",
        "Bel(Bela) – Anti - inflammatory.",
        "Dhataki – Improves bulk of faeces.Satpuspa – Digestive.",
      ],
      Indication: [
        "Acute & chronic diarrhea",
        "Amoebic dysentery, Chronic colitis",
        "Indigestion & loss of appetite",
        "Irritable bowel syndrome(IBS)",
      ],
      Dosage: "2 teaspoonful twice a day or as directed by the physician.",
      Presentation: "60ml, 100ml, 200ml, Tablet",
    },
  },

  // --- ID 4: Topzyme --- (Updated to match text)
  {
    id: 4,
    image: "/assets/img/topzyme.jpg",
    title: "Topzyme",
    price: 11.0,
    oldPrice: 14.0,
    bundleTag: "Multiple sizes",
    rating: 5,
    reviewCount: 30,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Digestive Enzymes",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-TZ-MULTI",
    },
    features: [
      "Digestive enzymes",
      "A safe & effective treatment to radically improve and repair the digestive system",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Digestive enzymes",
      Description:
        "A safe & effective treatment to radically improve and repair the digestive system with carminative properties.",
      "How It Works": [
        "Satpuspa: Helps relieve hiccups, digestive, and uterine pain.",
        "Ajwain: Acts as an antihelminthic.",
        "Shunthi: Stimulates appetite and prevents vomiting(antiemetic).",
        "Pudina: Promotes digestion and soothes the gut.",
      ],
      Indication: [
        "Chronic Constipation",
        "Dyspepsia, Anorexia",
        "Gastro colitis",
        "Colicky pains & Flatulence",
        "Anti - spasmodic properties",
        "Abdominal discomfort",
      ],
      Dosage: "2 teaspoonful twice a day or as directed by the physician.",
      Presentation: "60ml, 100ml, 200ml, 1×10×10 capsules",
    },
  },
  {
    id: 5,
    image: "/assets/img/raktamrit.jpg",
    title: "Raktamrit",
    price: 17.5,
    oldPrice: null,
    bundleTag: "450ml Syrup",
    rating: 4,
    reviewCount: 25,
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Ayurvedic Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-RA-200",
    },
    features: ["Blood purifier, antibacterial, antifungal, anti-allergic."],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category":
        "Blood purifier, antibacterial, antifungal, anti-allergic",
      Description:
        "Raktamrit is a natural blood purifier syrup for healthy & glowing skin.",
      "How It Works": [
        "Manjistha, Sariva, Neem and other herbs exhibit antibacterial, antifungal, anti-allergic, and anti-inflammatory properties. They help purify blood and relieve skin problems.",
      ],
      Indication: [
        "Skin diseases like acne vulgaris (pimples)",
        "Skin rashes",
        "Urticaria",
        "Blemishes",
        "Improper skin complexion",
        "Dark spots",
        "Hyperpigmentation",
      ],
      Dosage: "2 teaspoonfuls twice a day or as directed by the physician.",
      Presentation: "100 ml, 200 ml, 450 ml",
    },
  },
  // --- ID 6: Pylonil --- (Updated to match text)
  {
    id: 6,
    image: "/assets/img/pylonil.jpg",
    title: "Pylonii",
    price: 19.0,
    oldPrice: 21.0,
    bundleTag: "Multiple sizes",
    rating: 3,
    reviewCount: 18,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Ayurvedic Syrup/Tablet",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-PY-MULTI",
    },
    features: [
      "Anti-inflammatory and antimicrobial properties",
      "Recommended formula for Acute & chronic Piles (External & Internal)",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Anti-inflammatory and antimicrobial properties",
      Description:
        "Recommended formula for Acute & chronic Piles (External & Internal).",
      "How It Works": [
        "Neem: Anti Inflammatory. ",
        "Kutaj: Relieves itching / Toning of anus.",
        "Mahanembha (Bakain): Analgesic / Anti Inflammatory.",
        "Kachnar: Anti Inflammatory / Wound Healing.",
      ],
      Indication: [
        "Rapid relief & controls bleeding",
        "Helps in checking secondary infections",
        "Offers comfortable excretion",
        "Arrests hemorrhage & Anal fissures",
        "Lumps start shrinking & vanish completely",
      ],
      Dosage: "2 teaspoonful twice a day or as directed by the physician.",
      Presentation: "200ml, 450ml, 1x30x10 tablets",
    },
  },
  // --- ID 7: Sidda Race Oil --- (Updated to match text)
  {
    id: 7,
    image: "/assets/img/sidda_race_oil.jpg",
    title: "Siddha Race Oil",
    price: 25.0,
    oldPrice: null,
    bundleTag: "Multiple sizes",
    rating: 5,
    reviewCount: 40,
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Anti-inflammatory herbal oil",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-SRO-MULTI",
    },
    features: [
      "Anti-inflammatory herbal oil",
      "Reduces pain, swelling, and stiffness in joints and muscles",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Anti-inflammatory herbal oil",
      Description:
        "Siddha Race Oil is a 100% natural formulation with potent anti-inflammatory and analgesic properties. It helps reduce pain, swelling, and stiffness in joints and muscles, enhancing flexibility and mobility.",
      "How It Works": [
        "Erandmool: Acts as a natural pain reliever and anti-inflammatory agent.",
        "Rasna: Provides relief in osteoarthritis and muscle stiffness.",
        "Kapoor: Promotes local blood flow and soothes pain.",
        "Nilgiri Oil: Eases joint discomfort and relaxes sore muscles.",
      ],
      Indication: [
        "Rheumatoid arthritis",
        "Osteoarthritis",
        "Sciatica",
        "Spondylitis",
        "Muscular pain",
        "Backache",
        "Joint stiffness",
      ],
      Dosage:
        "Apply sufficient quantity over affected area and massage gently for topical application. Use twice a day or as directed by physician.",
      Presentation: "60ml, 100ml, 200ml",
    },
  },

  // --- ID 8: Prasuta Sajjavani --- (Updated to match text)
  {
    id: 8,
    image: "/assets/img/prasuta_sajjavani.jpg",
    title: "Prasuta Saijavani",
    price: 21.0,
    oldPrice: 25.0,
    bundleTag: "Multiple sizes",
    rating: 4,
    reviewCount: 22,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Ayurvedic Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-PS-MULTI",
    },
    features: [
      "Anti-inflammatory, Postpartum recovery, Wound healing",
      "A desired hematinic supplement for overall support during pregnancy and lactation",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category":
        "Anti-inflammatory, Postpartum recovery, Wound healing",
      Description:
        "A desired hematinic supplement for overall support during pregnancy and lactation.",
      "How It Works": [
        "Pasanabheda: Anti-inflammatory, postpartum recovery, wound healing.",
        "Dashmool: Anti - inflammatory and pain relief, reduces fluid retention.",
        "Ashwagandha: Boosts fertility and reduces inflammation.",
        "Shatavari: Immunomodulatory support.",
        "Dhataki: Fertility enhancer and uterine sedative.",
      ],
      Indication: [
        "Supports sufficient lactation",
        "Corrects analgesic",
        "anti - inflammatory & diuretic conditions",
        "Treats pre & post - delivery anemia and helps normalize body and uterus size",
        "Helps restore a taut and slim figure",
      ],
      Dosage:
        "2 teaspoonfuls twice daily after meals or as directed by the physician.",
      Presentation: "Available in 200 ml and 450 ml bottles",
    },
  },
  // --- ID 9: Birechani --- (Updated to match text)
  {
    id: 9,
    image: "/assets/img/birechani.jpg",
    title: "Birechani Churna",
    price: 13.0,
    oldPrice: null,
    bundleTag: "100 gm Churna",
    rating: 3,
    reviewCount: 10,
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Classical Ayurvedic Medicine",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-BR-100",
    },
    features: [
      "An Ayurvedic formulation effective in treating chronic constipation and digestive discomfort by promoting natural bowel movements.",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Patent",
      Description:
        "An Ayurvedic formulation effective in treating chronic constipation and digestive discomfort by promoting natural bowel movements.",
      "How It Works": [
        "Cassia angustifolia: Acts as a gentle laxative to relieve constipation.",
        "Apium leptophyllum: Provides antispasmodic effect to ease abdominal discomfort.",
        "Operculina turpethum: A purgative herb that supports detoxification and gut cleansing.",
      ],
      Indication: [
        "Chronic constipation",
        "Flatulence",
        "Digestive issues",
        "Gastritis",
      ],
      Dosage:
        "1-2 teaspoonfuls with lukewarm water at bedtime or as directed by the physician.",
      Presentation: "100 gm",
    },
  },

  // --- ID 10: Arjuna --- (Updated to match text)
  {
    id: 10,
    image: "/assets/img/arjuna.jpg",
    title: "Arjuna Capsule",
    price: 15.5,
    oldPrice: 19.0,
    bundleTag: "30 Capsules",
    rating: 5,
    reviewCount: 35,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Herbal Capsule",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-AJ-030",
    },
    features: [
      "Cardioprotective properties",
      "Supports healthy heart function",
      "Helps manage blood pressure naturally",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Patent",
      Description:
        "Arjuna Capsule is an Ayurvedic formulation made from Terminalia arjuna, known for its cardioprotective properties. It supports healthy heart function and helps manage blood pressure naturally.",
      "How It Works": [
        "Terminalia Arjuna: Strengthens cardiac muscles and improves the efficiency of heart pumping.",
        "Supports healthy blood circulation and normal blood pressure levels.",
        "Acts as an antioxidant and reduces oxidative stress on the heart.",
      ],
      Indication: [
        "Cardiac weakness",
        "Mild hypertension",
        "Palpitation",
        "Chest discomfort due to anxiety or stress",
      ],
      Dosage:
        "1-2 capsules twice daily with water or as directed by the physician.",
      Presentation: "30 Capsules",
    },
  },
  // --- ID 11: Gripe Water --- (Updated to match text)
  {
    id: 11,
    image: "/assets/img/gripe_water.jpg",
    title: "Gripe Water",
    price: 9.0,
    oldPrice: null,
    bundleTag: "130 MI",
    rating: 4,
    reviewCount: 28,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Pediatric Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-GW-130",
    },
    features: [
      "Anti-spasmodic, carminative, digestive and stomachic",
      "Gives instant relief from common GI problems like colic, flatulence and indigestion",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category":
        "Anti-spasmodic, carminative, digestive and stomachic",
      Description:
        "Gives instant relief from common GI problems like colic, flatulence and indigestion.",
      "How It Works": [
        "It contains jeera, ajwain, saunf, soya and pudina sat, which prevent the nausea and discomfort caused by stomach gas and other colic symptoms.",
        "It also helps to minimize problems associated with teeth eruption.",
      ],
      Indication: [
        "Indigestion",
        "Anorexia",
        "Colic pain & flatulence",
        "Digestive disorders associated with teeth eruption",
      ],
      Dosage:
        "1-6 month: 1 tsf thrice a day. 6month – 1year: 2 tsf thrice a day. 1–2 year: 2–3 tsf thrice a day or as directed by the physician.",
      Presentation: "130 MI",
    },
  },
  // --- ID 12: Kafher PD --- (Updated to match text)
  {
    id: 12,
    image: "/assets/img/kafher_pd.jpg",
    title: "Kafher PD Syp",
    price: 12.0,
    oldPrice: null,
    bundleTag: "100 ml",
    rating: 3,
    reviewCount: 14,
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Pediatric Cough Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-KPD-100",
    },
    features: [
      "Cough Expectorant with Bronchodilator For Child",
      "Naturally cares for pediatric cough with a honey-based formula",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Cough Expectorant with Bronchodilator For Child",
      Description:
        "Naturally cares for pediatric cough with a honey-based formula.",
      "How It Works": [
        "Vanafsha: RTI, dry and sore throat, tuberculosis cough.",
        "Mulethi: Common cough relief.",
        "Kantakari: Supports respiratory disorders.",
        "Talispatra: Anti - tussive property.",
        "Vasaka: Bronchial antiseptic & bronchodilator.",
        "Pippali: Helpful in respiratory infections.",
      ],
      Indication: [
        "Common cold & cough",
        "Acute & chronic bronchitis",
        "Bronchial asthma",
        "Nasal congestion",
        "Whooping cough",
      ],
      Dosage:
        "Children: 1 teaspoonful 2–3 times a day or as directed by the physician.",
      Presentation: "100 ml",
    },
  },
  // --- ID 13: Siddhamol Malt --- (Updated to match text)
  {
    id: 13,
    image: "/assets/img/siddhamol_malt.jpg",
    title: "Siddha Mol",
    price: 28.0,
    oldPrice: 35.0,
    bundleTag: "450 gm",
    rating: 5,
    reviewCount: 50,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "General Tonic Malt",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-SM-450",
    },
    features: [
      "Adaptogenic, Antioxidant, Immunity booster, and also a hematinic",
      "An ayurvedic honey-based tonic & appetizer",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category":
        "Adaptogenic, Antioxidant, Immunity booster, and also a hematinic",
      Description: "An ayurvedic honey-based tonic & appetizer.",
      "How It Works": [
        "Bala – Asthma / TB.",
        "Sanayapatri: Laxative.",
        "Kapikachhu: Anti - parkinsonism / Anti - inflammatory.",
        "Barahikanda: Antioxidant / Anti - diabetic / Anti - cancer.",
        "Bidari Kanda: Restorative tonic / Anti - ageing / Spermatogenic / Immune booster / Infertility disorder.",
      ],
      Indication: [
        "Best appetizer",
        "General debility",
        "Anaemic patients",
        "Malnutrition",
        "Protects the body from oxidative stress",
        "Post - operative care",
        "During pregnancy & lactation",
      ],
      Dosage: "2 TSF thrice a day after meals.",
      Presentation: "450 gm",
    },
  },
  // --- ID 14: Apticome --- (Updated to match text)
  {
    id: 14,
    image: "/assets/img/apticome.jpg",
    title: "Apticome Syrup",
    price: 14.0,
    oldPrice: null,
    bundleTag: "200 ml",
    rating: 4,
    reviewCount: 19,
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Appetite Stimulant Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-AP-200",
    },
    features: [
      "Natural appetite stimulant",
      "Naturally treats your loss of appetite",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Natural appetite stimulant",
      Description: "Naturally treats your loss of appetite.",
      "How It Works":
        "Chitrak: Reduces hepatic disorders. Souf: Carminative and digestive. Pittapapda: Analgesic and hepatoprotective. Bhumi Amla: Supports liver function and treats hepatic issues.",
      Indication:
        "Improves appetite and digestion, Helps in jaundice, anorexia, and impaired bile secretion, Relieves constipation, hyperacidity, and excessive thirst, Prevents colic pain",
      Dosage:
        "1–2 teaspoonfuls, 2–3 times daily or as directed by the physician.",
      Presentation: "200 ml",
    },
  },
  // --- ID 15: Leucoherb --- (Updated to match text)
  {
    id: 15,
    image: "/assets/img/leucoherb.jpg",
    title: "Leucoherb Syrup",
    price: 18.0,
    oldPrice: null,
    bundleTag: "Multiple sizes",
    rating: 4,
    reviewCount: 16,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Women's Health Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-LH-MULTI",
    },
    features: [
      "Uterine Sedative, Anti-inflammatory & Menstrual Regulator",
      "A safe, non-hormonal uterine tonic that addresses women's health needs from menarche to menopause",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category":
        "Uterine Sedative, Anti-inflammatory & Menstrual Regulator",
      Description:
        "A safe, non-hormonal uterine tonic that addresses women's health needs from menarche to menopause.",
      "How It Works": [
        "Ashok: Reduces freckles,anti-inflammatory.",
        "Dhataki: Fertility agent, uterine sedative.",
        "Lodh: Anti - inflammatory, stops bleeding, normalizes hormones.",
        "Lajjawati: Effective for urogenital disorders.",
      ],
      Indication: [
        "Regularizes menstrual cycle",
        "Relieves painful periods",
        "Manages pre & post - menopausal syndrome",
        "Treats dysfunctional uterine bleeding",
        "Effective for leucorrhea",
        "Useful in metrorrhagia, amenorrhea, dysmenorrhea",
        "Supports in habitual abortion cases",
        "Relieves symptoms like stress, anxiety & general debility",
      ],
      Dosage: "2 teaspoonfuls twice a day or as directed by the physician.",
      Presentation: "200ml, 450ml",
    },
  },

  // --- ID 16: Livherb --- (Updated to match text)
  {
    id: 16,
    image: "/assets/img/livherb.jpg",
    title: "Livherb",
    price: 16.5,
    oldPrice: 20.0,
    bundleTag: "Multiple sizes",
    rating: 5,
    reviewCount: 33,
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Liver Care Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-LV-MULTI",
    },
    features: [
      "Hepatoprotective and Rejuvenator",
      "The liver is one of the most metabolically active organs in the body",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Hepatoprotective and Rejuvenator",
      Description:
        "The liver is one of the most metabolically active organs in the body. Livherb is designed to care for and protect this vital organ.",
      "How It Works": [
        "Kutki: Hepatoprotective, supports liver cirrhosis, immune modulation, antioxidant.",
        "Punarnava: Hepatoprotective, anti - inflammatory.",
        "Makov: Relieves stomach ache and worms,anti - inflammatory",
        "Rohitak: Liver and spleen disorders, hepatoprotectivenp.",
        "Bhumi Amla: Effective liver protector.",
      ],
      Indication: [
        "Corrects anaemia, dyspepsia, and constipation",
        "Improves liver function and promotes appetite",
        "Manages early cirrhotic conditions",
        "Protects liver against hepatotoxic conditions and jaundice",
      ],
      Dosage: "2 teaspoonfuls twice a day or as directed by the physician.",
      Presentation: "Available in 60ml, 100ml, and 200ml bottles.",
    },
  },

  // --- ID 17: Gasherb --- (Updated to match text)
  {
    id: 17,
    image: "/assets/img/gasherb.jpg",
    title: "Gasherb",
    price: 14.0,
    oldPrice: null,
    bundleTag: "Multiple sizes",
    rating: 4,
    reviewCount: 27,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Digestive Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-GH-MULTI",
    },
    features: [
      "Hyperacidity, GERD, constipation, flatulence, and abdominal gas",
      "The herbal choice for antacid with enzyme for quick, lasting results",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category":
        "Hyperacidity, GERD, constipation, flatulence, and abdominal gas",
      Description:
        "The herbal choice for antacid with enzyme for quick, lasting results in 'Hyper Acidity Syndrome'.",
      "How It Works": [
        "Chitrak: Digestive and caminative.",
        "Yawani: Anti - esopagmotive.",
        "Sunthi: Reduces flatulence.",
        "Muktasukti Bhasma: Acts as an antacid.",
      ],
      Indication: [
        "Dyspepsia & Constipation",
        "Acute & Chronic Gastritis",
        "Faster relief for burning stomach",
        "Excellent remedy for Gastro - colitis",
        "Gastroesophageal reflux syndrome",
        "Relief from heartburn & epigastric pain",
      ],
      Dosage:
        "2 teaspoonful twice daily after meals or as directed by the physician.",
      Presentation: "200ml, 450ml, 1x50 tablets, 1x30x10 tablets",
    },
  },
  {
    id: 18,
    image: "/assets/img/crystomin.jpg",
    title: "Crystomin Syrup",
    price: 18.0,
    oldPrice: 22.0,
    bundleTag: "450ml Syrup",
    rating: 4,
    reviewCount: 19,
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Kidney Care Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-CM-200",
    },
    features: ["Lithotriptic, antibacterial, diuretic and other activities."],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category":
        "Lithotriptic, antibacterial, diuretic and other supportive urinary tract actions.",
      Description:
        "A herbal formulation for dissolving kidney stones and treating urinary tract infections (UTIs).",
      "How It Works": [
        "Pashanbhed: Carminative, effective against hyperacidity, and anti-urolithic",
        "Punarnava: Helps with urinary retention and promotes healthy urination",
        "Varuna: Hepatoprotective, reduces chances of stone formation in kidneys",
        "Gokshura: Possesses anti - inflammatory and soothing properties.",
      ],
      Indication: [
        "Helps dissolve kidney stones, especially calcium oxalate types.",
        "Supports relief from uric acid stones through diuretic action.",
        "Possesses antimicrobial properties for urinary tract infection(UTI) support.",
        "Reduces inflammation in the urinary system.",
        "Helps relieve pain in the back, abdomen, or sides caused by kidney stones.",
      ],
      Dosage: "1–2 tablets twice daily, or as directed by the physician.",
      Presentation: "Box of 30 x 10 tablets (blister packed).",
    },
  }, // --- ID 19: Shakti Herb --- (Existing data)

  {
    id: 19,
    image: "/assets/img/shakti_herb.jpg",
    title: "Shakti Herb",
    price: 22.0,
    oldPrice: null,
    bundleTag: "200ml Syrup",
    rating: 5,
    reviewCount: 38,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "General Tonic Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-SH-200",
    },
    features: ["Boosts strength and stamina."],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Boosts strength and stamina",
      Description:
        "Meaningful combination of Ashwagandha, Shatavari, Arjuna, Amla & Kapikacchu Beej.",
      "How It Works": [
        "Shilajit: Helps in erectile dysfunction, acts as a neurotonic, and increases sperm count ",
        "Barahikanda: Antioxidant, anti-diabetic, and anti-cancer properties ",
        "Bidarikanda: Restorative tonic, anti- aging, spermatogenic, immune booster, and beneficial in infertility disorders",
      ],
      Indication: [
        "Choice for physical & mental weakness",
        "Relieves anxiety, mental stress & strain",
        "Removes the deficiency of vital organs",
        "Strengthens neuromuscular tone",
        "Protects the body from oxidative stress",
        "Ensures satisfactory performance",
      ],
      Dosage: "Take 10 ml twice a day.",
      Presentation: "Available in 200ml Syrup bottle.",
    },
  },
  // --- ID 20: Immu Care --- (Updated to match text)
  {
    id: 20,
    image: "/assets/img/immu_care.jpg",
    title: "Immu Care Syrup",
    price: 17.0,
    oldPrice: 19.5,
    bundleTag: "200 ml",
    rating: 4,
    reviewCount: 45,
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Immunity Booster Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-IC-200",
    },
    features: [
      "Immunity Booster",
      "Enhance the body's own defense — either physically or mentally — by supporting our immune system",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Immunity Booster",
      Description:
        "Enhance the body's own defense — either physically or mentally — by supporting our immune system.",
      "How It Works": [
        "Amrita: Immunity enhancer / Anti-allergic.",
        "Tulasi: Antioxidant / Antipyretic.",
        "Haridra: Platelet enhancer.",
      ],
      Indication: [
        "As an immunomodulator",
        "Scavenging the free radicals",
        "Early recovery in post - operative conditions",
        "As an adjuvant to anti - infective therapy",
        "Resistance to antibiotic therapy",
      ],
      Dosage: "2 teaspoonful twice a day.",
      Presentation: "200 ml",
    },
  },

  // --- ID 21: Kafher Syrup --- (Updated to match text)
  {
    id: 21,
    image: "/assets/img/kafher_syrup.jpg",
    title: "Kafher Syrup",
    price: 13.0,
    oldPrice: null,
    bundleTag: "Multiple sizes",
    rating: 3,
    reviewCount: 11,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Cough Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-KH-MULTI",
    },
    features: [
      "Cough Expectorant with Bronchodilator",
      "Kafher is a non-addictive, non-sedative, and non-narcotic cough expectorant",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Cough Expectorant with Bronchodilator",
      Description:
        "Kafher is a non-addictive, non-sedative, and non-narcotic cough expectorant.",
      "How It Works": [
        "Vanafsha: RTI, dry and sore throat, tuberculosis cough.",
        "Mulethi: Common cough relief.",
        "Kantakari: Respiratory disorders.",
        "Talispatra: Antitussive action.",
        "Vasaka: Bronchial antiseptic, bronchodilator.",
        "Pippali: Respiratory infections.",
      ],
      Indication: [
        "Prompt relief from cough and cold",
        "Acute and chronic bronchitis and asthma",
        "Laryngitis and whooping cough(pertussis)",
        "Bronchial asthma",
        "Allergic cough",
      ],
      Dosage:
        "Adults: 2 teaspoonfuls, 2–3 times a day. Children: 1 teaspoonful, 2–3 times a day",
      Presentation: "Available in: 100 ml & 200 ml bottles",
    },
  },

  // --- ID 22: Tensguard Tablet --- (Updated to match text)
  {
    id: 22,
    image: "/assets/img/tensgaurd_tablet.jpg",
    title: "Tensguard Tablet",
    price: 20.0,
    oldPrice: 26.0,
    bundleTag: "120 Tablets",
    rating: 4,
    reviewCount: 23,
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Herbal Tablet",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-TG-120",
    },
    features: [
      "Anti Hypertensive and Cardioprotective",
      "Tension relief and support for balancing blood pressure",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Anti Hypertensive and Cardioprotective",
      Description: "Tension relief and support for balancing blood pressure.",
      "How It Works": [
        "Rauvolfia serpentina: reduces blood pressure.",
        "Terminalia arjuna: heart tonic.",
      ],
      Indication: [
        "Hypolipidemic action",
        "Stabilizes blood pressure",
        "Reduces oxidative stress",
        "Strengthens the heart muscle",
      ],
      Dosage:
        "Please consult your physician for appropriate dosage instructions.",
      Presentation: "1 pack: 30 tablets × 4 strips",
    },
  },
  // --- ID 23: Bslim Tablet --- (Updated to match text)
  {
    id: 23,
    image: "/assets/img/bslim_tablet.jpg",
    title: "Bslim Tablet",
    price: 24.0,
    oldPrice: null,
    bundleTag: "300 Tablets",
    rating: 5,
    reviewCount: 31,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Weight Management Tablet",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-BS-300",
    },
    features: [
      "Weight Loss Formula",
      "The scientific and authentic formula to help you lose excess weight",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Weight Loss Formula",
      Description:
        "The scientific and authentic formula to help you lose excess weight.",
      "How It Works": [
        "Kutki: Anti-inflammatory, supports weight management and healthy elimination of excess fat and cholesterol.",
        "Bayobiden: Anti - inflammatory and anti - hyperlipidemic, boosts overall metabolism.",
        "Sanna: Laxative.",
        "Shilajit: Anti - inflammatory and rejuvenative.",
      ],
      Indication: [
        "Colon cleanser and tonifier to eliminate toxins and deposits",
        "Helps reduce obesity and manage fat metabolism",
        "Balances cholesterol and lipid profiles",
        "Burns extra calories and fat, improves digestion and excretion system",
        "Reduces desire for sugar and sweet foods",
      ],
      Dosage:
        "Please consult your healthcare professional for appropriate dosage instructions.",
      Presentation: "1 pack: 30 tablets × 10 strips",
    },
  },
];

export const classicalProductData = [
  // --- ID 201: Sitopiladi Churna ---
  {
    id: 201,
    image: "/assets/img/sitopiladi_churna.jpg",
    title: "Sitopiladi Churna",
    price: 12.0,
    oldPrice: null,
    bundleTag: "100gm Churna",
    rating: 5,
    reviewCount: 25,
    category: "Classical Respiratory",
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Classical Ayurvedic Medicine",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-SC-100",
    },
    features: [
      "Effective classical Ayurvedic medicine for treating cough, cold, fever, productive cough, asthma and allergic disorders.",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical",
      Description:
        "Sitopiladi Churna is a traditional Ayurvedic powder used for centuries to treat various respiratory ailments. It is known for its sweet taste and effectiveness in clearing congestion.",
      "How It Works": [
        "Has kashara (antitussive), kaphnisaraka (expectorant), and anti-inflammatory properties that work together to soothe cough",
        "Restores lung capacity, improves pulmonary performance, and boosts immunity",
        "Reduces pharyngeal and chest congestion by liquefying thick mucus in the airways",
        "Keeps the body healthy by balancing the Vata (air) and Pitta (fire and air) Doshas and effectively removes AMA doshas (harmful toxins) from the body",
      ],
      Indication: "Dyspnea",

      Dosage:
        "Adults: 1-3 grams twice daily with honey or warm water, or as directed by an Ayurvedic physician.",
      Presentation: "Available in 100gm jar.",
    },
  },

  // --- ID 202: Amalaki Churna --- (Updated to match text)
  {
    id: 202,
    image: "/assets/img/amalaki_churna.jpg",
    title: "Amalki Churna",
    price: 9.5,
    oldPrice: null,
    bundleTag: "100 gm",
    rating: 4,
    reviewCount: 18,
    category: "Classical Digestive",
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Classical Ayurvedic Medicine",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-AC-100",
    },
    features: [
      "Useful in treating digestive problems, boosts immunity, and acts as a rejuvenator",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical",
      Description:
        "Useful in treating digestive problems, boosts immunity, and acts as a rejuvenator.",
      "How It Works":
        "Emblica officinalis (Amalaki) – Acts as an antioxidant, promotes digestion, and supports liver function.",
      Indication:
        "Hyperacidity, Gastritis, Loss of Appetite, Indigestion, Liver Disorders",
      Dosage:
        "1 to 2 grams twice daily with warm water or as directed by the physician.",
      Presentation: "100 gm",
    },
  },

  // --- ID 203: Arjuna Churna --- (Updated to match text)
  {
    id: 203,
    image: "/assets/img/arjuna_churna.jpg",
    title: "Arjun Churna",
    price: 11.0,
    oldPrice: 13.0,
    bundleTag: "100 gm",
    rating: 5,
    reviewCount: 30,
    category: "Classical Cardiovascular",
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Classical Ayurvedic Medicine",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-ARJC-100",
    },
    features: ["Heart tonic, Terminalia Arjuna"],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical",
      Description: "Heart tonic, Terminalia Arjuna",
      "How It Works":
        "Helps in managing hyperlipidemia, cardiovascular complications, hypertension, and provides cardioprotective support.",
      Indication: "Cardiac disorder",
      Dosage: "3–6 grams or as directed by the physician.",
      Presentation: "100 gm | 1x60 capsule",
    },
  },

  // --- ID 204: Satavari ---
  {
    id: 204,
    image: "/assets/img/satavari.jpg",
    title: "Satavari",
    price: 15.0,
    oldPrice: null,
    bundleTag: "100gm Churna",
    rating: 4,
    reviewCount: 22,
    category: "Classical Women's Health",
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Classical Ayurvedic Medicine",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-SATA-100",
    },
    features: [
      "Helps support female reproductive health and acts as a natural galactagogue.",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical Women's Health / Galactagogue",
      Description:
        "Shatavari (Asparagus racemosus) is known as the 'Queen of Herbs' for female health. It supports the reproductive system and is especially valued for promoting lactation in nursing mothers.",
      "How It Works":
        "It acts as a potent adaptogen and rejuvenator (Rasayana). It nourishes and balances the female reproductive hormones, soothing stress and supporting optimal milk production.",
      Indication:
        "Supporting female reproductive health, menopausal symptoms, and as a natural galactagogue.",
      Dosage: "3-5 grams twice daily with milk or warm water, or as directed.",
      Presentation: "Available in 100gm jar.",
    },
  },

  // --- ID 205: Triphala Churna --- (Updated to match text)
  {
    id: 205,
    image: "/assets/img/triphala_churna.jpg",
    title: "Trifala Churna",
    price: 8.0,
    oldPrice: null,
    bundleTag: "100 gm",
    rating: 4,
    reviewCount: 35,
    category: "Classical Digestive",
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Classical Ayurvedic Medicine",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-TC-100",
    },
    features: [
      "An effective combination of three fruits that act as a mild laxative, carminative, and empower the digestive system",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical",
      Description:
        "An effective combination of three fruits that act as a mild laxative, carminative, and empower the digestive system.",
      "How It Works":
        "Haritaki – Antispasmodic, colon cleanser. Bibhitak – Supports active digestion. Amla – Appetizer and digestive tonic.",
      Indication:
        "Constipation, Eye disease, Impaired digestive fire, Hair fall, Anemia",
      Dosage: "3–6 grams or as prescribed by the physician.",
      Presentation: "100g, 250g",
    },
  },

  // --- ID 206: Rohitakadi Churna ---
  {
    id: 206,
    image: "/assets/img/rohitakadi_churna.jpg",
    title: "Rohitakadi Churna",
    price: 13.0,
    oldPrice: null,
    bundleTag: "100gm Churna",
    rating: 3,
    reviewCount: 10,
    category: "Classical Liver/Spleen",
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Classical Ayurvedic Medicine",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-RC-100",
    },
    features: [
      "Effective medicine for liver, spleen, digestion & liver disorders.",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical Liver/Spleen",
      Description:
        "Rohitakadi Churna is a potent formulation focused on maintaining the health of the spleen and liver. It is especially useful in conditions related to spleen enlargement and related digestive issues.",
      "How It Works":
        "The primary ingredient, Rohitaka, is known for its splenoprotective and hepatoprotective actions. It helps regulate bile flow and reduces enlargement of abdominal organs.",
      Indication:
        "Liver and spleen disorders, loss of appetite, and indigestion.",
      Dosage: "1-3 grams twice daily with honey or warm water.",
      Presentation: "Available in 100gm jar.",
    },
  },

  // --- ID 207: Abhipattikar Churna --- (Updated to match text)
  {
    id: 207,
    image: "/assets/img/abhipattikar_churna.jpg",
    title: "Avipattikar Churna",
    price: 14.0,
    oldPrice: null,
    bundleTag: "100 gm",
    rating: 4,
    reviewCount: 17,
    category: "Classical Digestive",
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Classical Ayurvedic Medicine",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-ABC-100",
    },
    features: [
      "An effective herbal formulation for managing hyperacidity",
      "Acts as a digestive, carminative, mild laxative, and appetite stimulant",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical",
      Description:
        "An effective herbal formulation for managing hyperacidity. Acts as a digestive, carminative, mild laxative, and appetite stimulant.",
      "How It Works":
        "Nisotha – Relieves constipation. Haritaki – Natural colon cleanser, antispasmodic. Shunthi – Reduces flatulence and aids digestion.",
      Indication:
        "Hyperacidity, Digestive impairment, Gastric and duodenal ulcers, Dyspepsia, Constipation, Piles, Urinary disorders",
      Dosage: "3–6 grams twice daily or as directed by the physician.",
      Presentation: "Available in: 100 gm, 200 gm packs",
    },
  },

  // --- ID 208: Ashwagandha Churna --- (Updated to match text)
  {
    id: 208,
    image: "/assets/img/ashwagandha_churna.jpg",
    title: "Ashwagandha Churna",
    price: 16.0,
    oldPrice: 19.0,
    bundleTag: "100 gm",
    rating: 5,
    reviewCount: 40,
    category: "Classical Adaptogen",
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Classical Ayurvedic Medicine",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-ASH-100",
    },
    features: [
      "Ashwagandha Churna is a traditional herbal remedy derived from Withania somnifera, known for its adaptogenic and rejuvenating properties",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical",
      Description:
        "Ashwagandha Churna is a traditional herbal remedy derived from Withania somnifera, known for its adaptogenic and rejuvenating properties.",
      "How It Works":
        "Boosts immune function and stamina. Adaptogenic effects help the body manage stress. Improves sleep quality and libido. Contains Withania somnifera as the active ingredient. Helpful in managing insomnia.",
      Indication: "Neurological disorders, General weakness and fatigue",
      Dosage: "3-6 grams daily or as directed by the physician.",
      Presentation: "100 gm Powder, 10x10 Capsules, 1x60 Tablets",
    },
  },

  // --- ID 209: Neem --- (Updated to match text)
  {
    id: 209,
    image: "/assets/img/neem.jpg",
    title: "Neem",
    price: 10.0,
    oldPrice: null,
    bundleTag: "100 gm",
    rating: 4,
    reviewCount: 20,
    category: "Classical Dermatological",
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Classical Ayurvedic Medicine",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-NEEM-100",
    },
    features: [
      "Neem is a powerful herb traditionally used in Ayurveda for its broad therapeutic effects including immune support and skin health",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical",
      Description:
        "Neem is a powerful herb traditionally used in Ayurveda for its broad therapeutic effects including immune support and skin health.",
      "How It Works":
        "Immune stimulatory, adaptogenic properties, helps balance metabolism, and promotes detoxification.",
      Indication:
        "Dyspnea (difficulty breathing), Cough, Burning sensation in palms and feet, Low digestive power, Loss of sensation in tongue, Abdominal pain, anorexia, fever, and nosebleeds",
      Dosage:
        "1–3 grams twice a day with ghee or honey, or as directed by the physician.",
      Presentation: "100 gm pack",
    },
  },

  // --- ID 210: Arjuna --- (Updated to match text)
  {
    id: 210,
    image: "/assets/img/arjuna.jpg",
    title: "Arjuna",
    price: 15.5,
    oldPrice: 19.0,
    bundleTag: "60 Ct Capsule",
    rating: 5,
    reviewCount: 35,
    category: "Classical Cardiovascular",
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Classical Herbal Capsule",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-AJ-060",
    },
    features: [
      "Supports cardiac health, strengthens heart muscles, and regulates blood pressure naturally.",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical Cardiovascular / Heart Tonic",
      Description:
        "Arjuna capsules provide a concentrated dose of the heart-supportive benefits of Terminalia arjuna bark, ideal for busy lifestyles. It is a powerful natural cardiotonic.",
      "How It Works":
        "Strengthens heart muscles (myocardium), helps maintain healthy cholesterol levels, and provides antioxidant protection to the cardiovascular system.",
      Indication:
        "Supports cardiac health, strengthens heart muscles, and regulates blood pressure.",
      Dosage:
        "1 capsule twice daily after meals, or as prescribed by a health professional.",
      Presentation: "Available in 60 capsules bottle.",
    },
  },

  // --- ID 211: Yasti Madhu Churna ---
  {
    id: 211,
    image: "/assets/img/yasti_madhu_churna.jpg",
    title: "Yasti Madhu Churna",
    price: 11.5,
    oldPrice: null,
    bundleTag: "100gm Churna",
    rating: 4,
    reviewCount: 15,
    category: "Classical Respiratory",
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Classical Ayurvedic Medicine",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-YMC-100",
    },
    features: [
      "Helps relieve sore throat, cough, chest, and respiratory disorders.",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical Respiratory / Throat Care",
      Description:
        "Yasti Madhu (Licorice/Mulethi) Churna is a soothing formulation widely used for throat and respiratory relief. It is sweet-tasting and acts as a demulcent.",
      "How It Works":
        "It forms a protective coat over the irritated mucosal lining of the throat and esophagus, reducing irritation, inflammation, and coughing. It also acts as an expectorant.",
      Indication:
        "Sore throat, cough, hoarseness, chest congestion, and respiratory disorders.",
      Dosage:
        "1-3 grams twice daily, mixed with honey or warm water, or as advised by a physician.",
      Presentation: "Available in 100gm jar.",
    },
  },

  // --- ID 212: Isabgol (Life Care) --- (Updated to match text)
  {
    id: 212,
    image: "/assets/img/isabgol.jpg",
    title: "Ishabgol Life Care Churna",
    price: 9.0,
    oldPrice: null,
    bundleTag: "100 gm",
    rating: 4,
    reviewCount: 28,
    category: "Classical Digestive",
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Classical Fiber Supplement",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-ISAB-100",
    },
    features: [
      "Ishabgol Life Care Churna is a natural herbal formulation known for its effective laxative and stool softening properties",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Laxative and stool softener",
      Description:
        "Ishabgol Life Care Churna is a natural herbal formulation known for its effective laxative and stool softening properties, helping ease constipation and promote regular bowel movements.",
      "How It Works":
        "Isabgol: Increases fecal bulk and promotes bowel movement. Haritaki: Antispasmodic and colon cleanser. Ajwain: Hypolipidemic and digestive aid. Saunf (Fennel): Carminative and digestive enhancer. Surgikhar: Helps with hyperacidity and flatulence.",
      Indication:
        "Chronic constipation of varied etiology, Regulates disturbed bowel function and eases evacuation, Hemorrhoids (piles), Ulcerative colitis",
      Dosage:
        "2 teaspoons with lukewarm water at bedtime, or as directed by the physician.",
      Presentation: "Available in 100 gm packaging",
    },
  },

  // --- ID 213: Gasher Churna --- (Updated to match text)
  {
    id: 213,
    image: "/assets/img/gasher_churna.jpg",
    title: "Gasher Churna",
    price: 10.5,
    oldPrice: null,
    bundleTag: "100 gm",
    rating: 3,
    reviewCount: 12,
    category: "Classical Digestive",
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Classical Ayurvedic Medicine",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-GSC-100",
    },
    features: ["Useful in hyperacidity, gastritis, and abdominal pain"],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical / Patents",
      Description: "Useful in hyperacidity, gastritis, and abdominal pain.",
      "How It Works":
        "Zingiber officinale (Ginger) - Appetizer, relieves indigestion. Emblica ribes (Indian Gooseberry) - Carminative. Plumbago zeylanica (Ceylon Leadwort) - Effective for dyspepsia.",
      Indication: "Gastritis, Dyspepsia, Indigestion",
      Dosage: "3-5 grams or as directed by the physician.",
      Presentation: "100 gm, 200 gm",
    },
  },

  // --- ID 214: Shilajit Capsule --- (Updated to match text)
  {
    id: 214,
    image: "/assets/img/shilajit_cap.png",
    title: "Shilajit Capsule",
    price: 24.0,
    oldPrice: 29.0,
    bundleTag: "30 Capsules",
    rating: 5,
    reviewCount: 45,
    category: "Classical Rejuvenator",
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Classical Mineral Capsule",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-SLJ-030",
    },
    features: [
      "Shilajit Capsule is a powerful Ayurvedic supplement that supports stamina, strength, and overall vitality",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category":
        "Rasayana (Rejuvenator) / General Tonic / Adaptogen",
      Description:
        "Shilajit Capsule is a powerful Ayurvedic supplement that supports stamina, strength, and overall vitality. Rich in fulvic acid and minerals, it helps improve energy levels, mental clarity, and immune function.",
      "How It Works":
        "Boosts mitochondrial function for enhanced energy. Improves testosterone levels and reproductive health. Supports detoxification and antioxidant defense.",
      Indication:
        "Low energy or fatigue, Male infertility, Immune system support, Anti-aging support",
      Dosage:
        "1 capsule twice daily with lukewarm water or as directed by the physician.",
      Presentation: "Bottle of 30 Capsules",
    },
  },
];

export const veterinaryProductData = [
  // --- VET ID 1: Vet Kafher --- (Updated to match text)
  {
    id: 101,
    image: "/assets/img/vet_kafher.jpg",
    title: "Vet Kafher",
    price: 29.0,
    oldPrice: null,
    bundleTag: "100ml Liquid",
    rating: 4,
    reviewCount: 15,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Veterinary Herbal Formulation",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-VK-100",
    },
    features: [
      "Vet Kafher is an herbal formulation that supports lung and throat health in livestock",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Respiratory Support in Animals",
      Description:
        "Vet Kafher is an herbal formulation that supports lung and throat health in livestock.",
      "How It Works":
        "Clears the respiratory tract, soothes inflammation, and enhances immunity in animals.",
      Indication: ["Animal Cough & Cold", "Allergic Respiratory Conditions"],

      Dosage: "As directed by the veterinary physician.",
      Presentation: "100ml Liquid",
    },
  },

  // --- VET ID 2: Vet Livherb --- (Updated to match text)
  {
    id: 102,
    image: "/assets/img/vet_livherb.jpg",
    title: "Vet Livherb",
    price: 35.0,
    oldPrice: null,
    bundleTag: "100ml & 500ml",
    rating: 5,
    reviewCount: 22,
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Veterinary Liver Tonic",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-VL-MULTI",
    },
    features: [
      "Vet Livherb is a herbal formulation used to improve liver health and digestion in livestock",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Liver Tonic and Hepato-Protective",
      Description:
        "Vet Livherb is a herbal formulation used to improve liver health and digestion in livestock. It supports detoxification and enhances metabolic efficiency.",
      "How It Works":
        "Stimulates bile secretion, improves appetite, detoxifies the liver, and prevents hepatic damage.",
      Indication: [
        "Liver dysfunction",
        "Anorexia and digestive issues",
        "Support during hepatotoxic drug use",
      ],
      Dosage:
        "As prescribed by the veterinary doctor depending on species and condition.",
      Presentation: "100ml and 500ml bottles",
    },
  },

  // --- VET ID 3: Vet Siddhamol Malt --- (Updated to match text)
  {
    id: 103,
    image: "/assets/img/vet_siddhamol.jpg",
    title: "Vet Siddhamol Malt",
    price: 42.0,
    oldPrice: null,
    bundleTag: "100ml",
    rating: 5,
    reviewCount: 30,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Veterinary Cough Expectorant",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-VSM-100",
    },
    features: [
      "Vet Siddhamol Malt is a non-addictive, non-sedative & non-narcotic cough expectorant",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Cough Expectorant with Bronchodilator",
      Description:
        "Vet Siddhamol Malt is a non-addictive, non-sedative & non-narcotic cough expectorant. It is sugar-free, safe, and effective with no side effects like sedation, drowsiness, or gastrointestinal disturbance.",
      "How It Works":
        "Adhatoda vasica acts as an expectorant and bronchodilator. Glycyrrhiza glabra provides demulcent and expectorant effects. Clerodendrum serratum and Tulsi offer anti-allergic and immunomodulatory properties.",
      Indication: [
        "Allergic cough",
        "Infective cough",
        "Asthmatic cough",
        "Rhinitis",
        "Bronchitis",
        "Running nose due to common cold",
      ],
      Dosage:
        "2 teaspoonfuls (TSF) thrice daily or as directed by the veterinarian.",
      Presentation: "100ml liquid bottle",
    },
  },
];
