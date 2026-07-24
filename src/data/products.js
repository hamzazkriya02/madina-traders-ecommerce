// Category-wise fallback images
export const categoryImages = {
  insecticide: "/images/categories/insecticide.jpg",
  herbicide: "/images/categories/herbicide.jpg",
  fungicide: "/images/categories/fungicide.jpg",
  fertilizer: "/images/categories/fertilizer.jpg",
  planthealth: "/images/categories/planthealth.jpg",
};

export const categories = [
  { name: "Insecticide", slug: "insecticide" },
  { name: "Herbicide", slug: "herbicide" },
  { name: "Fungicide", slug: "fungicide" },
  { name: "Fertilizer", slug: "fertilizer" },
  { name: "Plant Health", slug: "planthealth" },
];

export const products = [
  // ===== FERTILIZERS =====
  { id: "1", name: "AVARI PHOS 17-44-00", slug: "avari-phos-17-44-00", category: "fertilizer", technical: "17% Urea + 44% Phosphate", variants: [{ packSize: "10kg", price: 5790 }] },
  { id: "2", name: "MAXXBOP AVARI", slug: "maxxbop-avari", category: "fertilizer", technical: "Bio Organic Phosphate", variants: [{ packSize: "50kg", price: 3800 }] },
  { id: "3", name: "DAP (Di-Ammonium Phosphate)", slug: "dap-fertilizer", category: "fertilizer", technical: "18% Nitrogen + 46% Phosphate", variants: [{ packSize: "50kg", price: 12500 }] },
  { id: "4", name: "Urea Granular", slug: "urea-granular", category: "fertilizer", technical: "46% Nitrogen", variants: [{ packSize: "50kg", price: 4600 }] },
  { id: "5", name: "NP (NitroPhos)", slug: "nitrophos", category: "fertilizer", technical: "22% Nitrogen + 20% Phosphate", variants: [{ packSize: "50kg", price: 8900 }] },
  { id: "6", name: "Calcium Ammonium Nitrate (CAN)", slug: "can-fertilizer", category: "fertilizer", technical: "26% Nitrogen + Calcium", variants: [{ packSize: "50kg", price: 4200 }] },
  { id: "7", name: "Ammonium Sulphate", slug: "ammonium-sulphate", category: "fertilizer", technical: "21% Nitrogen + 24% Sulphur", variants: [{ packSize: "50kg", price: 3950 }] },
  { id: "8", name: "NPK Water Soluble 20-20-20", slug: "npk-20-20-20", category: "fertilizer", technical: "Balanced NPK (20:20:20)", variants: [{ packSize: "10kg", price: 6200 }, { packSize: "25kg", price: 14500 }] },
  { id: "9", name: "Magnesium Sulphate", slug: "magnesium-sulphate", category: "fertilizer", technical: "9.6% Magnesium + 12% Sulphur", variants: [{ packSize: "25kg", price: 2800 }] },
  { id: "10", name: "Bio-Fertilizer Organic Granules", slug: "bio-fertilizer-organic", category: "fertilizer", technical: "Organic Matter + Soil Conditioners", variants: [{ packSize: "40kg", price: 2400 }] },

  // ===== FUNGICIDES =====
  { id: "11", name: "Copper Oxychloride 50% WP", slug: "copper-oxychloride", category: "fungicide", technical: "Copper Oxychloride 50% WP", variants: [{ packSize: "500gm", price: 755 }, { packSize: "25kg", price: 58500 }] },
  { id: "12", name: "Coroma 35% SC", slug: "coroma-35-sc", category: "fungicide", technical: "Oxine-Copper 34.5% + Tetramycin 0.5%", variants: [{ packSize: "200ml", price: 1380 }] },
  { id: "13", name: "Cymoxanil + Mancozeb 72% WP", slug: "cymoxanil-mancozeb", category: "fungicide", technical: "Cymoxanil + Mancozeb (8%+64%)", variants: [{ packSize: "600gm", price: 1235 }, { packSize: "25kg", price: 59928 }] },
  { id: "14", name: "Metalaxyl + Mancozeb 72% WP", slug: "metalaxyl-mancozeb", category: "fungicide", technical: "Metalaxyl + Mancozeb (8%+64%)", variants: [{ packSize: "250gm", price: 515 }, { packSize: "1kg", price: 1865 }, { packSize: "25kg", price: 53550 }] },
  { id: "15", name: "Mycin 32% SC", slug: "mycin-32-sc", category: "fungicide", technical: "Azoxystrobin + Propiconazole (20+12) SC", variants: [{ packSize: "200ml", price: 1095 }] },
  { id: "16", name: "Success 72% WP", slug: "success-72-wp", category: "fungicide", technical: "Chlorothalonil 640g/kg + Metalaxyl 80g/kg", variants: [{ packSize: "500gm", price: 1225 }, { packSize: "1kg", price: 2375 }] },

  // ===== HERBICIDES =====
  { id: "17", name: "Carmil 30% WP", slug: "carmil-30-wp", category: "herbicide", technical: "Bispyribac Sodium 20% + Pyrazosulfuron Ethyl 10%", variants: [{ packSize: "50gm", price: 465 }, { packSize: "100gm", price: 715 }] },
  { id: "18", name: "Doshaka 55% SC", slug: "doshaka-55-sc", category: "herbicide", technical: "Mesotrione + Atrazine (5%+50%)", variants: [{ packSize: "500ml", price: 820 }, { packSize: "1ltr", price: 1530 }] },
  { id: "19", name: "Doshaka 80% WG", slug: "doshaka-80-wg", category: "herbicide", technical: "Mesotrione + Atrazine (8%+72%)", variants: [{ packSize: "350gm", price: 855 }, { packSize: "500gm", price: 1200 }, { packSize: "1kg", price: 2340 }] },
  { id: "20", name: "Weedzap 48 SL", slug: "weedzap-48-sl", category: "herbicide", technical: "Glyphosate 48% SL", variants: [{ packSize: "1ltr", price: 1050 }] },
  { id: "21", name: "Topterb 28% OD", slug: "topterb-28-od", category: "herbicide", technical: "Terbuthylazine 26% + Topramezone 2%", variants: [{ packSize: "500ml", price: 2215 }] },
  { id: "22", name: "Forward 5% EC", slug: "forward-5-ec", category: "herbicide", technical: "Quizalofop 5% EC", variants: [{ packSize: "500ml", price: 1125 }] },
  { id: "23", name: "Pandox 42% EC", slug: "pandox-42-ec", category: "herbicide", technical: "Pendimethalin + Acetochlor", variants: [{ packSize: "800ml", price: 1275 }] },
  { id: "24", name: "Topzeb 45% EC", slug: "topzeb-45-ec", category: "herbicide", technical: "Pendimethalin 13% + Acetochlor 27% + Oxyfluorfen 5% EC", variants: [{ packSize: "800ml", price: 1860 }] },
  { id: "25", name: "Victorious 96% EC", slug: "victorious-96-ec", category: "herbicide", technical: "S-Metolachlor", variants: [{ packSize: "800ml", price: 1990 }] },
  { id: "26", name: "Weednix 30% OD", slug: "weednix-30-od", category: "herbicide", technical: "Topramezone 30 OD", variants: [{ packSize: "35ml", price: 775 }] },

  // ===== INSECTICIDES =====
  { id: "27", name: "Actavari 50% WDG", slug: "actavari-50-wdg", category: "insecticide", technical: "Clothianidin 50% WDG", variants: [{ packSize: "60gm", price: 650 }] },
  { id: "28", name: "Bifenthrin 10% EC", slug: "bifenthrin-10-ec", category: "insecticide", technical: "Bifenthrin 10% EC", variants: [{ packSize: "500ml", price: 1020 }] },
  { id: "29", name: "C-Dan 4% G", slug: "c-dan-4-g", category: "insecticide", technical: "Cartap Hydrochloride 4% G", variants: [{ packSize: "9kg", price: 2750 }] },
  { id: "30", name: "Cure 1.8% EC", slug: "cure-1-8-ec", category: "insecticide", technical: "Abamectin 1.8% EC", variants: [{ packSize: "400ml", price: 660 }, { packSize: "1ltr", price: 1450 }] },
  { id: "31", name: "Dimax 40% EC", slug: "dimax-40-ec", category: "insecticide", technical: "Dimethoate 40% EC", variants: [{ packSize: "1ltr", price: 2010 }] },
  { id: "32", name: "Dumei 50% WG", slug: "dumei-50-wg", category: "insecticide", technical: "Flonicamid 50% WG", variants: [{ packSize: "60gm", price: 890 }, { packSize: "120gm", price: 1750 }] },
  { id: "33", name: "Fena 36% SC", slug: "fena-36-sc", category: "insecticide", technical: "Chlorfenapyr 36% SC", variants: [{ packSize: "200ml", price: 975 }, { packSize: "400ml", price: 1825 }] },
  { id: "34", name: "Fena Plus 10% WDG", slug: "fena-plus-10-wdg", category: "insecticide", technical: "Chlorfenapyr 10% WDG", variants: [{ packSize: "350gm", price: 905 }] },
  { id: "35", name: "Folium 10% SC", slug: "folium-10-sc", category: "insecticide", technical: "Chlorantraniliprole + Lufenuron 10% (5%+5%)", variants: [{ packSize: "150ml", price: 695 }, { packSize: "200ml", price: 895 }] },
  { id: "36", name: "Kwick Lite 0.4% G", slug: "kwick-lite-0-4-g", category: "insecticide", technical: "Fipronil 0.4% GR", variants: [{ packSize: "7kg", price: 1085 }, { packSize: "8kg", price: 1235 }] },
  { id: "37", name: "Kwick Super 0.35% GR", slug: "kwick-super-0-35-gr", category: "insecticide", technical: "Fipronil 0.3% + Emamectin Benzoate 0.05%", variants: [{ packSize: "8kg", price: 1225 }] },
  { id: "38", name: "Kwick Ultra 80%", slug: "kwick-ultra-80", category: "insecticide", technical: "Fipronil 80% WDG", variants: [{ packSize: "30gm", price: 825 }] },
  { id: "39", name: "Mono 5% G", slug: "mono-5-g", category: "insecticide", technical: "Monomehypo 5% G", variants: [{ packSize: "7kg", price: 1190 }] },
  { id: "40", name: "Purex 0.4% G", slug: "purex-0-4-g", category: "insecticide", technical: "Chlorantraniliprole 0.4%", variants: [{ packSize: "4kg", price: 850 }] },
  { id: "41", name: "Sanophos 44% EC", slug: "sanophos-44-ec", category: "insecticide", technical: "Cypermethrin 4% + Profenofos 40%", variants: [{ packSize: "800ml", price: 2095 }] },
  { id: "42", name: "Saphate 75% SP", slug: "saphate-75-sp", category: "insecticide", technical: "Acephate 75% SP", variants: [{ packSize: "300gm", price: 935 }, { packSize: "600gm", price: 1840 }] },
  { id: "43", name: "Sega Pest Clear 3% SC", slug: "sega-pest-clear-3-sc", category: "insecticide", technical: "Emamectin 1% + Lufenuron 2%", variants: [{ packSize: "200ml", price: 300 }, { packSize: "400ml", price: 520 }] },
  { id: "44", name: "Sega Plus 50% WDG", slug: "sega-plus-50-wdg", category: "insecticide", technical: "Thiamethoxam + Nitenpyram 50% WDG", variants: [{ packSize: "50gm", price: 610 }] },
  { id: "45", name: "Swinger 60% WG", slug: "swinger-60-wg", category: "insecticide", technical: "Pymetrozine 20% + Dinotefuran 40% WG", variants: [{ packSize: "100gm", price: 780 }] },
  { id: "46", name: "Tomba 5% SC", slug: "tomba-5-sc", category: "insecticide", technical: "Fipronil 5% SC", variants: [{ packSize: "480ml", price: 1005 }] },
  { id: "47", name: "Zhongnan Swords 15% WG", slug: "zhongnan-swords-15-wg", category: "insecticide", technical: "Emamectin Benzoate 5% + Chlorfluazuron 10%", variants: [{ packSize: "120gm", price: 2065 }] },

  // ===== PLANT HEALTH =====
  { id: "48", name: "Attribute", slug: "attribute", category: "planthealth", technical: "Amino Acid", variants: [{ packSize: "1ltr", price: 1445 }] },
  { id: "49", name: "Avari Gold 80% WG", slug: "avari-gold-80-wg", category: "planthealth", technical: "Sulphur 80% WG", variants: [{ packSize: "1kg", price: 760 }] },
  { id: "50", name: "Bounzer", slug: "bounzer", category: "planthealth", technical: "Boron 5%", variants: [{ packSize: "500ml", price: 400 }] },
  { id: "51", name: "Humisol Plus", slug: "humisol-plus", category: "planthealth", technical: "Humic Acid 10% + Potash 3.5% (Liquid)", variants: [{ packSize: "4ltr", price: 1265 }, { packSize: "20ltr", price: 4330 }, { packSize: "200ltr", price: 36300 }] },
  { id: "52", name: "Nawab", slug: "nawab", category: "planthealth", technical: "NPK", variants: [{ packSize: "1kg", price: 720 }, { packSize: "25kg", price: 15900 }] },
  { id: "53", name: "Nuphar", slug: "nuphar", category: "planthealth", technical: "NPK 8-8-6", variants: [{ packSize: "500ml", price: 280 }, { packSize: "1ltr", price: 460 }] },
  { id: "54", name: "Oregon 5% Zinc", slug: "oregon-5-zinc", category: "planthealth", technical: "Zinc Chelated 5%", variants: [{ packSize: "2kg", price: 1775 }, { packSize: "25kg", price: 22250 }] },
  { id: "55", name: "Potagro 30% (F)", slug: "potagro-30-f", category: "planthealth", technical: "Potash 30% (Fertigation Grade)", variants: [{ packSize: "3ltr", price: 1690 }, { packSize: "20ltr", price: 10080 }, { packSize: "200ltr", price: 97995 }] },
  { id: "56", name: "Potagro 30%", slug: "potagro-30", category: "planthealth", technical: "Potash 30% (Foliar Grade)", variants: [{ packSize: "1ltr", price: 1260 }] },
  { id: "57", name: "SOP 50% Granules", slug: "sop-50-granules", category: "planthealth", technical: "Sulphate of Potash 50%", variants: [{ packSize: "10kg", price: 3975 }, { packSize: "25kg", price: 9790 }] },
  { id: "58", name: "SOP 50% Powder", slug: "sop-50-powder", category: "planthealth", technical: "Sulphate of Potash 50%", variants: [{ packSize: "10kg", price: 3850 }, { packSize: "25kg", price: 9390 }] },
  { id: "59", name: "Sprout 10%", slug: "sprout-10", category: "planthealth", technical: "Zinc Liquid 10%", variants: [{ packSize: "3ltr", price: 865 }, { packSize: "20ltr", price: 5660 }, { packSize: "200ltr", price: 49350 }] },
  { id: "60", name: "Sulphur 80% WG", slug: "sulphur-80-wg", category: "planthealth", technical: "Sulphur 80% WG", variants: [{ packSize: "25kg", price: 17000 }] },
  { id: "61", name: "Tumbler (06:23:01)", slug: "tumbler-06-23-01", category: "planthealth", technical: "NPK (6:23:1) Liquid", variants: [{ packSize: "5ltr", price: 5625 }] },
  { id: "62", name: "X-Cell GR (40+7)", slug: "x-cell-gr-40-7", category: "planthealth", technical: "Potassium Humate", variants: [{ packSize: "8kg", price: 1825 }, { packSize: "8kg (Carton)", price: 1925 }] },
  { id: "63", name: "X-Cell GR (Humisol)", slug: "x-cell-gr-humisol", category: "planthealth", technical: "Humic Acid 50%", variants: [{ packSize: "8kg", price: 1375 }, { packSize: "8kg (Carton)", price: 1475 }] },
];