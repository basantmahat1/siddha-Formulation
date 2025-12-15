export const productData = [
  // --- ID 1: Xtreme Tablet --- (Existing data)
  {
    id: 1,
    image: "../src/assets/img/xtreme.jpg",
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
      "Increves low sperm count, boosts libido, promotes performance.",
    ],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Non-hormonal and safe sex stimulant for men.",
      Description:
        "It improves sperm count, hormonal level, corrects morphology of sperms, improves motility of sperms, prevents oxidative stress and therefore improves male fertility. ",
      "How It Works":
        "Exhibits spermatogenic activity and increases serum hormone levels.Improves sperm motility and total sperm count in infertile males.Enhances semen quality by combating oxidative stress.Improves blood circulation to genital organs. ",
      Indication:
        "Low sperm count, loss of libido, erectile dysfunction, and poor sexual performance.",
      Dosage:
        "Take 1 tablet twice a day with warm water or with a cup of milk or as directed by the physician. Follow a 90-day course for maximum benefit.",
      Presentation: "Available in 30 tablets blister pack.",
    },
  }, // --- ID 2: Bal Amrit Syrup --- (Existing data)

  {
    id: 2,
    image: "../src/assets/img/balamrit.png",
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
      "Therapeutic Category": "Pediatric / Digestive",
      Description:
        "Bal Amrit Syrup is a gentle, nontoxic herbal formulation specifically developed for children to manage common digestive complaints like indigestion, flatulence, and mild abdominal cramps. It promotes a healthy appetite.",
      "How It Works":
        "Contains carminative and digestive herbs that soothe the gastrointestinal lining, reduce gas formation, and stimulate the release of natural digestive enzymes, ensuring comfortable digestion for infants and children.",
      Indication:
        "Indigestion, abdominal cramps, flatulence, and loss of appetite in children.",
      Dosage:
        "Infants (6-12 months): 5 ml (1 teaspoon) twice daily. Children (1-5 years): 10 ml (2 teaspoons) twice daily, or as directed by the pediatrician.",
      Presentation: "Available in 100ml Syrup bottle.",
    },
  }, // --- ID 3: Amherb --- (Existing data)

  {
    id: 3,
    image: "../src/assets/img/amherb.jpg",
    title: "Amherb",
    price: 16.0,
    oldPrice: null,
    bundleTag: "60ml Drops",
    rating: 4,
    reviewCount: 12,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Ayurvedic Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-AH-200",
    },
    features: ["Anti Diarrhoeal & Amoebic dysentery."],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Gastrointestinal / Anti-Diarrhoeal",
      Description:
        "Amherb is an anti-diarrheal formulation aimed at treating acute and chronic diarrhea, as well as amoebic dysentery. It helps restore intestinal health and fluid balance.",
      "How It Works":
        "Exerts potent antimicrobial and astringent actions in the gut. It binds to toxins and pathogenic microbes, reducing inflammation and excessive fluid secretion, thereby normalizing stool consistency.",
      Indication: "Acute and chronic diarrhea, amoebic dysentery.",
      Dosage:
        "Take 10 ml twice a day or as recommended by your physician. Complete the full course.",
      Presentation: "Available in 60ml Drops bottle.",
    },
  }, // --- ID 4: Topzyme --- (Existing data)

  {
    id: 4,
    image: "../src/assets/img/topzyme.jpg",
    title: "Topzyme",
    price: 11.0,
    oldPrice: 14.0,
    bundleTag: "100ml Syrup",
    rating: 5,
    reviewCount: 30,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Digestive Enzyme Drops",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-TZ-060",
    },
    features: ["Digestive enzymes."],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Gastrointestinal / Enzyme Supplement",
      Description:
        "Topzyme is a liquid formulation rich in digestive enzymes to aid in the breakdown and absorption of food. It is highly beneficial for those suffering from digestive weakness, bloating, and poor nutrient assimilation.",
      "How It Works":
        "Contains natural enzymes like amylase, protease, and lipase, which assist the body in breaking down carbohydrates, proteins, and fats, optimizing the entire digestive process.",
      Indication:
        "Digestive weakness, bloating, dyspepsia, and poor nutrient absorption.",
      Dosage:
        "Adults: 10 ml (2 teaspoons) after main meals. Children: 5 ml (1 teaspoon) after meals, or as per physician's advice.",
      Presentation: "Available in 100ml Syrup bottle.",
    },
  }, // --- ID 5: Raktamrit --- (Existing data)

  {
    id: 5,
    image: "../src/assets/img/raktamrit.jpg",
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
      "Therapeutic Category": "Blood Purifier / Dermatological",
      Description:
        "Raktamrit is a powerful Ayurvedic blood purifier designed to cleanse the circulatory system. It is effective against skin infections, allergies, and conditions where blood detoxification is required.",
      "How It Works":
        "Its action includes blood purification, potent antibacterial, antifungal, and anti-allergic properties. It helps eliminate metabolic toxins through the skin and kidneys.",
      Indication:
        "Skin diseases (acne, eczema), recurrent infections, and allergic conditions.",
      Dosage:
        "Take 10-15 ml twice a day with water or as directed by the physician. Shake well before use.",
      Presentation: "Available in 450ml Syrup bottle.",
    },
  }, // --- ID 6: Pylonil --- (Existing data)

  {
    id: 6,
    image: "../src/assets/img/pylonil.jpg",
    title: "Pylonil",
    price: 19.0,
    oldPrice: 21.0,
    bundleTag: "200ml Syrup",
    rating: 3,
    reviewCount: 18,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Ayurvedic Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-PY-200",
    },
    features: ["Anti-inflammatory and antimicrobial properties."],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Anorectal Care",
      Description:
        "Pylonil is formulated to provide relief from piles (hemorrhoids). It is valued for its anti-inflammatory and antimicrobial properties, helping to reduce swelling and prevent secondary infection.",
      "How It Works":
        "Reduces vascular congestion in the anal area, minimizing pain and swelling. Its antimicrobial components prevent infection in the affected tissue, promoting faster healing of hemorrhoids and fissures.",
      Indication:
        "Internal and external hemorrhoids (piles), fissures, and inflammation in the anorectal area.",
      Dosage:
        "Take 15 ml twice a day after meals. Consult your physician for personalized treatment.",
      Presentation: "Available in 200ml Syrup bottle.",
    },
  }, // --- ID 7: Sidda Race Oil --- (Existing data)

  {
    id: 7,
    image: "../src/assets/img/sidda_race_oil.jpg",
    title: "Sidda Race Oil",
    price: 25.0,
    oldPrice: null,
    bundleTag: "100ml Oil",
    rating: 5,
    reviewCount: 40,
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Ayurvedic Oil / Thailam / Kuzhampu",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-SRO-100",
    },
    features: ["Anti-inflammatory and analgesic action."],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Topical / Analgesic",
      Description:
        "Sidda Race Oil (Nilibhringadi Kera Thailam) is a potent topical formulation for localized pain relief and hair care. It is recommended for managing musculoskeletal pain, joint stiffness, sprains, and bruises, and also nourishes hair.",
      "How It Works":
        "When applied externally, the oil penetrates deep into the tissues to exert its anti-inflammatory and pain-relieving effects. For hair, it ensures healthy hair growth and prevents hair fall and dandruff.",
      Indication:
        "Musculoskeletal pain, joint stiffness, sprains, and for hair nourishment, controlling hair fall and dandruff.",
      Dosage:
        "Apply liberally on the affected part or entire head and massage gently for 30 minutes to one hour before bath. Oils for hair can be applied on head 30 minutes before bath regularly or as directed by the Physician.",
      Presentation: "Available in 100ml Oil bottle.",
    },
  }, // --- ID 8: Prasuta Sajjavani --- (Existing data)

  {
    id: 8,
    image: "../src/assets/img/prasuta_sajjavani.jpg",
    title: "Prasuta Sajjavani",
    price: 21.0,
    oldPrice: 25.0,
    bundleTag: "450ml Syrup",
    rating: 4,
    reviewCount: 22,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Ayurvedic Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-PS-200",
    },
    features: ["Ideal hematinic supplement for pregnancy or lactation."],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Women's Health / Hematinic",
      Description:
        "Prasuta Sajjavani is an ideal hematinic supplement for women, especially during pregnancy and lactation. It provides essential nutrients to combat iron deficiency and support maternal and fetal health.",
      "How It Works":
        "Rich in natural sources of iron and other co-factors necessary for healthy blood formation. It helps rapidly increase hemoglobin levels, fight fatigue, and ensure optimal nutritional support.",
      Indication:
        "Iron deficiency anemia, general weakness, and nutritional support during pregnancy and lactation.",
      Dosage: "Take 15 ml twice a day or as suggested by your gynecologist.",
      Presentation: "Available in 450ml Syrup bottle.",
    },
  }, // --- ID 9: Birechani --- (Existing data)

  {
    id: 9,
    image: "../src/assets/img/birechani.jpg",
    title: "Birechani",
    price: 13.0,
    oldPrice: null,
    bundleTag: "30 Ct Capsule",
    rating: 3,
    reviewCount: 10,
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Herbal Capsule",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-BR-030",
    },
    features: ["Chronic Constipation."],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Gastrointestinal / Laxative",
      Description:
        "Birechani is a herbal capsule designed for the effective management of chronic constipation. It provides gentle and predictable laxative action without causing harsh irritation.",
      "How It Works":
        "Acts as a natural purgative by stimulating bowel movements and increasing water content in the stool, making it easier to pass. It helps restore natural gut motility.",
      Indication: "Chronic constipation.",
      Dosage:
        "Take 1-2 capsules at bedtime with warm water, or as directed by your physician.",
      Presentation: "Available in 30 capsules blister pack.",
    },
  }, // --- ID 10: Arjuna --- (Existing data)

  {
    id: 10,
    image: "../src/assets/img/arjuna.jpg",
    title: "Arjuna",
    price: 15.5,
    oldPrice: 19.0,
    bundleTag: "500mg Capsule",
    rating: 5,
    reviewCount: 35,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Herbal Capsule",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-AJ-060",
    },
    features: ["Supports heart health and improves blood circulation."],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Cardiovascular / Heart Tonic",
      Description:
        "Arjuna is a cardiac tonic known traditionally for its ability to support heart health and improve blood circulation. It is essential for maintaining strong cardiovascular function.",
      "How It Works":
        "The active compounds in Arjuna bark possess antioxidant and cardiotonic properties. It helps strengthen the heart muscles, maintain healthy blood pressure, and regulate cholesterol levels.",
      Indication: "Supports heart health, improves blood circulation.",
      Dosage:
        "Take 1 capsule twice daily after meals, or as prescribed by a health professional.",
      Presentation: "Available in 500mg capsules.",
    },
  }, // --- ID 11: Gripe Water --- (Existing data)

  {
    id: 11,
    image: "../src/assets/img/gripe_water.jpg",
    title: "Gripe Water",
    price: 9.0,
    oldPrice: null,
    bundleTag: "130ml Syrup",
    rating: 4,
    reviewCount: 28,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Pediatric Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-GW-120",
    },
    features: ["Anti-spasmodic, carminative, digestive and stomachic."],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Pediatric / Colic Relief",
      Description:
        "Gripe Water is a classic pediatric remedy, serving as an anti-spasmodic, carminative, digestive, and stomachic agent for infants. It provides quick relief from colic pain, gas, and hiccups.",
      "How It Works":
        "The herbal waters gently relax the muscles of the digestive system, instantly relieving spasms that cause colic pain and flatulence. Its carminative properties help expel trapped gas.",
      Indication:
        "Colic pain, flatulence, indigestion, and hiccups in infants and children.",
      Dosage:
        "Infants (1-6 months): 5 ml (1 teaspoon) during or after a feed. Children (6 months+): 10 ml (2 teaspoons) during or after a feed. Administer as needed.",
      Presentation: "Available in 130ml Syrup bottle.",
    },
  }, // --- ID 12: Kafher PD --- (Existing data)

  {
    id: 12,
    image: "../src/assets/img/kafher_pd.jpg",
    title: "Kafher PD",
    price: 12.0,
    oldPrice: null,
    bundleTag: "100ml Syrup",
    rating: 3,
    reviewCount: 14,
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Pediatric Cough Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-KPD-100",
    },
    features: ["Cough expectorant with bronchodilator for children."],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Pediatric / Respiratory",
      Description:
        "Kafher PD (Pediatric Drops/Syrup) is a specialized cough expectorant and bronchodilator for children. It is formulated to be non-drowsy and safe for pediatric use.",
      "How It Works":
        "Works primarily by loosening thick mucus (expectorant action) and widening the air passages (bronchodilator action), making coughs more productive and easing breathing difficulties caused by respiratory congestion.",
      Indication:
        "Productive and dry cough, bronchial spasms, and respiratory congestion in children.",
      Dosage:
        "Children (1-3 years): 5 ml three times a day. Children (4-10 years): 10 ml three times a day, or as directed by the pediatrician.",
      Presentation: "Available in 100ml Syrup bottle.",
    },
  }, // --- ID 13: Siddhamol Malt --- (Existing data)

  {
    id: 13,
    image: "../src/assets/img/siddhamol_malt.jpg",
    title: "Siddhamol Malt",
    price: 28.0,
    oldPrice: 35.0,
    bundleTag: "450gm Malt",
    rating: 5,
    reviewCount: 50,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "General Tonic Malt",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-SM-450",
    },
    features: [
      "Adaptogenic, Antioxidant, Immunity booster, and also a hematinic.",
    ],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "General Tonic / Immunity Booster",
      Description:
        "Siddhamol Malt is a comprehensive general tonic, rich in adaptogenic, antioxidant, and hematinic properties. It is a family health supplement suitable for recovery, growth, and general well-being.",
      "How It Works":
        "Acts as an immunity booster by enhancing the body's natural defense mechanisms. Its adaptogens help the body cope with stress, while the hematinic components support healthy blood and energy production.",
      Indication:
        "General weakness, fatigue, convalescence, and to boost immunity.",
      Dosage: "Take 1-2 teaspoons twice daily with milk or water.",
      Presentation: "Available in 450gm Malt jar.",
    },
  }, // --- ID 14: Apticome --- (Existing data)

  {
    id: 14,
    image: "../src/assets/img/apticome.jpg",
    title: "Apticome",
    price: 14.0,
    oldPrice: null,
    bundleTag: "200ml Syrup",
    rating: 4,
    reviewCount: 19,
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Appetite Stimulant Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-AP-200",
    },
    features: ["Natural Appetite stimulant."],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Appetite Stimulant",
      Description:
        "Apticome is a natural appetite stimulant syrup. It is formulated to address loss of appetite due to various reasons, helping to encourage healthy food intake and digestion.",
      "How It Works":
        "The herbal ingredients stimulate digestive juice secretion and normalize gastrointestinal motility, preparing the digestive system for food and promoting hunger.",
      Indication:
        "Loss of appetite, mild indigestion, and nutritional deficiency.",
      Dosage:
        "Take 10 ml twice a day, 30 minutes before main meals, or as advised by your physician.",
      Presentation: "Available in 200ml Syrup bottle.",
    },
  }, // --- ID 15: Leucoherb --- (Existing data)

  {
    id: 15,
    image: "../src/assets/img/leucoherb.jpg",
    title: "Leucoherb",
    price: 18.0,
    oldPrice: null,
    bundleTag: "450ml Syrup",
    rating: 4,
    reviewCount: 16,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Women's Health Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-LH-200",
    },
    features: ["Uterine Sedative, Anti inflammatory & Menstrual Regulator."],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Women's Health / Uterine Tonic",
      Description:
        "Leucoherb is a Women's Health Syrup focused on regulating menstrual cycles, acting as a uterine sedative, and managing conditions like leucorrhea. It supports overall reproductive tract health.",
      "How It Works":
        "Works by normalizing the hormonal environment, reducing inflammation in the reproductive organs, and exerting sedative effects on the uterine muscles, which helps in managing painful or irregular menstruation.",
      Indication:
        "Leucorrhea, dysfunctional uterine bleeding, dysmenorrhea, and general reproductive health support.",
      Dosage:
        "Take 10-15 ml twice a day for a period recommended by a gynecologist.",
      Presentation: "Available in 450ml Syrup bottle.",
    },
  }, // --- ID 16: Livherb --- (Existing data)

  {
    id: 16,
    image: "../src/assets/img/livherb.jpg",
    title: "Livherb",
    price: 16.5,
    oldPrice: 20.0,
    bundleTag: "100ml Syrup",
    rating: 5,
    reviewCount: 33,
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Liver Care Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-LV-200",
    },
    features: ["Hepato protective and Rejuvenator."],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Hepatoprotective",
      Description:
        "Livherb is a potent Liver Care Syrup, functioning as a hepatoprotective agent and rejuvenator. It is essential for maintaining optimal liver health and detoxification.",
      "How It Works":
        "Stabilizes the liver cell membranes, protects the liver from toxins, and stimulates the regeneration of liver tissue. It enhances the production and flow of bile.",
      Indication:
        "Liver disorders, viral hepatitis, fatty liver, and liver damage due to alcohol or toxins.",
      Dosage: "Take 10 ml twice a day after meals, or as prescribed.",
      Presentation: "Available in 100ml Syrup bottle.",
    },
  }, // --- ID 17: Gasherb --- (Existing data)

  {
    id: 17,
    image: "../src/assets/img/gasherb.jpg",
    title: "Gasherb",
    price: 14.0,
    oldPrice: null,
    bundleTag: "200ml Syrup",
    rating: 4,
    reviewCount: 27,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Digestive Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-GH-200",
    },
    features: ["Hepato protective and Rejuvenator."],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Gastrointestinal / Antiflatulent",
      Description:
        "Gasherb is a digestive syrup specifically targeted to relieve symptoms of dyspepsia, flatulence, and gas. It ensures comfortable and efficient digestion.",
      "How It Works":
        "Combines carminative and antispasmodic herbs that help to quickly disperse trapped gases in the stomach and intestines, easing bloating, and relieving pain caused by spasms.",
      Indication: "Dyspepsia, flatulence, and gas.",
      Dosage:
        "Take 10 ml after main meals or when experiencing symptoms of gas/bloating.",
      Presentation: "Available in 200ml Syrup bottle.",
    },
  }, // --- ID 18: Crystomin Syrup --- (Existing data)

  {
    id: 18,
    image: "../src/assets/img/crystomin.jpg",
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
      "Therapeutic Category": "Urology / Lithotriptic",
      Description:
        "Crystomin Syrup is a Kidney Care Syrup with lithotriptic (stone-breaking), antibacterial, and diuretic activities. It supports urinary tract health and helps manage urinary calculus (kidney stones).",
      "How It Works":
        "The active components help dissolve smaller calculi and flush them out through increased urination (diuretic effect). Its antibacterial properties simultaneously protect the urinary tract from secondary infections.",
      Indication:
        "Urinary calculus (kidney stones), dysuria (painful urination), and urinary tract infections.",
      Dosage:
        "Take 10-15 ml twice a day with water or as directed by a healthcare practitioner.",
      Presentation: "Available in 450ml Syrup bottle.",
    },
  }, // --- ID 19: Shakti Herb --- (Existing data)

  {
    id: 19,
    image: "../src/assets/img/shakti_herb.jpg",
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
      "Therapeutic Category": "General Tonic / Rejuvenator",
      Description:
        "Shakti Herb is a general tonic syrup focused on boosting physical strength and stamina. It is an ideal supplement for athletes, those recovering from illness, or individuals experiencing general weakness.",
      "How It Works":
        "The tonic contains rich natural ingredients that replenish vital energy stores, improve muscle tone, and enhance the body's ability to resist fatigue, thereby boosting overall strength and vitality.",
      Indication:
        "General weakness, fatigue, and to boost strength and stamina.",
      Dosage: "Take 10 ml twice a day.",
      Presentation: "Available in 200ml Syrup bottle.",
    },
  }, // --- ID 20: Immu Care --- (Existing data)

  {
    id: 20,
    image: "../src/assets/img/immu_care.jpg",
    title: "Immu Care",
    price: 17.0,
    oldPrice: 19.5,
    bundleTag: "200ml Syrup",
    rating: 4,
    reviewCount: 45,
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Immunity Booster Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-IC-200",
    },
    features: ["Immunity Booster."],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Immunomodulator",
      Description:
        "Immu Care is an Immunity Booster Syrup formulated to strengthen the body's natural defense mechanisms against common infections and seasonal ailments. It supports long-term immune health.",
      "How It Works":
        "Contains immunomodulatory herbs that stimulate the activity of white blood cells and enhance the production of antibodies, thereby improving the body's response to pathogens.",
      Indication: "Low immunity, frequent infections, and seasonal ailments.",
      Dosage:
        "Take 10 ml twice daily for adults. 5 ml twice daily for children, or as advised.",
      Presentation: "Available in 200ml Syrup bottle.",
    },
  }, // --- ID 21: Kafher Syrup --- (Existing data)

  {
    id: 21,
    image: "../src/assets/img/kafher_syrup.jpg",
    title: "Kafher Syrup",
    price: 13.0,
    oldPrice: null,
    bundleTag: "200ml Syrup",
    rating: 3,
    reviewCount: 11,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Cough Syrup",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-KH-200",
    },
    features: ["Cough expectorant with bronchodilator."],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Respiratory / Antitussive",
      Description:
        "Kafher Syrup is a general Cough Expectorant with bronchodilator properties, suitable for all ages. It provides relief from both dry and productive coughs.",
      "How It Works":
        "Liquefies thick mucus, allowing it to be coughed up easily (expectorant). Simultaneously, it relaxes the bronchial muscles, reducing spasms and easing the discomfort of chest tightness.",
      Indication: "Productive cough, dry cough, and bronchial congestion.",
      Dosage:
        "Take 10 ml three times a day for adults. 5 ml three times a day for children, or as directed by a physician.",
      Presentation: "Available in 200ml Syrup bottle.",
    },
  }, // --- ID 22: Tensgaurd Tablet --- (Existing data)

  {
    id: 22,
    image: "../src/assets/img/tensgaurd_tablet.jpg",
    title: "Tensgaurd Tablet",
    price: 20.0,
    oldPrice: 26.0,
    bundleTag: "30x4 Tablets",
    rating: 4,
    reviewCount: 23,
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Blood Pressure Tablet",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-TG-050",
    },
    features: ["Relieves tension & supports balanced blood pressure."],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Cardiovascular / Antihypertensive Support",
      Description:
        "Tensgaurd Tablet is a blood pressure support formulation. It is designed to relieve tension and help maintain balanced and healthy blood pressure levels naturally.",
      "How It Works":
        "Possesses mild hypotensive properties that help relax blood vessels. They also act as nervine tonics, reducing anxiety and stress, a key factor in managing blood pressure.",
      Indication:
        "Stress-related hypertension, and to support balanced blood pressure.",
      Dosage: "Take 1 tablet twice a day, or as recommended by your physician.",
      Presentation: "Available in 30x4 tablets blister pack.",
    },
  }, // --- ID 23: Bslim Tablet --- (Existing data)

  {
    id: 23,
    image: "../src/assets/img/bslim_tablet.jpg",
    title: "Bslim Tablet",
    price: 24.0,
    oldPrice: null,
    bundleTag: "10x30 Tablet",
    rating: 5,
    reviewCount: 31,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Weight Management Tablet",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-BS-030",
    },
    features: ["Authentic formula to reduce overweight naturally."],
    paymentMethods: ["Visa", "MasterCard"], // --- NEW DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Weight Management",
      Description:
        "Bslim Tablet is an authentic herbal formula for natural weight management. It helps reduce overweight conditions by regulating metabolism and controlling appetite.",
      "How It Works":
        "Enhances the body's basal metabolic rate, promoting the efficient burning of fats, and curbing excessive cravings. It also has a mild detoxifying effect that aids weight loss.",
      Indication: "Authentic formula to reduce overweight naturally.",
      Dosage:
        "Take 1 tablet twice a day, preferably before meals, or as directed by a healthcare practitioner.",
      Presentation: "Available in 10x30 tablets blister pack.",
    },
  },
];

export const classicalProductData = [
  // --- ID 201: Sitopiladi Churna ---
  {
    id: 201,
    image: "../src/assets/img/sitopiladi_churna.jpg", // Placeholder path
    title: "Sitopiladi Churna",
    price: 12.0,
    oldPrice: null,
    bundleTag: "100gm Churna",
    rating: 5,
    reviewCount: 25,
    category: "Classical Respiratory", // Key for Related Products
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
      "Therapeutic Category": "Classical Respiratory",
      Description:
        "Sitopiladi Churna is a traditional Ayurvedic powder used for centuries to treat various respiratory ailments. It is known for its sweet taste and effectiveness in clearing congestion.",
      "How It Works":
        "It acts as an expectorant, easing the removal of phlegm, and as a bronchodilator, relieving bronchial spasms. Its antipyretic properties help manage fever associated with respiratory issues.",
      Indication:
        "Cough, cold, fever, asthma, productive cough, and allergic disorders.",
      Dosage:
        "Adults: 1-3 grams twice daily with honey or warm water, or as directed by an Ayurvedic physician.",
      Presentation: "Available in 100gm jar.",
    },
  },

  // --- ID 202: Amalaki Churna ---
  {
    id: 202,
    image: "../src/assets/img/amalaki_churna.jpg", // Placeholder path
    title: "Amalaki Churna",
    price: 9.5,
    oldPrice: null,
    bundleTag: "100gm Churna",
    rating: 4,
    reviewCount: 18,
    category: "Classical Digestive", // Key for Related Products
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Classical Ayurvedic Medicine",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-AC-100",
    },
    features: ["Useful in digestive problems."],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical Digestive / Antioxidant",
      Description:
        "Amalaki Churna, derived from Indian Gooseberry (Amla), is a natural powerhouse of Vitamin C and antioxidants. It is invaluable for promoting digestive health, boosting immunity, and rejuvenating the body.",
      "How It Works":
        "It balances stomach acid (Pitta dosha), making it useful for hyperacidity. It also acts as a mild laxative and detoxifier, aiding overall digestive function.",
      Indication:
        "Digestive problems, hyperacidity, general weakness, and as a strong antioxidant.",
      Dosage:
        "3-5 grams twice daily with water or milk, or as directed by the physician.",
      Presentation: "Available in 100gm jar.",
    },
  },

  // --- ID 203: Arjuna Churna ---
  {
    id: 203,
    image: "../src/assets/img/arjuna_churna.jpg", // Placeholder path
    title: "Arjuna Churna",
    price: 11.0,
    oldPrice: 13.0,
    bundleTag: "100gm Churna",
    rating: 5,
    reviewCount: 30,
    category: "Classical Cardiovascular", // Key for Related Products
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Classical Ayurvedic Medicine",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-ARJC-100",
    },
    features: ["Heart tonic."],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical Cardiovascular",
      Description:
        "Arjuna Churna, made from the bark of the Terminalia arjuna tree, is revered in Ayurveda as a superior cardiac tonic. It strengthens the heart muscles and supports the circulatory system.",
      "How It Works":
        "It strengthens the cardiac muscles, helps reduce cholesterol levels, and maintains healthy blood pressure through its antioxidant and cardiotonic properties.",
      Indication:
        "Heart tonic, supportive therapy for angina, and for improving blood circulation.",
      Dosage:
        "3-6 grams twice daily with milk or water, or as advised by an Ayurvedic practitioner.",
      Presentation: "Available in 100gm jar.",
    },
  },

  // --- ID 204: Satavari ---
  {
    id: 204,
    image: "../src/assets/img/satavari.jpg", // Placeholder path
    title: "Satavari",
    price: 15.0,
    oldPrice: null,
    bundleTag: "100gm Churna",
    rating: 4,
    reviewCount: 22,
    category: "Classical Women's Health", // Key for Related Products
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

  // --- ID 205: Triphala Churna ---
  {
    id: 205,
    image: "../src/assets/img/triphala_churna.jpg", // Placeholder path
    title: "Triphala Churna",
    price: 8.0,
    oldPrice: null,
    bundleTag: "100gm Churna",
    rating: 4,
    reviewCount: 35,
    category: "Classical Digestive", // Key for Related Products
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Classical Ayurvedic Medicine",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-TC-100",
    },
    features: [
      "An effective combination of the three fruits that act as a mild laxative, carminative, digestive, and intestinal tonic.",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical Digestive / Detoxifier",
      Description:
        "Triphala is one of the most famous Ayurvedic formulations, combining three potent fruits: Amalaki, Bibhitaki, and Haritaki. It is renowned for gently cleansing and toning the entire digestive tract.",
      "How It Works":
        "The three fruits work synergistically to detoxify, promote regular bowel movements, and improve nutrient absorption without causing dependency.",
      Indication:
        "Constipation, indigestion, detoxification, and overall digestive health.",
      Dosage:
        "3-6 grams at bedtime with warm water, or as recommended by a physician.",
      Presentation: "Available in 100gm jar.",
    },
  },

  // --- ID 206: Rohitakadi Churna ---
  {
    id: 206,
    image: "../src/assets/img/rohitakadi_churna.jpg", // Placeholder path
    title: "Rohitakadi Churna",
    price: 13.0,
    oldPrice: null,
    bundleTag: "100gm Churna",
    rating: 3,
    reviewCount: 10,
    category: "Classical Liver/Spleen", // Key for Related Products
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

  // --- ID 207: Abhipattikar Churna ---
  {
    id: 207,
    image: "../src/assets/img/abhipattikar_churna.jpg", // Placeholder path
    title: "Abhipattikar Churna",
    price: 14.0,
    oldPrice: null,
    bundleTag: "100gm Churna",
    rating: 4,
    reviewCount: 17,
    category: "Classical Digestive", // Key for Related Products
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Classical Ayurvedic Medicine",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-ABC-100",
    },
    features: [
      "Effective digestive, carminative, appetizing, and anti-flatulent.",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical Digestive / Antacid",
      Description:
        "Abhipattikar Churna is an established classical medicine used primarily to treat issues related to aggravated Pitta (heat/acid), particularly hyperacidity and dyspepsia.",
      "How It Works":
        "It neutralizes excess acid, soothes the stomach lining, relieves flatulence, and promotes the downward movement of Vata (air/gas), thereby easing digestive discomfort.",
      Indication:
        "Hyperacidity, heartburn, dyspepsia (indigestion), anorexia, and anti-flatulent action.",
      Dosage:
        "3-5 grams twice a day after meals, or as directed by a healthcare practitioner.",
      Presentation: "Available in 100gm jar.",
    },
  },

  // --- ID 208: Ashwagandha Churna ---
  {
    id: 208,
    image: "../src/assets/img/ashwagandha_churna.jpg", // Placeholder path
    title: "Ashwagandha Churna",
    price: 16.0,
    oldPrice: 19.0,
    bundleTag: "100gm Churna",
    rating: 5,
    reviewCount: 40,
    category: "Classical Adaptogen", // Key for Related Products
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Classical Ayurvedic Medicine",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-ASH-100",
    },
    features: [
      "A powerful adaptogen that boosts muscle tone, boost energy, and improve vitality.",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical Adaptogen / Rejuvenator",
      Description:
        "Ashwagandha (Withania somnifera) is perhaps the most famous adaptogen in Ayurveda. It helps the body manage stress, promotes relaxation, and enhances physical and mental endurance.",
      "How It Works":
        "It acts on the neuro-endocrine system to stabilize the body's response to stress, reducing cortisol levels. It is also an effective tonic for muscle tone and vitality.",
      Indication:
        "Stress, anxiety, general weakness, fatigue, and to boost muscle tone and vitality.",
      Dosage:
        "3-6 grams twice daily with milk, or as recommended by a physician.",
      Presentation: "Available in 100gm jar.",
    },
  },

  // --- ID 209: Neem ---
  {
    id: 209,
    image: "../src/assets/img/neem.jpg", // Placeholder path
    title: "Neem",
    price: 10.0,
    oldPrice: null,
    bundleTag: "60 Ct Capsule",
    rating: 4,
    reviewCount: 20,
    category: "Classical Dermatological", // Key for Related Products
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Classical Herbal Capsule",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-NEEM-060",
    },
    features: [
      "Known for its antiseptic, anti-fungal, and blood-purifying properties. Supports skin and immunity health.",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical Dermatological / Blood Purifier",
      Description:
        "Neem (Azadirachta indica) is one of nature's most powerful purifiers. The capsules contain the concentrated benefits of Neem leaves, used traditionally for detoxifying the blood and maintaining healthy skin.",
      "How It Works":
        "It works by purifying the blood, neutralizing toxins, and exerting strong antibacterial and antifungal actions, which are crucial for treating skin conditions like acne and eczema.",
      Indication:
        "Skin diseases, acne, eczema, blood purification, and immune support.",
      Dosage:
        "1-2 capsules twice daily after meals, or as directed by a healthcare professional.",
      Presentation: "Available in 60 capsules bottle.",
    },
  },

  // --- ID 210: Arjuna ---
  {
    id: 210,
    image: "../src/assets/img/arjuna.jpg", // Placeholder path
    title: "Arjuna",
    price: 15.5,
    oldPrice: 19.0,
    bundleTag: "60 Ct Capsule",
    rating: 5,
    reviewCount: 35,
    category: "Classical Cardiovascular", // Key for Related Products
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
    image: "../src/assets/img/yasti_madhu_churna.jpg", // Placeholder path
    title: "Yasti Madhu Churna",
    price: 11.5,
    oldPrice: null,
    bundleTag: "100gm Churna",
    rating: 4,
    reviewCount: 15,
    category: "Classical Respiratory", // Key for Related Products
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

  // --- ID 212: Isabgol (Life Care) ---
  {
    id: 212,
    image: "../src/assets/img/isabgol.jpg", // Placeholder path
    title: "Isabgol (Life Care)",
    price: 9.0,
    oldPrice: null,
    bundleTag: "100gm Powder",
    rating: 4,
    reviewCount: 28,
    category: "Classical Digestive", // Key for Related Products
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Classical Fibre Supplement",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-ISAB-100",
    },
    features: ["Useful in habitual and chronic constipation."],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical Digestive / Laxative",
      Description:
        "Isabgol, or Psyllium Husk, is a natural soluble fiber supplement highly effective for managing habitual and chronic constipation. It promotes regular, smooth bowel movements.",
      "How It Works":
        "The husks absorb water in the gut, forming a soft, bulky gel that stimulates bowel movement (peristalsis) and cleanses the intestinal walls gently.",
      Indication:
        "Habitual and chronic constipation, managing irritable bowel syndrome (IBS), and promoting a healthy colon.",
      Dosage:
        "5-10 grams (1-2 teaspoons) mixed in a glass of water, followed by another glass of water, preferably at bedtime.",
      Presentation: "Available in 100gm powder jar.",
    },
  },

  // --- ID 213: Gasher Churna ---
  {
    id: 213,
    image: "../src/assets/img/gasher_churna.jpg", // Placeholder path
    title: "Gasher Churna",
    price: 10.5,
    oldPrice: null,
    bundleTag: "100gm Churna",
    rating: 3,
    reviewCount: 12,
    category: "Classical Digestive", // Key for Related Products
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Classical Ayurvedic Medicine",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-GSC-100",
    },
    features: [
      "Useful in hyperacidity, gastric, abdominal distension, and flatulence.",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical Digestive / Antiflatulent",
      Description:
        "Gasher Churna is a fast-acting Ayurvedic formulation designed to provide quick relief from common symptoms of poor digestion, particularly gas, bloating, and hyperacidity.",
      "How It Works":
        "It contains carminative herbs that help expel trapped gases from the stomach and intestines. It also helps in neutralizing excess stomach acid.",
      Indication:
        "Hyperacidity, gastric discomfort, abdominal distension (bloating), and flatulence.",
      Dosage:
        "2-4 grams after meals with water, or as needed for symptomatic relief.",
      Presentation: "Available in 100gm jar.",
    },
  },

  // --- ID 214: Shilajit Capsule ---
  {
    id: 214,
    image: "../src/assets/img/shilajit_capsule.jpg", // Placeholder path
    title: "Shilajit Capsule",
    price: 24.0,
    oldPrice: 29.0,
    bundleTag: "30 Ct Capsule",
    rating: 5,
    reviewCount: 45,
    category: "Classical Rejuvenator", // Key for Related Products
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Classical Mineral Capsule",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-SLJ-030",
    },
    features: [
      "A natural rejuvenator that supports energy, stamina, and overall vitality.",
    ],
    paymentMethods: ["Visa", "MasterCard"],
    details: {
      "Therapeutic Category": "Classical Rejuvenator / Energy",
      Description:
        "Shilajit is a potent mineral-rich natural substance found in the Himalayas. These capsules are a concentrated source of Fulvic acid and minerals, serving as an outstanding rejuvenator and energy booster.",
      "How It Works":
        "It acts on the mitochondria (cell powerhouses) to boost cellular energy production, which translates to improved stamina, muscle strength, and cognitive function. It also acts as an adaptogen.",
      Indication:
        "Low energy, chronic fatigue, low stamina, and male sexual weakness.",
      Dosage:
        "1 capsule once or twice daily with milk after meals, or as directed by a healthcare professional.",
      Presentation: "Available in 30 capsules blister pack.",
    },
  },
];

export const veterinaryProductData = [
  // --- VET ID 1: Vet Kafher ---
  {
    id: 101,
    image: "../src/assets/img/vet_kafher.jpg",
    title: "Vet Kafher",
    price: 29.0,
    oldPrice: null,
    bundleTag: "200ml Syrup",
    rating: 4,
    reviewCount: 15,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Ayurvedic Herbal Formulation",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-VK-200",
    },
    features: [
      "Relieves respiratory discomfort.",
      "Improves lung health in animals.",
    ],
    paymentMethods: ["Visa", "MasterCard"], // --- DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Veterinary / Respiratory Care",
      Description:
        "Vet Kafher is an Ayurvedic herbal formulation specifically designed for veterinary use to relieve respiratory discomfort and promote overall lung health in animals, including livestock and pets.",
      "How It Works":
        "Acts as a potent expectorant and bronchodilator, helping to clear mucus from the respiratory tract and ease breathing difficulties associated with coughs and congestion.",
      Indication:
        "Cough, cold, respiratory infections, and congestion in farm animals and pets.",
      Dosage:
        "Cattle/Horses: 50 ml twice daily. Calves/Sheep/Goats: 20 ml twice daily. Pets: 5 ml twice daily. Or as directed by a veterinary physician.",
      Presentation: "Available in 200ml Syrup bottle.",
    },
  }, // --- VET ID 2: Vet Livherb ---

  {
    id: 102,
    image: "../src/assets/img/vet_livherb.jpg",
    title: "Vet Livherb",
    price: 35.0,
    oldPrice: null,
    bundleTag: "500ml Tonic",
    rating: 5,
    reviewCount: 22,
    meta: {
      Availability: "In Stock",
      "PRODUCT TYPE": "Herbal Liver Tonic",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-VL-500",
    },
    features: [
      "Supports liver detoxification.",
      "Improves metabolism and appetite in animals.",
    ],
    paymentMethods: ["Visa", "MasterCard"], // --- DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Veterinary / Hepatoprotective",
      Description:
        "Vet Livherb is an effective herbal liver tonic for animals that supports liver detoxification, improves metabolic functions, and enhances appetite, promoting growth and vitality.",
      "How It Works":
        "Contains hepatoprotective herbs that regenerate liver cells, protect against toxins, and stimulate bile secretion, which is crucial for fat digestion and nutrient absorption.",
      Indication:
        "Liver dysfunction, anorexia (loss of appetite), general debility, and during antibiotic treatment.",
      Dosage:
        "Cattle/Horses: 50-60 ml daily. Calves/Sheep/Goats: 15-20 ml daily. Pets: 5-10 ml daily. Administer orally.",
      Presentation: "Available in 500ml Tonic bottle.",
    },
  }, // --- VET ID 3: Vet Siddhamol Malt ---

  {
    id: 103,
    image: "../src/assets/img/vet_siddhamol.jpg",
    title: "Vet Siddhamol Malt",
    price: 42.0,
    oldPrice: null,
    bundleTag: "1Kg Malt",
    rating: 5,
    reviewCount: 30,
    meta: {
      Availability: "Available",
      "PRODUCT TYPE": "Nutritional and Revitalizing Malt",
      "PRODUCT VENDOR": "Siddha Formulation",
      "PRODUCT SKU": "SF-VSM-1K",
    },
    features: [
      "Supports immunity, strength, and overall health in animals.",
      "Nutritional and revitalizing supplement.",
    ],
    paymentMethods: ["Visa", "MasterCard"], // --- DETAILED TABS DATA ---
    details: {
      "Therapeutic Category": "Veterinary / General Tonic",
      Description:
        "Vet Siddhamol Malt is a nutritional and revitalizing malt supplement specifically formulated to boost immunity, strength, and overall health in animals, especially during critical phases like recovery or growth.",
      "How It Works":
        "Provides a blend of highly bioavailable nutrients and immunomodulators that strengthen the body's defenses, improve muscle mass, and enhance energy levels.",
      Indication:
        "General weakness, convalescence, nutritional deficiency, and poor immune response.",
      Dosage:
        "Large Animals: 100g daily. Small Animals: 10g-20g daily, mixed with feed.",
      Presentation: "Available in 1Kg Malt jar.",
    },
  },
];
